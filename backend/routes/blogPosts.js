const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET blogPosts listing. */
  router.get("/", (req, res) => {
    const query = {
      text: "SELECT * FROM blogPosts;",
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  // GET specific blogEntry

  router.get("/:id", (req, res) => {
    const id = req.params.id;

    const query = {
      text: `SELECT * FROM blogPosts WHERE id=${id};`,
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  // FOR ADMIN PAGE
  router.post("/", (req, res) => {
    // extract the data from req.body
    const { title, slug, article, coverurl, photoUrls, dateString } = req.body;

    console.log({ title, slug, article, coverurl, photoUrls, dateString });

    // create an insert query in the db
    const query = {
      text: `INSERT INTO blogPosts (title, slug, article, coverurl, photoUrls, dateString) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      values: [title, slug, article, coverurl, photoUrls, dateString],
    };

    db.query(query)
      .then((result) => res.json(result[0]))
      .catch((err) => console.log(err));

    // return the newly created blogEntry back
  });

  router.put("/:title", (req, res) => {
    const photourls = req.body;
    const blogPostTitle = req.params.title;

    // create an update query in the db
    const query = {
      text: `UPDATE blogposts SET photourls=$1 WHERE blogposts.title=$2 RETURNING *;`,
      values: [photourls, blogPostTitle],
    };

    db.query(query)
      .then((result) => res.json(result[0]))
      .catch((err) => console.log(err));

    // return the updated blogPost back
  });

  return router;
};

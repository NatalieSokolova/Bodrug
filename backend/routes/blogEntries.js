const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET blogEntries listing. */
  router.get("/", (req, res) => {
    const query = {
      text: "SELECT * FROM blogEntries;",
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  // GET specific blogEntry

  router.get("/:id", (req, res) => {
    const id = req.params.id;

    const query = {
      text: `SELECT * FROM blogEntries WHERE id=${id};`,
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  // FOR ADMIN PAGE
  router.post("/", (req, res) => {
    // extract the data from req.body
    const { title, article, coverUrl, photoUrls, dateString } = req.body;

    console.log({ title, article, coverUrl, photoUrls, dateString });

    // create an insert query in the db
    const query = {
      text: `INSERT INTO blogEntries (title, article, coverUrl, photoUrls, dateString) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      values: [title, article, coverUrl, photoUrls, dateString],
    };

    db.query(query)
      .then((result) => res.json(result[0]))
      .catch((err) => console.log(err));

    // return the newly created blogEntry back
  });

  return router;
};

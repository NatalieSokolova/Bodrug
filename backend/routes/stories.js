const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET stories listing. */
  router.get("/", (req, res) => {
    const query = {
      text: "SELECT * FROM stories;",
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  // GET specific story by id

  router.get("/:id", (req, res) => {
    const id = req.params.id;

    const query = {
      text: `SELECT * FROM stories WHERE id=${id};`,
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  // GET photos by story id

  router.get("/:id/photos", (req, res) => {
    const id = req.params.id;

    const query = {
      text: `SELECT photos.id, photos.description, photos.url, photos.story_id FROM photos JOIN stories ON stories.id=photos.story_id WHERE stories.id=${id};`,
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  // FOR ADMIN PAGE
  router.post("/", (req, res) => {
    // extract the data from req.body
    const { name, description, coverurl } = req.body;

    console.log({ name, description, coverurl });

    // create an insert query in the db
    const query = {
      text: `INSERT INTO stories (name, description, coverurl) VALUES ($1, $2, $3) RETURNING *;`,
      values: [name, description, coverurl],
    };

    db.query(query)
      .then((result) => res.json(result[0]))
      .catch((err) => console.log(err));

    // return the newly created story back
  });

  return router;
};

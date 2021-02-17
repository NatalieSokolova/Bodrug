const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET collections listing. */
  router.get("/", (req, res) => {
    const query = {
      text: "SELECT * FROM collections;",
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  // GET specific collection by id

  router.get("/:id", (req, res) => {
    const id = req.params.id;

    const query = {
      text: `SELECT * FROM collections WHERE id=${id};`,
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  // GET photos by collection id

  router.get("/:id/photos", (req, res) => {
    const id = req.params.id;

    const query = {
      text: `SELECT photos.id, photos.description, photos.url, photos.collection_id FROM photos JOIN collections ON collections.id=photos.collection_id WHERE collections.id=${id};`,
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
      text: `INSERT INTO collections (name, description, coverurl) VALUES ($1, $2, $3) RETURNING *;`,
      values: [name, description, coverurl],
    };

    db.query(query)
      .then((result) => res.json(result[0]))
      .catch((err) => console.log(err));

    // return the newly created collection back
  });

  return router;
};

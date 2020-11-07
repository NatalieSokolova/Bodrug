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
    const { description } = req.body;

    console.log({ description });

    // create an insert query in the db
    const query = {
      text: `INSERT INTO collections (description) VALUES ($1) RETURNING *;`,
      values: [description],
    };

    db.query(query)
      .then((result) => res.json(result[0]))
      .catch((err) => console.log(err));

    // return the newly created collection back
  });

  return router;
};

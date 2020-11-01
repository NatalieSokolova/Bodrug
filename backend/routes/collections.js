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

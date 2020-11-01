const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET photos listing. */
  router.get("/", (req, res) => {
    const query = {
      text: "SELECT * FROM photos;",
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  // FOR ADMIN PAGE
  router.post("/", (req, res) => {
    // extract the data from req.body
    const { description, url } = req.body;

    console.log({ description }, { url });

    // create an insert query in the db
    const query = {
      text: `INSERT INTO photos (description, url, collection_id) VALUES ($1, $2, $3) RETURNING *;`,
      values: [description, url, collection_id],
    };

    db.query(query)
      .then((result) => res.json(result[0]))
      .catch((err) => console.log(err));

    // return the newly created photo back
  });

  return router;
};

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET photos listing. */
  router.get("/", (req, res) => {
    const query = {
      text: "SELECT * FROM test;",
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  // FOR ADMIN PAGE
  router.post("/", (req, res) => {
    // extract the data from req.body
    const { name, status, url, thumbUrl } = req.body;

    // console.log({ description }, { url });

    // create an insert query in the db
    const query = {
      text: `INSERT INTO test (name, status, url, thumbUrl) VALUES ($1, $2, $3, $4) RETURNING *;`,
      values: [name, status, url, thumbUrl],
    };

    db.query(query)
      .then((result) => res.json(result[0]))
      .catch((err) => console.log(err));

    // return the newly created photo back
  });

  return router;
};

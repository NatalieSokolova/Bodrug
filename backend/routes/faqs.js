const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET faqs listing. */
  router.get("/", (req, res) => {
    const query = {
      text: "SELECT * FROM faqs;",
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  // FOR ADMIN PAGE
  router.post("/", (req, res) => {
    // extract the data from req.body
    const { question, answer } = req.body;

    console.log({ question }, { answer });

    // create an insert query in the db
    const query = {
      text: `INSERT INTO faqs (question, answer) VALUES ($1, $2) RETURNING *;`,
      values: [question, answer],
    };

    db.query(query)
      .then((result) => res.json(result[0]))
      .catch((err) => console.log(err));

    // return the newly created faq back
  });

  return router;
};

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

  router.delete("/:id", (req, res) => {
    const recordId = req.params.id;

    const query = {
      text: `DELETE FROM faqs WHERE faqs.id=$1 RETURNING *;`,
      values: [recordId],
    };

    db.query(query)
      .then((result) => res.json(result[0]))
      .catch((err) => console.log(err));
  });

  return router;
};

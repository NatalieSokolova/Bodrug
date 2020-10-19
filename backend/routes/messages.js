const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // GET messages listing.
  router.get("/", (req, res) => {
    const query = {
      text: "SELECT * FROM messages;",
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  //test
  router.post("/messages", (req, res, next) => {
    // create an insert query in the db
    const query = {
      text: `INSERT INTO messages (name, email, message) VALUES ($1, $2, $3) RETURNING *;`,
      values: [name, email, message],
    };

    db.query(query)
      .then((result) => res.json(result[0]))
      .catch((err) => console.log(err));

    // return the newly created message back
  });

  return router;
};

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET paintings listing. */
  router.get("/", (req, res) => {
    const query = {
      text: "SELECT * FROM paintings;",
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  // FOR ADMIN PAGE
  router.post("/", (req, res) => {
    // extract the data from req.body
    const { description, url, year, materials, price } = req.body;

    console.log({ description }, { url }, { year }, { materials }, { price });

    // create an insert query in the db
    const query = {
      text: `INSERT INTO paintings (description, url, year, materials, price) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      values: [description, url, year, materials, price],
    };

    db.query(query)
      .then((result) => res.json(result[0]))
      .catch((err) => console.log(err));

    // return the newly created painting back
  });

  return router;
};

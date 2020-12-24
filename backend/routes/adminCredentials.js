const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const query = {
      text: "SELECT * FROM adminCredentials;",
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  return router;
};

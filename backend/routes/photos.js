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
    const { description, url, collection_id, story_id } = req.body;

    console.log({ description }, { url });

    // create an insert query in the db
    const query = {
      text: `INSERT INTO photos (description, url, collection_id, story_id) VALUES ($1, $2, $3, $4) RETURNING *;`,
      values: [description, url, collection_id, story_id],
    };

    db.query(query)
      .then((result) => res.json(result[0]))
      .catch((err) => console.log(err));

    // return the newly created photo back
  });

  router.put("/:id", (req, res) => {
    // extract the data from req.body

    console.log("REQ! ", req.body);

    const name = req.body.collection.name;
    const photoId = req.body.photoId;

    console.log("name: ", name);
    console.log("photoId: ", photoId);

    const collectionQuery = {
      // text: `SELECT id FROM collections WHERE name =$1`,
      text: `UPDATE photos SET collection_id = (SELECT id FROM collections WHERE name =$1) WHERE photos.id=$2`,
      values: [name, photoId],
    };

    db.query(collectionQuery)
      .then((result) => res.json(result))
      .catch((err) => console.log("ERROR: ", err));
  });

  // update photo record in the db
  // const query = {
  //   text: `INSERT INTO photos (description, url, collection_id, story_id) VALUES ($1, $2, $3, $4) RETURNING *;`,
  //   values: [description, url, collection_id, story_id],
  // };

  // db.query(query)
  //   .then((result) => res.json(result[0]))
  //   .catch((err) => console.log(err));
  // });

  return router;
};

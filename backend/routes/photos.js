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

  router.put("/upd_collection_id", (req, res) => {
    const collectionName = req.body.collection.name;
    // const storyName = req.body.story.name;
    const photoId = req.body.photoId;

    const collectionQuery = {
      text: `UPDATE photos SET collection_id = (SELECT id FROM collections WHERE name =$1) WHERE photos.id=$2`,
      values: [collectionName, photoId],
    };

    db.query(collectionQuery)
      .then((result) => res.json(result))
      .catch((err) => console.log("ERROR: ", err));
  });

  router.put("/upd_story_id", (req, res) => {
    const storyName = req.body.story.name;
    const photoId = req.body.photoId;

    const storyQuery = {
      text: `UPDATE photos SET story_id = (SELECT id FROM stories WHERE name =$1) WHERE photos.id=$2`,
      values: [storyName, photoId],
    };

    db.query(storyQuery)
      .then((result) => res.json(result))
      .catch((err) => console.log("ERROR: ", err));
  });

  return router;
};

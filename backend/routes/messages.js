const express = require("express");
const router = express.Router();

// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
// const cors = require("cors");

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
  router.post("/messages", (req, res) => {
    // create an insert query in the db
    //   const query = {
    //     text: `INSERT INTO messages (name, email, message) VALUES ($1, $2, $3) RETURNING *;`,
    //     values: [name, email, message],
    //   };

    //   db.query(query)
    //     .then((result) => res.json(result[0]))
    //     .catch((err) => console.log(err));

    //   // return the newly created message back
    // });
    var data = req.body;

    var smtpTransport = nodemailer.createTransport({
      service: "yahoo",
      port: 465,
      auth: {
        user: "testforbodrug@yahoo.com",
        pass: "yManiutin19?o",
      },
    });

    var mailOptions = {
      from: data.email,
      to: "testforbodrug@yahoo.com",
      subject: "New Message For Bodrug",
      html: `<p>${data.name}</p>
            <p>${data.email}</p>
            <p>${data.message}</p>`,
    };

    smtpTransport.sendMail(mailOptions, (error, res) => {
      if (error) {
        res.send(error);
      } else {
        res.send("Success");
      }
      smtpTransport.close();
    });
  });
  return router;
};

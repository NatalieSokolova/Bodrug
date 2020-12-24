const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./db");

const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");
const photosRouter = require("./routes/photos");
const paintingsRouter = require("./routes/paintings");
const faqsRouter = require("./routes/faqs");
const collectionsRouter = require("./routes/collections");
const storiesRouter = require("./routes/stories");
const blogEntriesRouter = require("./routes/blogEntries");
const adminCredentialsRouter = require("./routes/adminCredentials");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter(db));
// app.use("/users", usersRouter(db));
app.use("/photos", photosRouter(db));
app.use("/paintings", paintingsRouter(db));
app.use("/faqs", faqsRouter(db));
app.use("/collections", collectionsRouter(db));
app.use("/stories", storiesRouter(db));
app.use("/blogEntries", blogEntriesRouter(db));
app.use("/adminCredentials", adminCredentialsRouter(db));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

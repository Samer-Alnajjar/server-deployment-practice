"use strict"

// Importing packages and files
const express = require("express");
const notFoundHandler = require("./error-handlers/404.js");
const errorHandler = require("./error-handlers/500.js");

// Configuring packages
const app = express();


// Routes
app.get("/", handleHome);

app.get("/bad", handleError);

app.use(errorHandler);

app.use("*", notFoundHandler);



// Functions
/**
 * This function will run when requesting the home routes "/".
 */
function handleHome(req, res) {
  res.send("Hello World");
}

/**
 * This function will run when requesting the "/bad" route.
 */
function handleError(req, res) {
  throw new Error("Something went wrong");
}

// Exporting modules

module.exports = {
  app: app,
  start: start
}

/**This will listen to the Server
 * @param {number} port
 * @example 
 * start(port)
 */

// Listening to the Server
function start(port) {
  app.listen(port, () => console.log(`Server is listening to port ${port}`));
}
"use strict"

require("dotenv").config();

const server = require("./server.js");
const port = process.env.PORT;

server.start(port);
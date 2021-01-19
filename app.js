//Add dependencies
require("dotenv").config();
const express = require("express");
const app = express();

//requires middlewares
app.use(express.json());

//listen to server and start server

module.exports = app;

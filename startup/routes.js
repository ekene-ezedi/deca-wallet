//define packages/modules
const express = require("express");
const auth = require("../routes/auth");

//route middlewares
module.exports = function (app) {
  app.use(express.json());
  app.use("/api/auth", auth);
};

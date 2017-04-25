var express = require("express");
var fileRouter = express.Router();
var validate = require ("./validate.js");
var uuid = require("uuid");

fileRouter.get("/", function (req, res){
    res.render("index.html");
});

module.exports = filesRouter;
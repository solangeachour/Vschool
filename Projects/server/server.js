var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var ejs = require("ejs");
var path = require("path");
var apiRouter = require("./app.js");
var fileRouter = require("./files.js");
mongoose.connect("mongodb://localhost/Rest",function(){
    console.log("oprn")
});
var port = process.env.Port || 5000;
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//setup server to host static files
app.use(express.static(path.join(__dirname + "\\..\\Public")));
//app.use(express.static(path.join(__dirname + "\\..\\public\views")));
app.set("views", __dirname + "\\..\\Public\\views");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");
app.use(fileRouter);
app.use("/voted", apiRouter);
app.listen(port, function () {
    console.log("server is running on " + port);

});
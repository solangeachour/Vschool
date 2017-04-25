var express = require("express");
var bodyParser = require("body-parser");
var uuid = require("uuid");
var filesRouter = require("./files.js");
var apiRouter = require("./api.js");
var menu = require("./menu.js");
var ejs = require("ejs");
var path = require("path");
var validate = require ("./validate.js");
var port = process.env.Port || 8080;
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(filesRouter);

app.use(apiRouter);
app.use(express.static(path.join( __dirname + "\\..\\Public")));
app.set("views", __dirname + "\\..\\public/views");

app.engine("html",ejs.renderFile);
app.set("view engine","ejs");
app.get("/", function (req, res){
    res.render("index.html");
});


app.listen(port, function () {
    console.log("your port is " + port);
});

    
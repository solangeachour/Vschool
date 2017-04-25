var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var authRouter = require("./Routes/auth.js");
var expressJwt = require("express-jwt");
var ejs = require("ejs");
var path = require("path");

var apiRouter = require("./Routes/api.js");
var fileRouter = require("./files.js");

var config = require("./Routes/config.js");

mongoose.connect("mongodb://localhost/" + config.database, function () {
    console.log("open the connection with DB")
});

var port = process.env.Port || 8080;
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));

//setup server to host static files
app.use(express.static(__dirname + "\\..\\public"));
app.set("views", __dirname + "\\..\\public\\views");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");
app.use(bodyParser.json());



//app.use("/api", expressJwt({
//    secret: config.secret
//}));

app.use("/api", apiRouter);

app.use("/auth", authRouter);
app.use(fileRouter);

app.listen(port, function () {
    console.log("server is running on " + port);

});
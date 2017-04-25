var express = require("express");

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var authRouter = require("./routes/auth.js");
var expressJwt = require("express-jwt");
var path = require("path");
var ejs = require("ejs");
var apiRouter = require("./routes/api.js");
var fileRouter = require("./routes/files.js");

var config = require("./config.js");
mongoose.connect("mongodb://localhost/" + config.database, function () {
    console.log("open the connection with DB")
});
var app = express();
var port = process.env.Port || 8080;
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//setup server to host static files
app.use(express.static(__dirname + "\\..\\public"));
app.set("views", __dirname + "\\..\\public\\views");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");



app.use(fileRouter);
//app.use("/api", expressJwt({
//    secret: config.secret
//}));

app.use("/api", apiRouter);
app.use("/auth", authRouter);
app.listen(port, function () {
    console.log("server is running on " + port);

});
var express = require("express");

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var authRouter = require("./Routes/auth.js");
var expressJwt = require("express-jwt");


var apiRouter = require("./Routes/api.js");
var fileRouter = require("./files.js");

var config = require("./Routes/config.js");
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
//app.use(express.static(path.join(__dirname + "\\..\\Public")));
//
//app.set("views", __dirname + "\\..\\Public\\views");

//setup server to handle html


//app.use(fileRouter);
app.use("/api", expressJwt({
    secret: config.secret
}));

app.use("/api", apiRouter);
app.use("/auth", authRouter);
app.listen(port, function () {
    console.log("server is running on " + port);

});
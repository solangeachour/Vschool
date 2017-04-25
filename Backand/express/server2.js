var expressService = require("express");
var app = expressService();
var bodyParser = require("body-parser");

var port = process.env.Port || 8000;

var bounty = require("./data.js");

app.use(bodyParser.urlencoded({extended: false
                              }));
app.use(bodyParser.json());


app.get("/bounty", function (request, response) {
    response.status(200).send({success:true, data:bounty});
});
app.post("/bounty",function (request, response) {
   bounty.push(request.body);
    response.send(200).send({success:true});
});

app.listen(port, function () {
    console.log("your port is " + port);
});
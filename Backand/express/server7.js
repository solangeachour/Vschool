var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var validate = require("./valid.js");

var animals = require("./DUnique.js");
var port = process.env.Port || 8080;

var uuid = require("uuid");
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get("/bounty", function (req, res) {
    var filterData = [];
    if (Object.keys(req.query).length == 0) {

        res.status(200).send(animals);

    } else {

        for (key in req.query) {
            for (var i = 0; i < bounty.length; i++) {
                console.log(bounty[i][key] + " == " + req.query[key])
                if (bounty[i][key] == req.query[key]) {
                    filterData.push(bounty[i]);

                }
            }
        }
        console.log(filterData)
        res.status(200).send(filterData);
    }

});
app.post("/bounty", function (req, res) {


    var animals = {
        id: uuid.v4(),
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Living: req.body.Living,
        bountyAmount: req.body.bountyAmount,
      type: req.body.type  
    };

    var didPass = validate(data);
    if (didPass.pass == false) {
        res.status(400).send({
            message: didPass.failure
        });

    } else {
        bounty.push(data);
    }
});

app.delete("/bounty:id", function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < bounty.length; i++) {
        if (id == animals[i].id) {
            bounty.splice(i, 1);
            res.status(200).send({
                message: "you have deleted the bounty with id of " + id
            });
        }
    }
    res.status(404).send({
        message: "No such  animal with id of " + id
    });
});
app.put("/bounty/:id", function (req, res) {
    console.log(req.query);

    for (var i = 0; i < bounty.length; i++) {
        if (req.params.id == bounty[i].id) {
            for (key in req.query) {
                if (bounty[i][key] == undefined) {
                    res.status(400).send({
                        message: "key" + key + " does not exists"
                    });
                } else {
                    bounty[i][key] = req.query[key];
                }
            }
            res.status(200).send({
                message: "Iten has been ...update" + req.params.id
            });
            return;
        }
    }

    res.status(404).send({
        message: "No such  bounty with id of " + req.params.id
    });

});


app.listen(port, function () {
    console.log("your port is " + port);
});
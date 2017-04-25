var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var validate = require("./utils.js");

var animals = require("./animals.js");
var port = process.env.Port || 8080;

var uuid = require("uuid");
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get("/animals/:id", function (req, res) {

    var id = req.params.id;
    for (var i = 0; i < animals.length; i++) {
        if (id == animals[i].id) {
            res.status(200).send(animals[i]);

        }
    }

    res.status(400).send({
        message: " Data",
        data: animals
    });
});

app.get("/animals", function (req, res) {

    if (Object.keys(req.query).length == 0) {

        res.status(200).send(animals);

    } else {
        var filterData = [];
        for (key in req.query) {

            for (var i = 0; i < animals.length; i++) {

                if (animals[i][key] == req.query[key]) {
                    filterData.push(animals[i]);

                }
            }
        }

        console.log(filterData)
        res.status(200).send({
            message: "filter Data",
            data: filterData
        });
    }

});
app.post("/animals", function (req, res) {

//    var animals = {
//        id: uuid.v4(),
//        name: req.body.name,
//        age: req.body.age,
//        isTasty: req.body.isTasty
//
//    };

    var didPass = validate(req.body);
    if (didPass.pass == false) {
        res.status(400).send({
            message: didPass.failure
        });

    } else {
//        animals.push(data);
         animals.push(req.body);
        res.status(200).send({
            message: "data added",
            data: animals
        });
    }
});

app.delete("/animals:id", function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < animals.length; i++) {
        if (id == animals[i].id) {
            animals.splice(i, 1);
            res.status(200).send({
                message: "you have deleted the animal with id of " + id
            });
        }
    }
    res.status(404).send({
        message: "No such  animal with id of " + id
    });
});
app.put("/animals/:id", function (req, res) {
    //    console.log(req.query);
    var id = req.params.id;
    for (var i = 0; i < animals.length; i++) {
        if (req.params.id == animals[i].id) {
            for (key in req.query) {
                if (animals[i][key] == undefined) {
                    res.status(400).send({
                        message: "key" + key + " does not exists"
                    });
                } else {
                    console.log(req.query[key])
                    animals[i][key] = req.query[key];

                }
            }
            res.status(200).send({
                message: "Iten has been ...update " + req.params.id
            });

        }
    }

    res.status(404).send({
        message: "No such  animal with id of " + req.params.id
    });

});


app.listen(port, function () {
    console.log("your port is " + port);
});
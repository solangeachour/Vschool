var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var validate = require("./utils.js");

var animals = require("./animals.js");
var port = process.env.Port || 8000;

var uuid = require("uuid");
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get("/animals", function (req, res) {
    res.status(200).send({
        "message": "here is the data",
        data: animals
    });
});
app.post("/animals", function (req, res) {

    var animals = {
        id: uuid.v4(),
        name: req.body.name,
        age: req.body.age,

        isTasty: req.body.isTasty

    };

    var didPass = validate(data);
    if (didPass.pass == false) {
        res.status(400).send({
            message: didPass.failure
        });

    } else {
        animals.push(data);
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
    console.log(req.query);
      for (var i = 0; i<animals.length; i++) {
       if (req.params.id == animals[i].id) {
    
    
    
    
    
            var animals = req.body;
            for (var i = 0; i<animals.length; i++) {

                    if (req.params.id == animals[i].id) {
                        var data = {
                             id: uuid.v4(),
         name: req.body.name,
         age: req.body.age,

         isTasty: req.body.isTasty
                        }
        
                    };


                    var didPass = validate(data);
                    if (didPass.pass == false) {
                        res.status(400).send({
                                    message: didPass.failure});
                                } 
                else {
                                    res.status(200).send({
                                            message: "Database has been update "})

                                        }
                        
                                }
                                res.status(404).send({
                                    message: "No such  animal with id of " + req.params.id
                                });

                                app.listen(port, function () {
                                    console.log("Server has started on port" + port);
                                });


});

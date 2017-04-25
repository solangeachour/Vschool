var express = require("express");
var bodyParser = require("body-parser");
var uuid = require("uuid");
var menu = require("./menu.js");
var validate = require ("./validate.js");
var port = process.env.Port || 8080;
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get("/menu", function (req, res) {
    res.render("index.html");
     var filterData = [];
    if (Object.keys(req.query).length == 0) {

        res.status(200).send(menu);
        
    } else {
       
        for (key in req.query) {
            for (var i = 0; i < menu.length; i++) {
                console.log(menu[i][key] + " == " + req.query[key])
                if (menu[i][key] == req.query[key]) {
                    filterData.push(menu[i]);

                }
            }
        }
        console.log(filterData)
        res.status(200).send(filterData);
    }

});
app.get("/menu/:id", function (req, res) {

    var id = req.params.id;
    for (var i = 0; i < menu.length; i++) {
        if (id == menu[i].id) {
            res.status(200).send(menu[i]);

        }
    }

    res.status(400).send({
        message: " Data",
        data: menu
    });
});
app.post("/menu", function(req,res){
   
     var didPass = validate(req.body);
    if (didPass.pass == false) {
        res.status(400).send({
            message: didPass.failure
        });

    } else {

         menu.push(req.body);
        res.status(200).send({
            message: "data add",
            data: menu
        });
    }
});

app.delete("/menu/:id",function(req,res){
    
  var id = req.params.id;
    for (var i = 0; i < menu.length; i++) {
        if (id == menu[i].id) {
            menu.splice(i, 1);
            res.status(200).send({
                message: "you have deleted the menu with id of " + id
            });
        }
    }
    res.status(404).send({
        message: "No such  menu with id of " + id
    });
});
app.put("/menu/:id",function(req,res){

    var id = req.params.id;
    for (var i = 0; i < menu.length; i++) {
        if (req.params.id == menu[i].id) {
            for (key in req.query) {
                if (menu[i][key] == undefined) {
                    res.status(400).send({
                        message: "key" + key + " does not exists"
                    });
                } else {
                    console.log(req.query[key])
                    menu[i][key] = req.query[key];

                }
            }
            res.status(200).send({
                message: "Menu has been ...update " + req.params.id
            });

        }
    }

    res.status(404).send({
        message: "No such  menu with id of " + req.params.id
    });

});


app.listen(port, function () {
    console.log("your port is " + port);
});

    

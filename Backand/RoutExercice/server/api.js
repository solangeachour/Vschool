var express = require("express");
var apiRouter = express.Router();
apiRouter.get("/menu", function (req, res) {
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




apiRouter.get("/menu/:id", function (req, res) {

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
apiRouter.post("/menu", function(req,res){
   
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

apiRouter.delete("/menu/:id",function(req,res){
    
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
apiRouter.put("/menu/:id",function(req,res){

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

module.exports = apiRouter;
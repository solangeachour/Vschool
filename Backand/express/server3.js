var expressService = require("express");
var app = expressService();
var bodyParser = require("body-parser");

var port = process.env.Port || 8000;

var bounty = require("./DUnique.js");
var uuid = require("uuid");
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get("/bounty", function (req, res) {
    response.status(200).send({
        success: true,
        DUnique: bounty
    });
});
app.post("/bounty", function (req, res) {
    if (request.body.FirstName == undefined || request.body.FirstName == "") {
        response.status(400).send({
            messages: "Must have firstname"
        });

    } else if (request.body.LastName == undefined || request.body.LastName == "") {
        response.status(400).send({
            messages: "Must have lastname"
        });
    } else {


        var bounty = [
            {
                id: uuid.v4(),
                FirstName: request.body.firstname,
                LastName: request.body.lastname,
                Living: request.body.living,
                bountyAmount: request.body.bountyamount,
                type: request.body.type
}
            ]
    }

});
app.delete("/bounty:id", function (req, res) {
    var id = request.params.id;
    for (var i = 0; i < bounty.length; i++) {
        if (id == bounty[i].id) {
            bounty.splice(i, 1);
            response.status(200).send({
                message: "you have deleted the item with id of " + id
            });
        }
    }
    response.status(404).send({
        message: "No such  item with id of " + id
    });
});

//   bounty.push(request.body);
//    response.send(200).send({success:true});


app.listen(port, function () {
    console.log("your port is " + port);
});
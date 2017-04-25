var express = require("express");
var mongoose = require("mongoose");
var menu = require("./menu.js");
var bodyParser = require("body-parser");
var port = process.env.Port || 8080;
mongoose.connect("mongodb://localhost/Restaurant");
var apiRouter = express.Router();
apiRouter.get("/", function (req, res) {
    menu.find({}, function (err, data) {
        if (err) {
            res.status(500).send({
                message: " This is not menu",
                err: err
            });
        } else {
            res.status(200).send({
                message: "This is her data",
                data: data
            });
        }
    });
    menu.save();
});
apiRouter.post("/", function (req, res) {
    var newmenu = new menu(req.body);
    newmenu.save(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "This is not menu",
                err: err
            });
        } else if (data == undifined) {
            res.status(200).send({
                message: "This is her data",
                data: data
            });
        }
    });
});

apiRouter.delete("/:id", function (req, res) {
    menu.findOne({
        _id: req.params.id
    }, function (err, data) {
        if (err) {

            res.status(500).send({
                message: "Error in deb",
                err: err
            });
        } else if (data == undefined) {
            res.status(404).send({
                message: "No bject with id exist"
            });
        } else {
            data.remove(function (err, data) {

                if (err) {
                    res.status(500).send({
                        message: "Error in deb ",
                        err: err
                    });
                } else {
                    res.status(200).send({
                        message: "data was removed "
                    });
                }
            })
        }
    })
});

apiRouter.put("/:id", function (req, res) {
    menu.findOne({
        _id: req.params.id
    }, function (err, data) {
        if (err) {

            res.status(500).send({
                message: "Error in deb ",
                err: err
            });
            res.status(404).send({
                message: "No bject with id exist"
            });
        } else {
            for (key in req.query) {

                newmenu[key] = req.query[key];

            }

            newmenu.save();
            res.status(200).send({
                message: "Menu has been ...update " + req.params.id
            });
        }
    });
});

module.exports = apiRouter;
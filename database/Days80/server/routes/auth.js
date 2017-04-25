var express = require("express");
var mongoose = require("mongoose");
var User = require("../models/user.js");
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
var authRouter = express.Router();
var config = require("../config.js");
//mongoose.connect("mongodb://localhost/user");

authRouter.post("/signup", function (req, res) {
    User.find({
        username: req.body.username},
        function (err, data) {

            if (err) {
                res.status(500).send(err);
            } else if (data.length > 0) {
                res.status(400).send({
                    message: "Username is taken"
                });
            } else {
                var newUser = new User(req.body);
                console.log(newUser)
                newUser.save(function (err, data) {
                    if (err) {
                        res.status(500).send(err);
                    }
                    res.status(200).send({
                        message: "You just signup"
                    });
                });

            }
        }
    )
});



authRouter.post("/signin", function (req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, data) {

        if (err) {
            res.status(500).send(err);
        } else if (data == undefined) {
            res.status(404).send({
                message: "Username is not exists"
            });
        } else if (data.password != req.body.password) {

            res.status(400).send({
                message: "password is incorrect"
            });
        }
        else{
            var token = jwt.sign(data.toObject(),config.secret,{expiresIn:"1h"});
            
            res.status(200).send({
               message: "this is token in....",token:token
            });
        }
    })
});

module.exports = authRouter;
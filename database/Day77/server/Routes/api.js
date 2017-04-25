var express = require("express");
var mongoose = require("mongoose");
var Todo = require("../models/todo.js");
var bodyParser = require("body-parser");
var apiRouter = express.Router();
mongoose.connect("mongodb://localhost/todo");

apiRouter.get("/", function (req, res) {
    Todo.find({}, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            });

        } else {
            res.status(200).send({
                message: "here is the data",
                data: data
            });
        }
    });

});

apiRouter.get("/:id",function(req,res){
    Todo.findById(req.params.id,function(err,result){
        if(err){
            res.status(500).send(err);
            
        }
        else {
            res.status(200).send({message:"success",data:result});
        }
    });
});
apiRouter.post("/", function (req, res) {
    var newtodo = new Todo(req.body);
    newtodo.save(function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            });

        } else {
            res.status(200).send({
                message: "here is the data",
                data: data
            });
        }

    });

});

apiRouter.post("/:id", function (req, res) {
    Todo.findById(req.params.id, function (err, result) {
        console.log(result)
        if (err) {
            res.status(500).send(err);
        } else if (result == undefined) {
            res.status(404).send({
                message: "No bject with id exist"
            });
        } else {
//            result.comments.push(req.body.comment);
            result.save(function (err, data) {
                if(err) {
                    res.status(500).send(err);
                }
                res.status(200).send({
                    message: "Item has been deleted"
                });
            });

        }
    });
});



apiRouter.delete("/:id", function (req, res) {
    Todo.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result == undefined) {
            res.status(404).send({
                message: "No bject with id exist"
            });
        } else {
            result.remove();
            res.status(200).send({
                message: "Item has been deleted"
            });
        }
    });
});

apiRouter.put("/:id", function (req, res) {
    Todo.findById(req.params.id, function (err, result) {
        if (err) {
            res.status(500).send(err);
        } else if (result == undefined) {
            res.status(404).send(err);
        } else {
            for (key in req.query) {
                if (key != "comments") {
                    result[key] = req.query[key]
                }
            }
            if (req.query.comments !== undefined && req.query.comments !== "") {
                result.comments.push(req.query.comments);
            }
            result.save();
            res.status(200).send({
                message: "Item has been updated"
            });
        }
    });
});


module.exports = apiRouter;
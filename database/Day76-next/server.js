var express = require("express");
var mongoose = require ("mongoose");
var Student = require("./student.js");
var bodyParser = require("body-parser");

var port = process.env.Port || 8080;
var app = express ();
mongoose.connect("mongodb://localhost/student");
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//app.use(function(req,res,next){
//    if(req.body.name=="sola"){
//        res.status(400).send({message:"you can use the name "});
//    }
//    else {
//        console.log("called before every request");
//        next(); 
//    }
//   
//});

app.use(function(req,res,next){
    var today = new Date();
    req.body.date = today.toLocaleDateString();
     req.body.time = today.toLocaleTimeString();
    next();
});
app.get("/",function(req,res){
    Student.find({},function(err,data){
        if(err){
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    });
});
app.post("/",function(req,res){
        var newstudent = new Student(req.body);
    newstudent.save(function (err, data) {
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

app.listen(port, function () {
    console.log("server is running on " + port);

});
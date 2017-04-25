
var express = require("express");
var mongoose = require("mongoose");
var menus = require("./menus.js");
var bodyParser = require("body-parser");
var port = process.env.Port || 8080;
mongoose.connect("mongodb://localhost/Restaurant");
var apiRouter = express.Router();
apiRouter.get("/", function (req, res) {
    menus.find({}, function (err, data) {
               if(err){
      response.status(500).send({"message": this is not menus,err:err });  
    }     
   else{ 
    response.status(200).send({"message:"This is her data, data: data });
   }
});
});
apiRouter.post("/",function(req,res){
    var newmenu = new mennu(req.body);
newmenu.save(function (err,data) {
               if(err){
response.status(500).send({"message": this is not menus,err:err });  
    }
        
   else if (data == undifined){ 
    response.status(200).send({"message:"This is her data, data: data});
   }
});
});

apiRouter.delete("/:id", function (req, res) {
            newmenu.findOne({_id: req.params.id}, function (err, data) {
     if (err) {

    res.status(500).send({message: "Error in deb " + err: err});
                        } 
      else {
  res.status(404).send({ message: "No bject with id exist"}) ;
                        } 
  else {
         data.remove(function (err, data) {

        if (err) {
   res.status(500).send({ message: "Error in deb " + err: err});
                                        } 
   else {
 res.status(200).send({ message: "data was removed "});
 
   });
             
 apiRouter.put("/:id",function(req,res){
      newmenu.findOne({_id:req.params.id}, function (err, data) {
   if(err) {
       
            res.status(500).send({
                message: "Error in deb " + err:err)};
   }else if (data == undifined) {
           res.status(404).send({
                message: "No bject with id exist")};                      
                                 }
                                else { 
                              for (key in req.query) {
               
                    newmenu[key] = req.query[key];

           }
                newmenu.save();
                res.status(200).send({
                message: "Menu has been ...update " + req.params.id
            });

        
    

   
});
 
module.exports = apiRouter;
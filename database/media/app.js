var mongoose = require("mongoose");
var media = require("./friends.js");
mongoose.connect("mongodb://localhost/SocialMedia");
   var information = new media({
       
       name:"sara",
       age:12,
       Job:"developper",
       isAlive:true,
       friends:["facebook","twiter","google+"]
   ,
                               
       
       name:"lina",
       age:14,
       Job:"teacher",
       isAlive:false,
       friends:["facebook","twiter","google+"]
  
   });
  information.save(function(err,newfacebook){
  if(err){
  console.log(err);
  }
  else {
     media.find({},function(err,data){
     console.log(data);
     });
  }
  });
media.findOne({name:"lina"}, function (err, newfacebook) {
 
     if(err){
  console.log(err);
  }
  else {
      newfacebook.remove();
//      newfacebook.name = "";
     media.find({},function(err,data){
     console.log(data);
     });
  }
  });
    
    
    
//information.findOne({name: 'lina'}, function (err, friend) {  
//  information.age+2;
//  information.save( function (err, new_friend) {
//    console.log(new-information);
//  });
//});
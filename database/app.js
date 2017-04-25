var mongodb = require("monogodb");
var client = mongodb.mongoclient();
var url = "mongodb://localhost:27017/restaurant";
client.connect(url,function(err,db){
    if(err){
        console.log(err);
    }
    else {
        var collection =  db.collection("menu");
        collection.insert({name:"taco",Cost:4000,Type:"main"}),function(err,result){
            collection.find().toArray(function(err,docs){
                console.log(docs);
            });
        }
    }

});
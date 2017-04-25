var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mediaschema = new Schema ({
      name:String,
       age:Number,
       Job:String,
       isAlive:Boolean,
       friends:[String]
});
module.exports = mongoose.model("friends",mediaschema);
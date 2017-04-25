var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var todoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique :true
    },
    isDone: {
        type: Boolean,
        required: true
    }, 
    cost: {
    type:Number
    }
});

  
module.exports = mongoose.model('Todo',todoSchema);
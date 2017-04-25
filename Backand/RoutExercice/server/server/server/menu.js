var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var menuschema = new Schema ({ 

    name:{
    type:String,
    require:true
    },
    Cost:{
        type:number,
        require:true
    },
    type:{
    type:string,
        require:true
    }
});
  
module.exports = mongoose.model("menus",menuschema);
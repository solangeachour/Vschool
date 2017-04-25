 var uuid = require("uuid");
var animals = [
    {
     id :uuid.v4(),
    name:"Turle",
    age:104,
    isTasty:true
   
},
    {
  id :uuid.v4(),
    name:"Lion",
    age:24,
    isTasty:false
    },
     {
  id :uuid.v4(),
    name:"Bird",
    age:44,
    isTasty:false
    },
      {
  id :uuid.v4(),
    name:"cat",
    age:2,
    isTasty:true
    }
]
module.exports = animals;
 var uuid = require("uuid");
var bounty = [
    {
     id :uuid.v4(),
    FirstName:"berg",
    LastName:"boom",
    Living:true,
    bountyAmount:100,
    type:"Sith"
},
    {
         id :uuid.v4(),
   FirstName:"diing",
    LastName:"goom",
    Living:false,
    bountyAmount:150,
    type:"Jedi"
    }
]
module.exports = bounty;
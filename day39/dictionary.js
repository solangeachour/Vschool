var readlineSync = require("readline-sync");

var dictionner = { 
"answer": "this is response"    
}
console.log(dictionner["answer"]);
var userInputWord ="what";
var userOutDef ="this is response";

dictionner[userInputWord]= userOutDef;
console.log(dictionner["what"]);
    

var readLineSync = require("readLine-sync");
var ask = require('readline-sync');  
var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(ask.question('How many letters would you like to shift? '));  
var letterArray =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
                      "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var st="";
for ( var i = 0; i < letterArray.length;i++ ){
    
  if ( letterArray[i]== true){
      input= letterArray[i] + shift();
          
          
          
          
          var shift = function(){
              
              
              
          }
  
  }

}
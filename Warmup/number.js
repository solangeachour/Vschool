var readlineSync = require("readline-sync");
var array = [];
var numbers = function(){
array.push (readlineSync.question("enter the a:"));
array.push (readlineSync.question("enter the b:"));
array.push (readlineSync.question("enter the c:"));
    
  console.log(array);
var numbers = function ( a, b, c) {
    for (var i = 0; i < array.length; i++){  
         
    if ( (array[i] == array[0]) && (array[i] != b)&& (array[i] != c)){ 
          return  a;
  }
    else if ( (array[i] != a ) && (array[i] == b)&& (array[i] != c)){ 
        return b ;
       
    }
    else return c;
}

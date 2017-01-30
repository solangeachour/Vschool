
var readlineSync = require("readline-sync");
var number1 = readlineSync.question("enter the number1:");
var number2 = readlineSync.question("enter the number2:");
var op = readlineSync.question("enter the operator");
if (op == "+"){ 
     add(number1,number2);
}
else if (op == "-"){ 
     minus(number1,number2);
}
else if (op == "*"){ 
     mult(number1,number2);
}
else (op == "%") { 
     division(number1,number2);
}
    
var add = function(number1,number2){
    return (number1 + number2);
}

var mult = function (number1,number2){
    return (number1 * number2);
}
var division = function (number1,number2){
    return number1 / number2
}
var minus = function (number1,number2){
    return (number1 - number2);
}
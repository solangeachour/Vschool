var readLineSync = require("readLine-sync");
var num1 =readLineSync.question("Please  enter your first number:");
var num2 =readLineSync.question("Please  enter your second number:");
var operation =readLineSync.question("Please enter the operation to perform:");

function Add(num1, num2){
    console.log(num1+num2);
}

function sub(num1, num2){
    console.log(num1-num2);
}

function mul(num1, num2){
    console.log(num1*num2);
}

function div (num1, num2){
    console.log(num1/num2);
}



switch (operation) {
    case "+":
        Add(num1,num2);
        break;
    case "-":
        sub(num1,num2);
        break;
    case "*":
        mul(num1,num2);
        break;
    case "/":
        div(num1,num2);
        break;
}
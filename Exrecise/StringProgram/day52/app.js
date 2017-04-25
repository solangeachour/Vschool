 var readLineSync = require("readline-sync");
 var operations = require("./cal.js");
 var valueA = readLineSync.question("Enter us a number: ");
 var valueB = readLineSync.question("Enter us a number: ");
 var operate = readLineSync.question("/,+,*,-,pow");
 if (operate == "/") {
     console.log(operations.div (parseInt(valueA),parseInt(valueB)));
 } else if (operate == "+") {
     console.log(operations.add (parseInt(valueA),parseInt(valueB)));
 } else if (operate == "-") {
     console.log(operations.minus (parseInt(valueA),parseInt(valueB)));
 } else if (operate == "*") {
     console.log(operations.multi (parseInt(valueA),parseInt(valueB)));
 } else if(operate == "pow") {
     console.log(operations.Exp (parseInt(valueA),parseInt(valueB)));
 }
// console.log(operations.AddNums(ParseInt(valueA), ParseInt(valueB)); console.log(operations.SubNums(ParseInt(valueA), ParseInt(valueB)); console.log(operations.MultiNums(ParseInt(valueA), ParseInt(valueB)); console.log(operations.DivNums(ParseInt(valueA), ParseInt(valueB)); console.log(operations.ExpenNums(ParseInt(valueA), ParseInt(valueB));
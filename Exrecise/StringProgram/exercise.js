var readlineSync = require("readline-sync");

var capital = readlineSync.question("what is your word:");
 var newcapital = (capital.toUpperCase());
console.log(" your word is:" + newcapital);

var long = readlineSync.question("typing lenght of word:");
console.log(" your word is:" + long.length);

var first = readlineSync.question("enter the firstname:");
var last = readlineSync.question("enter the lastname:");
console.log(" this is fullname:"+ first+" " +last);
var longs = readlineSync.question("write a very long number and :");
  if (longs >= 20)
console.log(" your word is:" + longs.substring(21,longs.length));
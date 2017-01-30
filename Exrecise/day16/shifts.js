
var readLineSync = require("readLine-sync");
var result =readLineSync.question("Please  give the result:");
var num =readLineSync.question("Please  enter your number:");



function CaesarCipher(str, num) {

    str = str.toLowerCase();
for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;

};
                               
console.log(CaesarCipher('Nadine', 3));

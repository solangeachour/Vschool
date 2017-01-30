function CaesarCipher(str, num) {
    // you can comment this line
    str = str.toLowerCase();

    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;

}
                               
console.log(CaesarCipher('sara', 2));



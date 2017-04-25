var norepeat = function (strWord) {
    var str = "";
    var count = 0;
    var rep = "";
    for (var i = 0; i < strWord.length; i++) {
        for (var j = i + 1; j < strWord.length; j++) {
            if (strWord[i] === strWord[j]) {
                count++; 
                rep=strWord[i];
            }
        } 
        if (count ==0 && rep.indexOf(strWord[i])==-1) { 
            str += strWord[i]; 
        }
        count =0;
    }


    return strWord + " the non repeated point is " + str[0];
}
console.log(norepeat("hhhbaaaa"));
console.log(norepeat("xppp"));
console.log(norepeat("lmlpp"));
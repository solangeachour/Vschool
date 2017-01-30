var vowels =function(str){
    var mystr = str.toLocaleLowerCase();
    var count=0 ;
    for(var i =0; i<mystr.length; i++){
        if((mystr[i]=== "a")||(mystr[i]=== "i")||(mystr[i]=== "o")||(mystr[i]=== "u")) {
               count ++;
           
        }
         
    }
return count;
}
console.log(vowels("said"));

var vowell =function(strr){
   var mystr1 = strr.toLocaleLowerCase();;

    var countt=0 ;
    for(var i =0; i<mystr1.length; i++){
        if((mystr1[i]!== "a")||(mystr1[i]!== "i")||(mystr1[i]!== "o")||(mystr1[i]!== "u")) {
               countt ++;
           
        }
        
    }
     return countt;
}
    console.log(vowell("saide"));
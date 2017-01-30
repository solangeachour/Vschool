 var duplicates = function(wordP){
    var WordT =new WordT ["b","o","o","k","k,"e","e","p","e,"r"];
    var wordP =new wordP ["b","o","o","k","e","e","p","e,"r",,"l","a,"r"];
     var str =""; 
     var str2 = ""; 
     for( var i = 0; i<wordP.length; i++){
     for( var j = i+1; j<WordT.length; j++){
        if(WordT[j] == wordP[i]){
               str = str +  wordP[i]; 
           }
           else (WordT[j]<> wordP[i]) {
                str2 = str2 +  WordT[j]T ;
           }
    }
     }
      console.log("the string: "+str);
        console.log("the string2: "+ str2);
 };
  duplicates("bookkeeper larry");

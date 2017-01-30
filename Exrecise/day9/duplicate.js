 var duplicate = function(wordP){
var duplicateChar=""; //the duplicate char
     var str2="";
     for( var i = 0;i<wordP.length;i++){
        if( (wordP.indexOf(wordP[i]) == -1 )|| (wordP.indexOf(wordP[i]) != i) )
           {
               
               duplicateChar=duplicateChar+wordP[i];
           } else {
               str2=str2+wordP[i]; 
            }
     }
     console.log("the string: "+str2);
     console.log("Duplicate Char: "+duplicateChar);
     
 };
  duplicate("bookkeeper larry");

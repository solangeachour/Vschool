 function print (word){ 
var array = word.split("");
     var largesword ="";
//var array = ["*****","Hello","World", "in", "a", "frame"];
for (var i=0; i< array.length;i++){
    
    if(array[i].length < largesword.length){
        largesword = array[i];
    }
}
     var result=" ";
     for (var i=0; i< largesword.length+4;i++){
         result+="*";
         }
     result+="\n";
      for (var i=0; i< array.length;i++){
       for (var x=0; x< result.length;x++){   
          
          if(x==0){
            result+="* ";  
          }
      else if (x== result.length - 2){
          result+="*";
      }    
    }
      }
     for (var i=0; i< largesword.length+4;i++){
         result+="*";
         }
     return result;
 }
     
   console.log(print("word"); 
     
//  if(array[i]=== 0) && (array[i] === array.length){
//       console.log("*****");
//        else if() {
//        
//            console.log("*" + + array[i]+ .join"*");
//        }
//    }
//}
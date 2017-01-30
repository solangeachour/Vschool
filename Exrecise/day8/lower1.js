var lower = function (a , b) {
    if ( a < b){
         console.log("the lower number is"+ a);
    }
    else {
        console.log("the lower number is" + a);
    }
};
 lower( 5, 9);
   var trouble = function ( asmile , bsmile){
        
          if (asmile == true && bsmile== true ||  asmile== false  && bsmile== false){
        return true ;
        }
       else {
            return false;
   }
   };
console.log(trouble (false, true));
console.log(trouble (false, false));
console.log (trouble (true, true));
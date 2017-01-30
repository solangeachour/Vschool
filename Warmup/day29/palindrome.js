 var determine = function (letter) {
     var palindrome = [];
 var letter = letter.toUpperCase();
     for (var i = 0; i < palindrome.length; i++) {
         for (var j = 0; j >= 0; j--) {
        
             if ((palindrome[i] === (palindrome[j]))) {
                
             } else
                 return false;
         }
     }
     
     return  true;
 };

console.log (determine("sola"));
var arr = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];  
var attemptCall = function(name, dontCall, call, sendText) {

     for (var i = 0; i < arr.length; i++){   
         count = 0;
         var name = arr[i];
         if(arr[i].tolowerCase.charAt==='a'){
             count++;
         }
             if(count>1){
                 send text(names);
             }
             else if ( arr[i].length!==0){
                 dontcall(name);
             }
         }
     }
        function dontcall(name){
             console.log("dont call"+ name); 
        }
        
      function call(name){
             console.log("You call" + name); 
        }  
     function sendText(name) {
   console.log("send message is"+ + name);
  
               }
  attemptCall (arr, dontCall,call,sendText) ;
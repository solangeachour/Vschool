var readlineSync = require("readline-sync");
var nums = [];


for (var i = 0; i < 2; i++){  
  nums.push (readlineSync.question("enter the a number:"));  
    
    
    console.log("nums");
    
//    num.sort(function(a, b)){
//             return a - b;
//             }
//             
//       function swap (num1,num2){
//           
//       }
    function sort(arr){
            for (var i = 0; i < arr.length; i++){  
                 for (var j = 0; i < arr.length; j++){ 
                     if( arr[i] < arr[j]){
                         var temp = arr[i];
                         arr[i]  = arr[j];
                         
                         arr[j] = temp;
                     }
                 }
       }      
             return arr;
             
//   nums.push (readlineSync.question("enter the b:"));
//nums.push (readlineSync.question("enter the :")); 
//   var numbers = function(a, b, c){
//
//
//    
//    console.log( "a:"+ a + "b:"+ b + "c:"+ c );
//var numbers = function ( a, b, c) {
//    
//         
//    if ( (array[i] == a ) && (array[i] != b)&& (array[i] != c)){ 
//       return  a;
//  }
//    else if ( (array[i] != a ) && (array[i] == b)&& (array[i] != c)){ 
//        return b ;
//       
//    }
//    else return c;
//}

var lyrics = ["This", "hit", "that", "ice", "cold",                
              "Michelle", "Pfeiffer", "that", "white",               
              "gold", "This", "one", "for", "them",               
              "hood", "girls", "Them", "good", "girls",               
              "straight", "masterpieces", "Stylin'",               
              "whilen'", "livin'", "it", "up", "in",               
              "the", "city", "Got", "Chucks", "on",               
              "with", "Saint", "Laurent", "Gotta", "kiss",               
              "myself", "I'm", "so", "pretty"];

console.log("first function");
first();

console.log("Second function");
Second();
console.log("Third function");
Third();
var first = function (ListArray){
            var Print = "" ;
         for ( var i=0 ; i<=Listarray.length; i++){
            print+= Listarray[i] + " ";
         }
         console.log(Print);
   };
 var Second = function (ListArray){
            var Print = "" ;
for (var i= 0; i<= ListArray.length; i+= 2){
     print+= Listarray[i] + " ";
}
         console.log(Print);
 };
    var Third = function (ListArray){
            var Print = "" ;
  for ( var i=ListArray.length-1 ; i>=0 ; i--){
       print+= Listarray[i] + " ";
  }
         console.log(Print);
  
};

var reverse = function(word) {    
    printReverse = "";    for(i = 0; i < word.length; i += 2)
    {    
        printReverse += word[i + 1] + " " + word[i] + " "    
    }    
    console.log(printReverse)}
reverse(lyrics)

//    var fourd = function (ListArray){
//            var Print = "" ;
//         var temp ="";
//for (var i= 1; i<= ListArray.length - 1; i+= 1){
//for (var j= i -1; i<= ListArray.length; ++){
//          temp =  Listarray[j];
//     
//       print+= Listarray[i] + " ";
//  }
//         console.log(Print);
//  
//};
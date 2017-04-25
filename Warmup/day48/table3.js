function uniqueNumber(set1, set2) {
   var uniqueSet = [];
   var k = 0;
   for (var i = 0; i < set1.length; i++) {
       if (searchUnique(set1[i], set2) == -1) {
           //            console.log("print: "+set1[i])
           uniqueSet[k] = set1[i];
           k++;
       }
   }
   for (var j = 0; j < set2.length; j++) {
       if (searchUnique(set2[j], set1) == -1) {
           //            console.log("print: "+set2[j])
           uniqueSet[k] = set2[j];
           k++;
       }
   }
   return uniqueSet;
}

function searchUnique(nb1, set) {
   var indNb = set.indexOf(nb1);
   return indNb;
}
console.log("Send Two Array: " + uniqueNumber([1, 2, "hiba", 7,8, 9,0,15], [2, 3, 4, 8, 10]));
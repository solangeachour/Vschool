console.log("hi");

var createEvenArray = function(highesNum){
      var evenArray = [];
    for ( var i =2; i<= highesNum; i=i+2){
        evenArray.push(i);
    }
    return evenArray;
}

var repEvenArray = function(evenArray){
    var oddArray = [];
     for ( var i =0; i <evenArray.length; i++){
         oddArray.push(evenArray[i]);
         oddArray.push(evenArray[i]+1);
     }
   return oddArray;
}
var evenA= createEvenArray(10);
console.log(evenA);
var odd=repEvenArray(evenA);
console.log(odd);

function sortNums(numberArray) {  
    return numberArray.sort(function(a, b){
        return a-b});
}
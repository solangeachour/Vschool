var addArr = function(n){
    
    var sum = 0;
    for(var i =0; i < n.length-1; i++){
        sum +=  n[i];
    }
    return sum;
}
var arr = [1,2,3,4];
console.log(addArr(arr));
    
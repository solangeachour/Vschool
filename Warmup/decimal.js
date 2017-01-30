Radwan Khabbaz [6:44 PM] 
var str=[];
function convertToBinary(x){
    for(var i=x ; i>=1 ; i=Math.floor(i/2)){
        if (i%2==0){
           str.unshift(0);
            }
        else if (i%2==1){
            str.unshift(1);
        }
    }
}
convertToBinary(5);
console.log(str);




//var arr =[];
//
//var decimal = function(){
//  =
//    for (var i = x; i>=1;i=math.floor(i/2)){
//        if(i%2 === 0){
//       return   number = number +number;
//        }
//        else if(i%2== 1){
//            console.log
//        }
//    }
//}


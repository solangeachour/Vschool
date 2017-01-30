
document.getElementById("num").addEventListener("click",sumA);
var res1 = 0;
var res2 = 0;
var res3 = 0;
 function sumA (){
    var number = parseInt(document.getElementById("num").value);
    document.getElementById("numa").value = (number*5);
     res1 = document.getElementById("numa").value;
     document.getElementById("result").value = Number(res1) + Number(res2) + Number(res3);
     
 };
     
     document.getElementById("num1").addEventListener("click",sumB);

 function sumB (){
    var number = parseInt(document.getElementById("num1").value);
    document.getElementById("numb").value = (number*7);
     res2 = document.getElementById("numb").value;
     //document.getElementById("result").value = num; 
     document.getElementById("result").value = Number(res1) + Number(res2) + Number(res3);
              };

 document.getElementById("num2").addEventListener("click",sumC);

 function sumC (){
    var number = parseInt(document.getElementById("num2").value);
    document.getElementById("numc").value = (number*12); 
     res3 = document.getElementById("numc").value;
     document.getElementById("result").value = Number(res1) + Number(res2) + Number(res3); 
              };
   
// function sumB(){
//  var number1 = parseInt(document.getElementById("num1").value;
//     var num = parseInt(document.getElementById("numb");
//      document.getElementById("result").value = number * numb; 
//        document.getElementById("btn7").addEventListener("click",sumB);
//  
// function sumC(){
//  
//  var number2 = parseInt(document.getElementById("num2");
//     var num = parseInt(document.getElementById("numc");}
//   
//    document.getElementById("result").value = number * numc; 
//document.getElementById("btn12").addEventListener("click",sumC);

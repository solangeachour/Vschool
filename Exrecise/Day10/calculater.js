document.getElementById("btn").addEventListener("click",sum);

 function sum(){
    var  number1 = parseInt(document.getElementById("nb1").value);
          var number2 = parseInt(document.getElementById("nb2").value);
     document.getElementById("result").value = number1 + number2;
//         Number(nb1) + Number(nb2);
 };

 function mins(){
 var  number1 = parseInt(document.getElementById("num1").value);
   var number2 = parseInt(document.getElementById("num2").value);
     document.getElementById("result1").value = number1 - number2;
//         Number(num1) - Number(num2);
 };
 
document.getElementById("btn1").addEventListener("click",mins);

 function division(){
 var  number1 = parseInt(document.getElementById("nbr1").value);
 var number2 = parseInt(document.getElementById("nbr2").value);
     document.getElementById("result2").value = number1 / number2 ;
//         Number(nbr1 ) / Number(nbr2);
 };
 
     
 document.getElementById("btn2").addEventListener("click",division);

 function modulo(){
 var  number1 = parseInt(document.getElementById("nber1").value);
 var number2 = parseInt(document.getElementById("nber2").value);
     document.getElementById("result3").value = number1 % number2 ;
//         Number(nbr1 ) / Number(nbr2);
 };
 
     
 document.getElementById("btn3").addEventListener("click",modulo);
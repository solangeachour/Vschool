   
$("#num").click(sumA);
var res1 = 0;
var res2 = 0;
var res3 = 0;
 function sumA (){
    var number = parseInt($("#num").val());
   $("#numa").val((number*5));
     res1 = $("#numa").val();
     $("#result").val(Number(res1) + Number(res2) + Number(res3));
     
 };
     
     $("#num1").click(sumB);

 function sumB (){
    var number = parseInt($("#num1").val());
    $("#numb").val((number*7));
     res2 = $("#numb").val();
     //document.getElementById("result").value = num; 
     $("#result").val(Number(res1) + Number(res2) + Number(res3));
      
              };

 $("#num2").click(sumC);

 function sumC (){
    var number = parseInt($("#num2").val());
    $("#numc").val((number*12)); 
     res3 = $("#numc").val();
    $("#result").val(Number(res1) + Number(res2) + Number(res3)); 
              };
   function changecolor(){
       $("#container-fluid").css("background-color","red");
       
       
   }



//$(document).ready(function() {
//    var sounds = new SoundManager();//**
//    var level = new Level('world');//world is the id of the corresponding DOM container
//    level.setSounds(sounds);//*
//    level.load(definedLevels[0]);
//    level.start();
//    keys.bind();
//});
// function sumB()
//  var number1 = parseInt(document.getElementById("num1").value;
//     var num = parseInt(document.getElementById("numb");
//      document.getElementById("result").value = number * numb; 
//        document.getElementById("btn7").addEventListener("click",sumB);
//  
// function sumC(){
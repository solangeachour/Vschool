
 $(".orange").hover(function(){
    $(".orange").css("background-color","blue");

});
 $(".orange").dblclick(function(){
     $(".orange").css("background-color","yellow");
 });
 $(".orange").mousedown(function(){
     $(this).css("background-color","red");
 });
$(".orange").mouseup(function(){
  $(this).css("background-color","green");
 });

$("window").scroll(function(){
  $(".orange").css("background-color","brown");
 });
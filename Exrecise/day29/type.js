 $(".brown").hover(function(){
    $(".brown").css("background-color","blue");

});
 $(".brown").dblclick(function(){
     $(".brown").css("background-color","yellow");
 });
 $(".brown").mousedown(function(){
     $(this).css("background-color","red");
 });
$(".brown").mouseup(function(){
  $(this).css("background-color","gray");
 });

$("window").scroll(function(){
  $(".brown").css("background-color","pink");
 });
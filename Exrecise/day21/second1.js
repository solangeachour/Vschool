$("#button").click(function() {
  var counter = 20;
  var repeathour= setInterval(function(){
        counter--;
        $("p").html(counter);
      if (counter < 0){
        clearInterval(repeathour);
        $("p").html("finish the timer" );
      }
  }, 1000)
});

for ( var i=0; i<=60;i++){
    $("#h").click(function(){
        var counter = 60;
        var repeathr= setInterval(function(){
        counter--;
        $("p1").html(counter);
      if (counter < 0){
        clearInterval(repeathr);
          $("p1").html("finish the timer" );
      }
        }, 2000)
    });

 
   
//   $("#button").click(function() {
//       
// var d = new Date();
// var hours = "The end of the world has come upon us".split(" ");
//   var x = document.getElementById("#button");
//    var h = addZero(d.setHours());
//    var m = addZero(d.setMinutes());
//   var s = addZero(d.setSeconds());
//    x.innerHTML = h + ":" + m + ":" + s;
//}
//    var timeoutID = window.setTimeout(functin, [delay, hours, minutes, seconds]);
//var timeoutID = window.setTimeout(code, [delay]);


//function addZero(i) {
//    if (i < 20) {
//       i = "0" - i;
//   }
//    return i;
//}
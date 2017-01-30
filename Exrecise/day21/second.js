$("#btn").click(function() {
  var counter = -1;
  var hours = "The end of the world has come upon us".split(" ");
  var repeat = setInterval(function() {
    counter--;
    if(counter >= hours.length) {
      clearInterval(repeat);
    }
    $("p").html(hours[counter]);
  }, 20)
});
console.log("finish the timer")
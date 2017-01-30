$("#btn").click(function(){
    alert(" hey you pressed alert");
});
setTimeOut(function(){
    $("#paragraph").html("you talking ");
},1000);

var datalogs = {
    name:"data";
    size: 128 ,
    is running: function(callback){
    console.log("data traffic");
    callback();
},
}
 datalogs.isRunning(function);
  console.log("yeah true");

var expressService = require("express");
var app = expressService();
var port = process.env.Port || 8000 ;
app.get("/",function(req,res){
    res.send("hello world");
});
app.listen(port,function(){
    console.log("your port is "+ port);
});
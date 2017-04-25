var expressService = require("express");
var app = expressService();
var bodyParser = bodyParser;

var port = process.env.Port || 6000 ;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var students = {
    name:"samir",
    age:48,
    isAlive;true
},
    {
    name:"jean",
    age:38,
    isAlive;true
    },
    {
     name:"Lara",
    age:18,
    isAlive;false
    }

app.get("/",function(request,response){
    response.status(200).send(students);
});
app.post("/",function(request,response){
     console.log("you have hit the post")
    response.send(200).send("messages" : "success");
});
   
app.listen(port,function(){
    console.log("your port is "+ port);
});
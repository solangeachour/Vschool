var http = require("http");
var server = http.createServer(function(request,response){
    console.log("I have hit the server");
    response.writeHeader(200,{"Content-Type": "text/plain"});
     response.write("Hello how are you mostafa make up");
    response.end();
})
server.listen("8080");
console.log("I am running the server");
 document.getElementById("get").addEventListener("click",function(){
     
     var input = document.getElementById("number").value ;
 

var xhr = new XMLHttpRequest();
console.log("My script has loaded");

xhr.onreadystatechange = function() {
  if(xhr.readyState  == 4 && xhr.status == 200) {
    var strData = xhr.responseText;
    var data = JSON.parse(strData);
   console.log("Data has been ")
      document.getElementById("output").innerHTML(data["name"]);
       document.getElementById("output").innerHTML(data["number"]);
  } else if(xhr.readyState  == 4 && xhr.status != 200) {
    console.log(xhr.status);
  }
}
});

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();
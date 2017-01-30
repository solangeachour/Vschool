
document.getElementById("get").addEventListener("click",function(){
    
       var input = parseInt(document.getElementById("number").value) ;
    
    var xhr = new XMLHttpRequest();


xhr.onreadystatechange = function() {
  if(xhr.readyState  == 4 && xhr.status == 200) {
    var strData = xhr.responseText;
    var data = JSON.parse(strData);
   console.log(data["objects"][0]["pokemon"][input].name);
      document.getElementById("output").innerHTML=data["objects"][0]["pokemon"][input].name;
      
  } else if(xhr.readyState  == 4 && xhr.status != 200) {
   alert("Error" + xhr.status);
  }
};


xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();
})
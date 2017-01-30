var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readState == 4 && xhr.status == 200){
      var strData = xhr.responseText;
      var data = JSON.parse(strData);
      console.log("Data has been ")
      document.getElementById("output").innerHTML(data["name"]+ "" + data["gender"]);
)
      console.log(data["name"]);
        console.log(data["gender"]);
  }  
    else  if(xhr.readState == 4 && xhr.status != 200){
        console.log(xhr.status);
};
cxhr.open("GET","http:Swapi.co/api/people/1",true);
xhr.send();

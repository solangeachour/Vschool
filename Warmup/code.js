var character ="aaacodebbbcodecozexxcope";
var count = 0;
var letter = "";
var code = function(){
 for (var i =0; i< character.length; i++){ 
    if(character[i] === "c" && character[i+1]==="o" && character[i+3]==="e")
    {
        count++;
      
    }
       
    } 
return count;
}
    console.log(code() );
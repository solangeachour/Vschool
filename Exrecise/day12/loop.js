var alphabet = "abcdefghijklmnopqrstuvwxyz";
var people =["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
 var newarray= [];
for (var i = 0; i < people.length; i++){
   newarray.push(people[i]);
   for (var j = 0; j < alphabet.legth; j++){
       newarray.push(alphabet[j]);       
}
}
 console.log(newarray.join(", "));  
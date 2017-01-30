var phrase = "slimy smelly solution";
  phrase = phrase.toUpperCase();
    var count = 1;
   var letter = "";
 for (var i =0; i< phrase.length; i++){ 
    if((letter.indexOf(phrase[i]) === -1)){
        letter = letter + phrase[i];
    
  for (var j = i+1; j<phrase.length; j++){
      if(phrase[i]==phrase[j]){
                 count++;
    }
}
        console.log(phrase[i] + " : " + count);
    }               
    count = 1;
 }
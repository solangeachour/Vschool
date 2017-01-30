var omega ='\u03A9';
var alpha = '\u03B1';
var newarray = [[]];
  for (var i = 0; i <10; i++){
    for (var j=0; j <10; j++){
    if( i %2 == 0){ 
    newarray.push(omega);
    }
    else { 
        newarray.push(alpha);
    }     
}
}
     console.log(newarray.join(", "));  

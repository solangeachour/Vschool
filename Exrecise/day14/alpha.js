var omega ='\u03A9';
var alpha = '\u03B1';
var newarray = [];
for (var i = 0; i < 20; i++){
    if( i %2 == 0){ 
    newarray.push(omega);
    }
    else { 
    for (var j=0; j <20; j++){
        newarray.push(alpha);
    }     
}
}
     console.log(newarray.join(", "));  

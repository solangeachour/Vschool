for (var i=0; i<=100;i++){
    var result = "";
        
    if(i % 3 == 0){
        result+ ="fizz";
    }
    if(i % 5 == 0){
         result+ ="buzz";
}
      if( i % 3 == 0 && i % 5 !== 0){
    result = i;
     }
 console.log(result);
}

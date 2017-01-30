var add = function ( num1 , num2){
    return (num1+ num2);
     console.log("sum=" + num1+num2);
}
  add (3 , 77 );
var Big = function ( num1 , num2 , num3){
    if (num1 > num2 && num1 > num3) {
      console.log(num1);
    } 
    else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    }
    else {   
        console.log(num3);
    }
};
Big( 5 , 8, 15);
var accept = function ( num1){
    if (num1 % 2 == 0) {
      console.log("even");
    } 
     else if (num1 % 2 == 1) {
        console.log("odd");
     }
};
accept( 15);

var concatenation = function (wordT){
     var spl="";
    console.log("the original word is: "+wordT +" of length= "+wordT.length);
    if (wordT.lenght < 20) {
      console.log("the length is "+wordT.length);
    } 
     else if ( wordT.length > 20 ) {
         spl=wordT.split(" ");
        console.log("the split: "+spl[0]);
        console.log("the concatenation: "+spl[0]+spl[1]);
     }
};
concatenation("liban Beirut jabal lebnan ");


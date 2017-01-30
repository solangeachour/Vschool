var Student = {
  name:"lina",
  Dob:"11/1/2000",
  Pnone:"03/567821",
  grades:[6, 5, 10,7],
   result: "" 
};
//    function sum (){ 
//      var add = 0;
//  for( var i = 1; i < Student.grades.length;i++){
//         add = add + Student.grades[i] ;
//         return add;
//  }
//  function rate ( ){ 
//      var  average = sum() /Student.grades.length;
//           return  average;
//      }
// 
// if ( rate() >= 10){
//    console.log ("Student.result is a pass");
// }
//  else 
//    console.log ("Student.result is a fail");       
//}

function getResult(obj) {
    var sum = 0;
    var count = 0;
    for(var i=0; i<obj.grades.length; i++) {
        sum = sum + obj.grades[i];
        count++;
    }
    if((sum/count) >= 10) {
        obj.result = "pass";
    } else {
            obj.result = "failed";
        }
}


getResult(Student);
console.log(Student.name + " " + Student.result);
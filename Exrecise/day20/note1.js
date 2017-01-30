var Student = [{Name:"sara",
                Dob:"11/1/2002", 
                Pnone:"03/567341",
                grades:[8, 8, 10,7],
                result: ""},
               {Name:"rania",
                Dob:"11/4/2006",
                Pnone:"70/567821", 
                grades:[11, 17, 10,11],
                result: ""},
               {Name:"jamila",
                Dob:"11/2/2005",
                Pnone:"03/797821", 
                grades:[15, 13, 10,12],
                result: ""},
               {Name:"chadi",
                Dob:"11/6/2003",
                Pnone:"78/661221", 
                grades:[8, 10, 10,7],
                result: ""},
               {name:"lina",
                Dob:"11/7/2002",
                Pnone:"03/451221",
                grades:[10, 18, 10,8],
                result: ""}];
function getResult(grd){
    var total = 0 ;
    for(var i =0 ; i<grd.length;i++){
       total += grd[i];
    }
    return total/grd.length ;
}
for (var j=0 ;j<Student[j].grades.length;j++){
var total = getResult(Student[j].grades);
if (total <10){
    Student[j].result = 'failed';
}
else Student[j].result = 'pass';
} 
arr.push({name:
          var arr =[];
function sort (arr){
for (var j=0 ;j<arr.length;j++){
       for (var i=1 ;i<arr.length;i++){
       if(arr[i].sum< arr[j].sum){
          var  temp= arr[i]);
           arr[i]= arr[j];
           arr[j] = temp;
       }
       
       }
}
         return arr;
         }
console.log(sort (arr));

//for (var j=0 ;j<Student[j].grades.length;j++){
//console.log(Student[j]);
//}


//    function getResult(obj) {
//    
//       var sum = 0;
//       var count = 0; 
//
//      for(var i=0; i<obj.length; i++) {
//           sum += obj[i];
//              count++;
//    }
//        if((sum/count) >= 10) {
//           obj.result = "pass";
//    } 
//               else {
//            obj.result = "failed";
//        }
//}
//
////console.log(getResult(Student[1].grades));
//                 
//function getResultObject(obj) {
//for(var i = 0; i<Student[i].grades.length; i++){
//     console.log(getResult(Student[i].grades));
//}
//}
//////   getResultObject(tudent);    
//////getResult(Student);
//console.log(Student.name + " " + Student.grades+ " " + Student.result);
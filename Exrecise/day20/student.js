//var Student = [{Name:"sara",
//                Dob:"11/1/2002", 
//                Pnone:"03/567341",
//                grades:[8, 8, 10,7],
//                result: ""},
//               {Name:"rania",
//                Dob:"11/4/2006",
//                Pnone:"70/567821", 
//                grades:[11, 17, 10,11],
//                result: ""},
//               {Name:"jamila",
//                Dob:"11/2/2005",
//                Pnone:"03/797821", 
//                grades:[15, 13, 10,12],
//                result: ""},
//               {Name:"chadi",
//                Dob:"11/6/2003",
//                Pnone:"78/661221", 
//                grades:[8, 10, 10,7],
//                result: ""},
//               {name:"lina",
//                Dob:"11/7/2002",
//                Pnone:"03/451221",
//                grades:[10, 18, 10,8],
//                result: ""}];
var Student = function (Name, dob, Phone, grades){
    this.Name = Name;
    this.dob = dob;
     this.Phone = Phone;
    this.grades = grades;
}
//    this.print = function(){
//        console.log(Name:+"" + dob +""+ Phone + "" + grades);
//    }

var Student1 = new Student ("sara","11/1/2002","03/567341",[8,8,10,7]);
  
console.log(Student1);
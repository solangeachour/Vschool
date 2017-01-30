
var student = [{Name:"sara", grade:90},{Name:"rania", grade:80},{Name:"jamila", grade:70},
                {Name:"chadi", grade:50}];


         
 for(var i = 0; i<student.length; i++){
     
      if (student[i].grade > 90){
          console.log("Excellent "+student[i].Name);
      }
     else if((student[i].grade>80) && (student[i].grade<89)){
          console.log("VeryGood " +student[i].Name);
     
     }
      else if ((student[i].grade>70) && (student[i].grade<79)){
          console.log("Good" +student[i].Name);
     
     }
              
           else  if (student[i].grade<50){
          console.log("pass" +student[i].Name);
     
     }
               
                  
              }
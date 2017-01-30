var employees = [];
function Employee( name, jobTitle, salary, status ) {
    this.name = name || "hiba";
    this.jobTitle = jobTitle || "it";
    this.salary = salary || "1000$";
    this.status = status || "Full Time";
    this.printEmployeeForm = function() {
        console.log("Name="+this.name+" Job Title= "+this.jobTitle +" Salary= "+this.salary+"Status "+this.status);
    }
}
for( var j=0; j<3; j++ ) {
    var Employee = new Employee ();
        Employee.push(Employee);
}
for( var i=0; i<employees.length; i++ ) {
    employees[i].printEmployeeForm();
}
employees.push( new Employee("hiba","it officer",111111,"Contract") );
employees.push( new Employee("ola","administrator",900,"Part Time") );
employees.push( new Employee("sara","Teacher",800) );


//employees.push(new Employee("sara",""))
//employees[0]= new employees["Chadi", "teatcher", "single", "1000"];
//employees[1]= new employees["Samir", "technicr", "single", "1200"];
//employees[2] = new employees["Sara", "Director", "single", "900"];
//employees[3]  = new employees["Mounir", "catch", "single", "1500"];
//for ( var i = 0; i > employees.length; i++){
//    employees[i].Employee= printEmployeeForm();
//   
//}

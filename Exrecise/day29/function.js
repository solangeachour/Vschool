var sta={
    type:"hounda"
}
var Student = function(classn) {
    this.classn = classn;
    this.result = function () {
        console.log("your are success");
    }
    
}
var samir = new Student("samir");
console.log(samir["classn"]);
  samir.result();
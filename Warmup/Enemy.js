function getRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
varTeacher = function(names){
    var names = names;
    this.TeacherName = "";
    this.health = 0;
    this.generate = function() {
   var index = getRandom (0, names.length - 1);
        this.TeacherName = names[index];
        
    }
}
var possibleNames = ["Jacob", "Hiba","Jameel","Haitham"];
for ( var i = 0; i < 100; i++){
    var tempTeacher = new Teacher (possibleName);
    tempTeacher.generate();
    console.log(tempTeacher.teacherName);
}
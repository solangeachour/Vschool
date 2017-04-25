var app = angular.module("App", []);


app.service("TeacherServ", function () {
    this.Teachers = [];
    this.add = function (name) {
        this.Teachers.push(name);
        
    }
    this.remove = function(i){
        this.Teachers.splice(i,1);
    }
    
});
app.controller("maincontroller", function ($scope, TeacherServ) {

    $scope.Teachers = TeacherServ.Teachers;
    $scope.addTeach = function () {
        var Y = $scope.name;
        TeacherServ.add(Y);
    }
    $scope.removeTech = function (index) {
        console.log(index)
        TeacherServ.remove(index);
        
    }
});
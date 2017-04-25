 var app =angular.module("myApp",[]);
app.service("menuservice", function () {

    this.getadd = function ($http) {
        return $http.get("http://localhost/8080/menu");
    }

});
app.controller("mainCtrl", function ($scope, menuservice) {
$scope.data =[]; 

$scope.load = function () {
     menuservice.getadd($scope.name).then(function (response) {
        $scope.name = response.Data.name;
    },
    function (response) {
        alert(response.status)
    })
    
}
});
   
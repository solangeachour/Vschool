var app = angular.module("myApp.home", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "/views/home.html",
        controller: "homeCtrl"
    });
});

app.controller("homeCtrl", function ($scope,Rservice) {
//    $scope.message = " Here is start my app in the front end" ;

     $scope.loadData = function () {
         Rservice.getData().then(function (response) {
            $scope.menuItems = response.data.data;
         }, function (response) {
             console.log(response.status);
        });
    }
     
     

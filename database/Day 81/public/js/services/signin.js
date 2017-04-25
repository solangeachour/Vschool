var app = angular.module("myApp.signin", ["ngRoute", "authModule"]);
app.config(function ($routeProvider) {
     $routeProvider.when("/signin", {
        templateUrl: "/views/signin.tpl.html",
        controller: "signinCtrl"
    });
});
app.controller("signinCtrl", function ($scope, auth,$location) {
    $scope.userinput = {};
    $scope.signin = function () {
        auth.signin($scope.userinput).then(function (response) {
            console.log(response.data);
            $scope.userinput = {};
            alert("you have logged in");
             $location.path("/home");
        }, function (response) {
            console.log(response.status);
        })
    }
});
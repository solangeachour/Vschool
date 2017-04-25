var app = angular.module("myApp.signup", ["ngRoute", "authModule"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/signup", {
        templateUrl: "/views/signup.tpl.html",
        controller: "signupCtrl"
    });
});
app
app.controller("signupCtrl", function ($scope, auth, $location) {
    $scope.userinput = {};
    $scope.signup = function () {

        auth.signup($scope.userinput).then(function (response) {
            console.log(response.data);
            $scope.userinput = {};
            alert("you have signed up ");
            $location.path("/home");
            
        }, function (response) {
            console.log(response.status);
        });
    }
});
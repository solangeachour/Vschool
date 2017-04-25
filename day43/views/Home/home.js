var app = angular.module("app.home", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl: "Home/home.html",
    controller: "homeCtrl"
  });
});

app.controller("homeCtrl", function($scope) {
    $scope.image="image.gif";
    $scope.message="lebanon";
});
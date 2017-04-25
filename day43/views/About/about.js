var app = angular.module("app.about", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/about", {
    templateUrl: "About/about.html",
    controller: "aboutCtrl"
  });
});

app.controller("aboutCtrl", function($scope) {
});
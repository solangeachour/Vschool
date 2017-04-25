var app = angular.module("app.blog", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/blog", {
    templateUrl: "Blog/blog.html",
    controller: "blogCtrl"
  });
});

app.controller("blogCtrl", function($scope) {
});
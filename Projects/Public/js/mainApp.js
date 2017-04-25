var app = angular.module("myApp", ["ngRoute", "myApp.home","myApp.comment", "myApp.postPage","myService"]);
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        redirectTo: "/home"
    }).otherwise("/", {
        redirectTo: "/home"
    });
});
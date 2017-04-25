var app = angular.module("myApp", ["ngRoute", "myApp.home", "myApp.signin", "myApp.signup"]);
app.config(function ($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        redirectTo: "/home"
    }).otherwise("/", {
        redirectTo: "/home"
    });
});



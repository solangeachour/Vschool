var app = angular.module("app", ["ngRoute", "app.contact","app.movie","app.story"]);

app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        redirectTo: "/movies"
    }).otherwise("/", {
        redirectTo: "/movies"
    })
});

//uiGmapgoogle-maps
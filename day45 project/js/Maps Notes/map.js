var app = angular.module("myApp", ["ngRoute", "uiGmapgoogle-maps"]);


app.config(function ($routeProvider) {
    $routeProvider.when("/goo", {
        templateUrl: "./google/google.html",
        controller: "qwerytwe"
    });
});

app.controller("qwerytwe", function ($scope) {
    $scope.map = {
        center: {
            latitude: 51.219053,
            longitude: 4.404418
        },
        zoom: 14
    };
    $scope.options = {
        scrollwheel: false
    };
});
var app = angular.module("app.move", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/move", {
        templateUrl: "./Move/move.html",
        controller: "moveCtrl"
    });
});
app.service("moveservice", function ($http) {

    this.getmovies = function () {
        return $http.get("https://yts.ag/api/v2/list_movies.json");
    } 
});
app.controller("moveCtrl", function ($scope, moveservice) {
    console.log("move ctrl")
    $scope.getmove = function () {
        console.log("clicked fn")
        moveservice.getmovies().then(function (response) {
                
    
                $scope.items = response.data.data.movies;
            
            },

            function (response) {
                alert(response.status)
            })

    }
});

 
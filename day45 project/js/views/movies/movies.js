var app = angular.module("app.movie", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/movies", {
        templateUrl: "js/views/movies/movies.html",
        controller: "moveCtrl"
    });
});
app.service("moveservice", function ($http) {

    this.getmovies = function () {
        return $http.get("https://yts.ag/api/v2/list_movies.json");
    }
});
app.controller("moveCtrl", function ($scope, moveservice) {
    $scope.getmove = function () {
        moveservice.getmovies().then(function (response) {
                $scope.items = response.data.data.movies;
            },
            function (response) {
                alert(response.status)
            });
    }

});
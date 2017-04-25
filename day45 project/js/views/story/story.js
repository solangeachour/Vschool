var app = angular.module("app.story", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.when("/story/:id", {
        templateUrl: "js/views/story/story.html",
        controller: "movieStory"
    })
});

app.service("moveservice", function ($http) {

    this.getmovies = function () {
        console.log("Service called");
        return $http.get("https://yts.ag/api/v2/list_movies.json");
    }
});


app.controller("movieStory", function($scope, $routeParams, moveservice) {
    $scope.movie = {};
    $scope.setMovie = function(id, movies) {
        console.log("Called set movie", id, movies);
        for(var i = 0; i < movies.length; i++) {
            console.log(movies[i].id);
            if(movies[i].id == id) {
                console.log("Movie wAs hEre");
                $scope.movie = movies[i];
                break;
            }
        }
    }
    $scope.loadStory = function() {
        moveservice.getmovies().then(function(response) {
           $scope.setMovie($routeParams.id, response.data.data.movies);
        }, function(response) {
            alert("There was an error run for the hills");
            console.log(response.status);
        });
    }
})
var app = angular.module("myApp", ["angular-weather"]);

app.service("weather", function () {

    this.getenter= function ($http) {
        return $http.get("" + name)
    }

});
app.controller("mainCtrl", function ($scope, weather) {


$scope.getpokemon = function () {
     weather.getenter($scope.name).then(function (response) {
        $scope.name = response.Data.name;
    },
    function (response) {
        alert(response.status)
    })
    
}
});

});

var app = angular.module("MyApp", []);

app.service("pokservice", function () {

    this.getadd = function ($http) {
        return $http.get("http://pokeapi.co/api/v2/pokemon/" + name)
    }

});
app.controller("mainCtrl", function ($scope, pokservice) {


$scope.getpokemon = function () {
     pokservice.getadd($scope.name).then(function (response) {
        $scope.name = response.Data.name;
    },
    function (response) {
        alert(response.status)
    })
    
}
});
   






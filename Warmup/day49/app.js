var app = angular.module("MyApp", []);

app.filter("temperature", function () {

    this.getadd = function ($http) {
        return $http.get("http://pokeapi.co/api/v2/pokemon/" + name)
    }

});
app.controller("mainCtrl", function ($scope, temperature) {


$scope.temps = [];
   $scope.addItem function () {
     
        $scope.temps.push( $scope.temperature);
        $scope.temperature =0;
   
}
});
   



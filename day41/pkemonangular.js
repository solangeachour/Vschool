var app = angular.module("App", []);


app.service("pokeService", function () {
    this.array = [];
    this.counter= 0;
    this.add = function (name) {

        this.array.push(name);
    };
    this.delete = function (name) {

        for (var i = 0; i<this.array.length; i++) {
            if(this.array[i] === name){ 
                this.array.splice(i, 1);
                this.counter ++;
        }
        }
            if(this.counter === 0) 
                alert("repeat this steps");
    }
    
});
app.controller("mainCtrl", function ($scope, pokeService) {
    $scope.pokemon = pokeService.array;
    $scope.submit = function () {
        var name = $scope.name;
        pokeService.add(name);
        $scope.name = "";
    };
    $scope.delete = function (name) {
        var name = $scope.name;
        pokeService.delete(name);
        $scope.name = "";
    };

});
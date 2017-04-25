
var app = angular.module("App", []);
app.service("scoreServ", function () {
    var scoreServ = function (){
          this.count = 0;
        this.increment = function(x) {
            this.count += x;
 };
    };
    return {
        getInstance: function() { return new scoreServ(); }
    };
});


app.service("scoreServ", function () {
    var scoreServ = function (){
          this.count = 0;
        this.decrement = function(x) {
            this.count -= x;
 };
    };
    return {
        getInstance: function() { return new scoreServ(); }
    };
});

app.controller("mainCtrl", function ($scope, scoreServ) {
 
    $scope.increment = scoreServ.getInstance();
    $scope.decrement = scoreServ.getInstance();
});


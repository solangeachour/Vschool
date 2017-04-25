var app = angular.module("App", []);

app.service("calculate", function () {
    this.sum=0;
    this.add = function (a,b) {
        this.sum=a+b;
        return this.sum;
    }
    this.mult=0;
    this.mult = function (r,t) {
        this.mult=r*t;
        return this.mult;
    }
});
app.controller("mainCtrl", function ($scope, calculate) {
    $scope.addition = calculate.sum;
    $scope.addBtn = function () {
        calculate.add($scope.a,$scope.b);
          $scope.addition = calculate.sum;
        }


});


app.controller("multipleCtrl", function ($scope, calculate) {
    $scope.multiplication = calculate.sum;
    $scope.multBtn = function () {
        calculate.mult($scope.r,$scope.t);
          $scope.multiplication = calculate.mult;
        }


});



multiplication
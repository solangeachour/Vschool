     var app = angular.module("myApp.edi",  ["ngRoute","Rservice"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/insert", {
        templateUrl: "/js/views/Insert/post.html",
        controller: "insertCtrl"
    });
});
app.controller("insertCtrl", function ($scope, Rservice) {

    $scope.add = function () {
        var data = {
            name: $scope.name,
            Cost: $scope.cost,
           
            isDone: false
        }
        console.log("gfdkj");
        Rservice.postData(data).then($scope.loadData, function (err) {
            console.log(err.status);
        });
        $scope.name = "";
        $scope.cost = "";
         
    }
});
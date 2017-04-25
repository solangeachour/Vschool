var app = angular.module("myApp.postPage",  ["ngRoute","myService"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/insert", {
        templateUrl: "/js/views/Insert/postPage.html",
        controller: "insertCtrl"
    });
});
app.controller("insertCtrl", function ($scope, menuservice) {
console.log("hi")
    $scope.add = function () {
        var data = {
            title: $scope.title,
            description: $scope.description,
            likes: 0,
            disLike: 0,
            comments: [],
            show: false
        }
        console.log("gfdkj");
        menuservice.postData(data).then($scope.loadData, function (err) {
            console.log(err.status);
        });
        $scope.title = "";
        $scope.description = "";
     //   $location.path('/home');
//        window.location = "/home"
    }
});
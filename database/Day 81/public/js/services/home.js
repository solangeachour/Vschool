var app = angular.module("myApp.home", ["ngRoute", "myService"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "/views/home.html",
        controller: "homeCtrl"
    });
});

app.controller("homeCtrl", function ($scope, Rservice) {
    //    $scope.message = " Here is start my app in the front end" ;
    $scope.userInput = {};
    $scope.todoItems = [];
    $scope.getData = function () {
        //       Rservice.get();
        Rservice.getDatas().then(function (response) {
            var tempData = response.data.data;
            $scope.todoItems = [];
            for (var i = 0; i < tempData.length; i++) {
                $scope.todoItems.push({
                    _id: tempData[i]._id,
                    name: tempData[i].name,
                    cost: tempData[i].cost,
                    isDone: tempData[i].isDone,
                    isEdit: false
                });

            }
        }, function (response) {
            console.log(response.status);
        });

    };
    $scope.addItem = function () {
        var data = {
            name: $scope.userInput.name,
            cost: $scope.userInput.cost,
            isDone: false
        }

        Rservice.postData(data).then(function (response) {

            $scope.getData();
            $scope.userInput = {};
        }, function (response) {
            console.log(response.status);
        });

    };

    $scope.remove = function (id) {
        Rservice.deleteData(id).then(function (response) {
            $scope.getData();
        }, function (response) {
            console.log(response.status);
        });

    };

    $scope.toggleEdit = function (index) {

        $scope.todoItems[index].isEdit = !$scope.todoItems[index].isEdit;

    };

    $scope.save = function (id, data) {
        Rservice.editData(id, data).then(function (response) {
            $scope.getData();
        }, function (response) {
            console.log(response.data);
        });



    }
});
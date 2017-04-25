 var app =angular.module("myApp",[]);

app.controller("mainCtrl", function ($scope, menuservice) {
    $scope.menuItems =[]; 
    $scope.loadData = function () {
        menuservice.getData().then(function (response) {
            $scope.menuItems = response.data.data;
        }, function (response) {
            console.log(response.status);
        })
    };
    $scope.add = function () {
        var data = {
            name: $scope.task,
            Cost: $scope.task,
            Type: $scope.task
        }
        menuservice.postData(data).then($scope.loadData, function (error) {
            console.log(error.status);
        });
        $scope.task = "";
    }

    $scope.edit = function (id, editinput) {
        var data = {
            name: editinput,
             Cost: editinput,
             Type: editinput
        }
        console.log(editinput);
        menuservice.editData(id, data).then(function () {
            console.log(data.name);
        }, function (error) {
            console.log(error.status);
        });
        $scope.editmenu = "";
        $scope.loadData();
    }
    $scope.deleteMenu = function (_id) {
        menuservice.deleteData(_id).then($scope.loadData, function (error) {
            console.log(error.status);
        });
    }
});
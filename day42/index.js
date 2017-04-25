var app = angular.module("App", ["mystore"]);



app.controller("mainCtrl", function ($scope, store) {
    $scope.storeinItem = store.items;
    $scope.total = store.total;
    $scope.add = function () {

        store.add({
            name: $scope.name,
            cost: $scope.cost
        });
        $scope.total = store.total;
    };
});
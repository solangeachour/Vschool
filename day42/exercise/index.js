var app = angular.module("App", []);


app.service("store", function () {
    this.items = [];
    this.total = 0;
    this.add = function (item) {

        this.items.push(item);
        this.total += item.cost;

    };
});

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
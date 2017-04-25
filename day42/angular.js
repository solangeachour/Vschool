var app = angular.module("Myapp", []);

app.service("store", function () {
    this.images = [];
    this.addCartoon = function (object) {
        this.images.push(object);
    }
});
app.controller("mainCtrl", function ($scope, store) {
    $scope.items = store.images;

    $scope.addCartoon = function () {
        store.addCartoon({
            title: $scope.title,
            imgurl: $scope.imgurl,
            description: $scope.description
        });
    }

});
app.controller("multipleCtrl", function ($scope, store) {
    $scope.items = store.images;

    $scope.addCartoon = function () {
        store.addCartoon({
            title: $scope.title,
            imgurl: $scope.imgurl,
            description: $scope.description
        });
    }

});
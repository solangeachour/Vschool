 var app = angular.module("myApp", ["DropModule"]);

 app.controller("controller", function ($scope) {
     $scope.shopItems = [];
     $scope.addshoppItem = function () {
         $scope.shopItems.push({
             name: $scope.name,
             amount: $scope.amount,
             price: $scope.price
         });
         $scope.name = "";
         $scope.amount = 0;
         $scope.price = 0;
         console.log($scope.name)
     }
     $scope.ShopDropDown = ["cheese", "chicken", "bread", "odex", "meat",
         "vegetable"];
 });
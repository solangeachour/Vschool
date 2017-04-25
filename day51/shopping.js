 var app = angular.module("myApp",["shoppModule"]);

app.controller("controller",function($scope){
     $scope.shopItems = [];
     $scope.addshoppItem = function (){
          $scope.shopItems.push({
              name: $scope.name,
               amount:$scope.amount,
              price:$scope.price
          });
   
    $scope.name="";
    $scope.amount=0;
          $scope.price=0;
     }
});

//app.directive("itemInShopp",function(){
//    return {
//        scope:{
//            name:"=",
//            currency:"@",
//            amount:"="
//        },
//        template :"<div> Name:{{name}}<br>Currency:{{currency}}<br> Amount:{{amount}}</div>"
//    }
//});
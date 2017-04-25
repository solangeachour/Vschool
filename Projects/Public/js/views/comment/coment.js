  var app = angular.module("myApp.comment", ["ngRoute", "myService"]);
  app.config(function ($routeProvider) {
      $routeProvider.when("/comment/:id", {
          templateUrl: "/js/views/comment/comment.html",
          controller: "commentCtrl"
      });
  });

  app.controller("commentCtrl", function ($scope, menuservice,$routeParams) {
     $scope.loadData = function () {
         menuservice.getData().then(function (response) {
            $scope.menuItems = response.data.data;
         }, function (response) {
             console.log(response.status);
        });
    }
//
//      $scope.upp = function (id, likes) {
//
//          likes++;
//          console.log(likes);
//          menuservice.editData(id, {
//              likes: likes
//          }).then($scope.loadData, function (err) {
//              console.log(err.status);
//          });
//      }
//
//      $scope.down = function (id, disLike) {
//          disLike++;
//          menuservice.editData(id, {
//              disLike: disLike
//          }).then($scope.loadData, function (err) {
//              console.log(err.status);
//          });
//
//      }
//
       
      $scope.deleteMenu = function(id) {
          menuservice.deleteData(id).then($scope.loadData)
      }
      
      $scope.addComment = function (id, text) {
          menuservice.postComments(id, text).then(function () {
              for (var i = 0; i < $scope.menuItems.length; i++) {
                  if ($scope.menuItems[i]._id == id) {
                      $scope.menuItems[i].comments.push(text);
                  }
              }
              $scope.loadData();
          }, function (err) {
              console.log(err.status);
          });
      }
      var id = $routeParams.id;
      console.log(id)
      $scope.loadData = function (){
           menuservice.getDataById(id).then(function (response) {
               $scope.menu = response.data.data
      },function(response){
               console.log(response.status);
           });
      }
  });
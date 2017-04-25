var app = angular.module("myApp.home", ["ngRoute","myService"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "/js/views/home/home.html",
        controller: "homeCtrl"
    });
});

app.controller("homeCtrl", function ($scope, menuservice) {
    $scope.show = function (menu) {
        menu.show = !menu.show;
    }

//  $scope.menuItems = [];
//$scope.sort = function(menu){
//return menu.likes - menu.disLike;
//}
// $scope.getIndex = function (_id){
//    
//
//
//
// for (var i = 0; i < $scope.menuItems.length; i++) {
//                  if ($scope.menuItems[i]._id == id) {
//                      return i;
//                  }
//              }
//
//return -1;
//}
  
    
    
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
    }
    $scope.loadData = function () {
          menuservice.getData().then(function (response) {
              $scope.menuItems = response.data.data;
          }, function (response) {
              console.log(response.status);
          });
      }

      $scope.upp = function (id, likes) {

          likes++;
          console.log(likes);
          menuservice.editData(id, {
              likes: likes
          }).then($scope.loadData, function (err) {
              console.log(err.status);
          });
      }

      $scope.down = function (id, disLike) {
          disLike++;
          menuservice.editData(id, {
              disLike: disLike
          }).then($scope.loadData, function (err) {
              console.log(err.status);
          });

      }
      
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
          }, function (err) {
              console.log(err.status);
          });
      }
});

//
//
//   $scope.loadData = function () {
//
//    
//          menuservice.getData().then(function (response) {
//  $scope.menuItems = [];
//              var dataGet = response.data.data;
//
//    for (var i = 0; i < $scope.dataGet.length; i++) {
//                  
//                      $scope.menuItems.push({
//
//                        _id:dataGet[i]._id),
//                         title: dataGet[i].title,
//                         description: dataGet[i].description,
//                           likes: dataGet[i].likes || 0,
//                             disLike:dataGet[i].disLike  || 0,
//                           comments:dataGet[i].comment,
//                           show: false
//});
//                  }
//              }
//          }, function (response) {
//              console.log(response.status);
//          });
//      
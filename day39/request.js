var app = angular.module("myApp", []);


app.service("todoService", function ($http) {
    this.getData = function () {

        return $http.get("http://api.vschool.io/talalom/todo/");
    }
    this.postData = function (data) {

        return $http.post("http://api.vschool.io/talalom/todo/", data);
    }
     this.putData = function (data,id) {
console.log(data);
        return $http.put("http://api.vschool.io/talalom/todo/"+id, data);
    }
    this.deleteData = function (id) {

        return $http.delete("http://api.vschool.io/talalom/todo/" + id);
    }

});

app.controller("ctrl", function ($scope, todoService) {
    console.log(todoService);
    $scope.loadData = function () {

        todoService.getData().then(function (response) {
                console.log("Data loaded");
                $scope.items = response.data;
                console.log("$scope.items");
            },
            function (response) {
                console.log("error.status");
                console.log("error");

            });

    }

    $scope.deleteData = function (id) {
        todoService.deleteData(id).then($scope.loadData, function(response){
             console.log(response.status);
        })

    }

    $scope.postData = function () {

        var newData = {
            title: $scope.newItem
        }

        todoService.postData(newData).then($scope.loadData, function(response){
             console.log(response.status);
        })
    }

        
    $scope.putdata= function(id,up){
     console.log(id);
    console.log(up);
        
        var updatedData={
            title: $scope.update
        }
      
         todoService.putData(updatedData,id).then($scope.loadData, function(response){
             console.log(response.status);
    });
    }
});

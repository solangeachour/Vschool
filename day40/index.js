var app = angular.module("App", []);


app.service("todoService", function ($http) {
            this.getData = function () {

                return $http.get("http://api.vschool.io:6543/hitlist.json");
            }
});
            app.controller("mainCtrl", function ($scope, todoService) {
                $scope.loadData = function () {
                    todoService.getData().then(function (response) {
                            console.log("Data loaded");
                            $scope.items = response.data;
                            console.log("$scope.items");
                        },
                        function (response) {
                            console.log("error.status");

                        });
                }

            });
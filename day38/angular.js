var app = angular.module("App", []);

var config = {
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};

app.service("todoService", function ($http) {
            this.getData = function (input) {

                return
                $http.get("https://yoda.p.mashape.com/yoda?sentece="+input, config);
            }

        }; 
            
            app.controller("ctrl", function ($scope, todoService,$http) {
            $scope.Add = function () {
                todoService.getData($scope.newName).then(function (response) {
                    $scope.informations = response.data;
                }, function (error) {
                    alert("error status:" + error status);
                });
            }


        });
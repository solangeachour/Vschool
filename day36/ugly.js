var app = angular.module("App", []);


app.service("titleServ", function () {
    this.images = [];
    this.takeObj = function (obj) {
        this.images.push({
            title:obj.title,
            imgurl:obj.imgurl,
            description:obj.description,

        });
        
    }
    
});
app.controller("mainCtrl", function ($scope, titleServ) {
 
    $scope.items =titleServ.images ;
    $scope.submit = function (obj) {

         titleServ.takeObj(obj);
        $scope.obj="";
    }
    });

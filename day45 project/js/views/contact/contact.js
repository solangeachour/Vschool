var app = angular.module("app.contact", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/contact", {
    templateUrl: "js/views/contact/contact.html",
    controller: "contactCtrl"
  });
});

app.service("moneyCoverter" , function($http) {
    this.getData = function() {
        return $http.get("http://api.fixer.io/latest?base=USD");
    }
    
});

app.controller("contactCtrl", function($scope, moneyCoverter) {
	$scope.message = 'Welcome To View The Movies';
    $scope.list = {};
    $scope.loadDate = function() {
        moneyCoverter.getData().then(function(response) {
            $scope.list = response.data;
        })
    };
    $scope.convert = function(cur) {
        console.log(cur);
        $scope.convertedCurr = cur * $scope.yourCurr;
    }
});

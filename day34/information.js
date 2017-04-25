var app = angular.module("App", []);
app.controller("maincontroller", function ($scope) {
   
   $scope.firstname = [];
//    $scope.email = "";
//    $scope.phone = "";
//    $scope.lasttname = "";
//    $scope.placeofbirth = "";
//    $scope.favoritefood= "";
    
  
    $scope.submit = function (); {
        
        $scope.arr.push({
          $scope.firstname.push($scope.firstname);
               $scope.firstname = " ";
           
             $scope.remove = function(index){
                console.log(index);
  }
        }
          laststname: $scope.laststname,
          email: $scope.email,
        placeofbirth: $scope.placeofbirth,
          favoritefood: $scope.favoritefood

        });
    }
});
 
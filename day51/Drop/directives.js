 var app = angular.module("DropModule",[]);
app.directive("itemInShopp",function(){
    return {
        restrict:"AE",
        scope:{
            name:"=",
            currency:"@",
            amount:"=",
             price:"="
        },
        templateUrl :"list.html",
        link:function(scope, elem,attrs) {
            var btn = elem.find("button");      
       btn.bind("click",function(){
                scope.total = scope.amount * scope.price;
                scope.$apply();
            });
        }
    }
});
 var app = angular.module("shoppModule",[]);
app.directive("itemInShopp",function(){
    return {
        restrict:"AE",
        scope:{
            name:"=",
            currency:"@",
            amount:"=",
             price:"="
        },
        templateUrl :"directives/shop/shop.html",
        link:function(scope, elem,attrs) {
            var btn = elem.find("button");      
       btn.bind("click",function(){
                scope.total = scope.amount * scope.price;
                scope.$apply();
            });
        }
    }
});
    
//            console.log(btns);
//            for( var i =0;i <btns.length;i++){
//                console.log(btns[i].id);
//                if(btns[i].id == "totalbtn"){
//                    
//                }
//            }
     
//    "<div> Name:{{name}}<br>Currency:{{currency}}<br> Amount:{{amount}}</div>"
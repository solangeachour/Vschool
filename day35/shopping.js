var app = angular.module("App", []);


app.service("ItemServ", function () {
    this.shopping = [];
    this.addItem = function (nameItem) {
        this.shopping.push(nameItem);
        
    }
    this.remove = function(i){
        this.shopping.splice(i,1);
    }
    
});
app.controller("maincontroller", function ($scope, ItemServ) {

    $scope.shopping = ItemServ.shopping;
    $scope.addItem = function () {
//        var item = $scope.nameItem;
        ItemServ.addItem($scope.nameItem);
         $scope.shopping = ItemServ.shopping;
    }
    $scope.removeItem= function (index) {
        console.log(index)
        ItemServ.remove(index);
         $scope.shopping = ItemServ.shopping;
    }
});

$("#addItem").click(function(){
    var output = $("#output").val();
  
     $("#outputList").append("<p id ="+ output + "> <input type='checkbox' id ="+ output + " onclick='deleteItem("+ output + " )'/>" + output +"</p>"); 
    $("#output").val("");
});
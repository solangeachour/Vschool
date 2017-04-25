 var app = angular.module("myApp", []);

 app.filter("search", function () {
             return function (input, term) {
//                 console.log(input);
                 var result = [];
                 for (var i = 0; i<input.length; i++) {
                     if (input[i].name.indexOf(term) != -1) {
                         result.push(input[i]);
                     }
                 }
                 return result;
             }
 });

             app.controller("controller", function ($scope) {
                 $scope.searchTerm = "";
                 $scope.data = [
                     {

                         name: "cat.png",
                         size: 8
     },
                     {
                         name: "car.png",
                         size: 8
     },
                     {
                         name: "book.pdf",
                         size: 10
                    },
                     {
                         name: "sript.pdf",
                         size: 10
                    },
                     {
                         name: "index.html",
                         size: 10
                                }
             ]
             });
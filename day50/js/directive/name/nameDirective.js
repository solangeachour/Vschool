var app = angular.module("nameModule", []);
app.directive("name", function () {
    return {
        restrict: "AE",
        templateurl: "js/directive/name/name.html",
        link: function (scope, elem, attrs) {
            console.log("loaded the directive");
            elem.bind("click", function () {
                elem.css("color", "red");
            });
        }


    }

});

//        template:"<div>My name <b>is</b> awesome <i>and</i> it is <i><u>Solange</i></u></div>"
        
//          templateurl:"js/directives/name/name.html"
      
      

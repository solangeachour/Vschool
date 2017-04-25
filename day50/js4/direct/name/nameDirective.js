var app = angular.module("nameModule", []);

    app.directive("name", function() {
  return {
    scope: {
      title: "=",
      colorOfText: "@"
    },
    restrict: "AE",
    templateUrl: "direct/name/name.html",
    link: function(scope, elem, attrs) {
      console.log("Loaded the directive");
      elem.bind("click", function() {
        console.log(scope.title);
          scope.title ="Hello World";
          scope.$apply();
        console.log(scope.colorOfText);
        elem.css("color", scope.colorOfText);
      });
    }
  }
});        

//        template:"<div>My name <b>is</b> awesome <i>and</i> it is <i><u>Solange</i></u></div>"
        
//          templateurl:"js/directives/name/name.html"
      
      

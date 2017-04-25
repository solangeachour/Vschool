var app = angular.module("nameModule", []);

    app.directive("name", function() {
  return {
    scope: {
      title: "@",
      colorOfText: "@"
    },
    restrict: "AE",
    templateUrl: "directiv/name/name.html",
    link: function(scope, elem, attrs) {
      console.log("Loaded the directive");
      elem.bind("click", function() {
        console.log(scope.title);
        console.log(scope.colorOfText);
        elem.css("color", scope.colorOfText);
      });
    }
  }
});        

//        template:"<div>My name <b>is</b> awesome <i>and</i> it is <i><u>Solange</i></u></div>"
        
//          templateurl:"js/directives/name/name.html"
      
      

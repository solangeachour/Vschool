var app = angular.module("nameModule", []);
app.directive("name", function(){
    return { 
        restrict:"AE",
        template:"<div>My name <b>is</b> awesome <i>and</i> it is <i><u>Solange</i></u></div>"
              }
              
});


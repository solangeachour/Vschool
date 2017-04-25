var app = angular.module("authModule",[]);
  app.service("auth",function($http){
      this.signup = function(data){
          console.log(data);
        
          return $http.post("http://localhost:8080/auth/signup", data);
      }
       this.signin = function(data){
                     console.log(data);
          return $http.post("http://localhost:8080/auth/signin", data);
      }
  });
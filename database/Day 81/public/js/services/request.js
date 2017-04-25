var app = angular.module("myService", []);
app.service("Rservice", function ($http) {

    this.getDatas = function () {
        return $http.get("http://localhost:8080/api");
        //        return data;
    }
    this.getDataById = function (id) {
        return $http.get("http://localhost:8080/api" + id);
    }
    this.postData = function (data) {
        return $http.post("http://localhost:8080/api", data);
    }
   
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/api/" + id);
    }
    this.editData = function (id, data) {
        var fullString = "";
        var queryString = "";
        for (key in data) {
            queryString += key + "=" + data[key] + "&";
            fullString += queryString;
            queryString = "";
        }
        return $http.put("http://localhost:8080/api/" + id + "?" + fullString);

    }

});
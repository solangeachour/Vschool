var app = angular.module("myService", []);
app.service("Rservice", function ($http) {

    this.getData = function () {
        return $http.get("http://localhost:8080");
        //        return data;
    }
    this.getDataById = function (id) {
        return $http.get("http://localhost:8080" + id);
    }
    this.postData = function (data) {
        return $http.post("http://localhost:8080/voted", data);
    }
   
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/" + id);
    }
    this.editData = function (id, data) {
        var fullString = "";
        var queryString = "";
        for (key in data) {
            queryString += key + "=" + data[key] + "&";
            fullString += queryString;
            queryString = "";
        }
        return $http.put("http://localhost:8080/" + id + "?" + fullString);

    }

});
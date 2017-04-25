var app = angular.module("myService", []);
app.service("menuservice", function ($http) {

    this.getData = function () {
        return $http.get("http://localhost:5000/voted");
        //        return data;
    }
    this.getDataById = function (id) {
        return $http.get("http://localhost:5000/voted/" + id);
    }
    this.postData = function (data) {
        return $http.post("http://localhost:5000/voted/", data);
    }
    this.postComments = function (id, comment) {
        var data = {
            comment: comment
        }
        return $http.post("http://localhost:5000/voted/" + id, data);
    }
    this.deleteData = function (id) {
        return $http.delete("http://localhost:5000/voted/" + id);
    }
    this.editData = function (id, data) {
        var fullString = "";
        var queryString = "";
        for (key in data) {
            queryString += key + "=" + data[key] + "&";
            fullString += queryString;
            queryString = "";
        }
        return $http.put("http://localhost:5000/voted/" + id + "?" + fullString);

    }

});
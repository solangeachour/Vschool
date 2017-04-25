 var app =angular.module("requestModule",[]);
app.service("menuservice", function ($http) {

    this.getData = function () {
        return $http.get("http://localhost:8080/menu");
    }

});


 var app =angular.module("myApp",[]);
app.service("menuservice", function ($http) {

    this.getData= function () {
        return $http.get("http://localhost/8080/menu");
    }
this.postData = function (data) {
        return $http.post("http://localhost:8080/menu/", data);
    }
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/menu/" + id);
    }
    this.editData = function (id, data) {
        var queryString = "";
        for (key in data) {
            queryString += key + "=" + data[key]
        }
        return $http.put("http://localhost:8080/menu/" + id + "?" + queryString);
    }
});
});

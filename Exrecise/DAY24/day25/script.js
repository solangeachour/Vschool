function loadData() {
    $.ajax({
        url: "http://api.vschool.io/jacobevans/todo",
        type: "GET",
        success: function (data) {

            $("#output").html("");
            for (var i = 0; i < data.length; i++) {
                $("#output").append("<li id =' " + data[i]._id + " ' >" + data[i].title + data[i].description + data[i].price + "</li>");
            }
//            addDeleteEventListener();
        }
    });
}

function addDeleteEventListener() {
    console.log("function is called");
    $("#li").click(function () {
        var id = $(this).attr("id");
        $.ajax({
            url: "http://api.vschool.io/jacobevans/todo/" + id,
            type: "D
    });
}

function addData() {
    var title = $("#title").val();
    var description = $("#description").val();
    var price = $("#price").val();
    var data = {
        title: title,
        description: description,
        price: price
    };
    $.ajax({
        url: "http://api.vschool.io/jacobevans/todo",
        type: "POST",
        success: function () {
            loadData();
            $("#title").val("");
            $("#description").val("");
            $("#price").val("");
        }
    });
}

$(document).ready(function () {
    loadData();
    $("#submit").click(addData);
});
function loadData() {
    $.ajax({
        url: "coursework.vschool.io/moms-shopping-list/",
        type: "GET",
        success: function (data) {

            $("#output").html("");
            for (var i = 0; i < data.length; i++) {
                $("#output").append("<li id =' " + data[i]._id + " ' >" + data[i].title + data[i].description + data[i].price + "</li>");
            }

        }
    });
}


function addDeleteEventListener() {
    $("#li").click(function () {
        var id = $(this).attr("id");
        $.ajax({
            url: "http://coursework.vschool.io/moms-shopping-list/" + id,
            type: "DELETE",
            success: function () {
                loadData();

            }
        })
    });
}

function addData() {
    
    var data = {
        
        var title = $("#title").val(),
        var description = $("#description").val()||| "", 
        
    var price = $("#price").val()|| 0,
        imgurl: $( "#imgurl").val() || "" ,
        completed:("#completed").is (":checked")|| false}
    };
    $.ajax({
        url: "http://coursework.vschool.io/moms-shopping-list/",
        type: "POST",
        data: data
        success: function () {
            loadData();
           
           
        }
    })
}

$(document).ready(function () {
    loadData();
    $("#submit").click(addData);
});
$("#add").click(function () {
   addOutput();
});
//"<p id ="+ output + "> <input type='checkbox' id ="+ output + " onclick='deleteItem("+ output + " )'/>" + output +"</p>"); 
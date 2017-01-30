 
$("#submit").click(function(){
    var output = $("#output").val();
  
     $("#outputList").append("<p id ="+ output + "> <input type='checkbox' id ="+ output + " onclick='deleteItem("+ output + " )'/>" + output +"</p>"); 
    $("#output").val("");
});

function deleteItem(id){
   $(id).remove();
};
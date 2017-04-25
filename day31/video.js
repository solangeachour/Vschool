$(document).ready(function() {
   $.ajax ({
    url:"http://swapi.co/api/films/1/",
    type:"GET",
    success: function(data) {
    $(".output").html(data.opening_crawl);
//        console.log(data.opening_crawl);
    }
  }) 
});



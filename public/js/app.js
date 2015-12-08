$(document).ready(function(){

	console.log("Sanity Check: My JS is working!");



	$.ajax({
  	method: "GET",
	url: "api/profile",
  	success: function (data) {

  		$("div#profile").append("<img id='selfie' src=" + data.github_profile_image + "</img>");
		$("div#profile").append("<a href=" + data.github_link + ">");
   		$("div#profile").append("<h3>" + data.name+ "</h3>");
   		$("div#profile").append("<p>" + "Current City: " + data.current_city + "</p>");
   		$("div#profile").append("<p>" + data.family_members[0].relationship + ": " + data.family_members[0].name +  "</p>");
   		$("div#profile").append("<p>" + data.family_members[1].relationship + ": " + data.family_members[1].name +  "</p>");
   		}
	}); 

$.ajax({
  	method: "GET",
	url: "api/movies",
  	success: function (data) { 	
  	console.log(data);	
   		$("div#movies").append("<p>" + data.data[0].title + "</p>");
   		$("div#movies").append("<p>" + data.data[1].title + "</p>");
   		$("div#movies").append("<p>" + data.data[2].title + "</p>");
   		$("div#movies").append("<p>" + data.data[3].title + "</p>");
      }
		});


  $('form').on('submit', function (event){
    event.preventDefault();
    console.log('hello');
    var newMovie = $('#userInput').val();
   console.log("new movie", newMovie);
     
      $.ajax({
      method: "POST",
      url: "api/movies",
      data: { movie: newMovie },
      success: function (data) {  
      console.log(data);  
      $("div#movies").append("<p>" + data.title + "</p>");
      }
    });



      $('form').on('submit', function (event){
    event.preventDefault();
    console.log('hello delete');
    //var selectedMovie = $('#deleteMovie').val();
    var movieToDelete = movies.filter(function (movie){
       return movie.title == movie;
     })[0];
  // //  console.log("new movie", newMovie);
       $.ajax({
       method: "DELETE",
      url: "api/movies",
       data: { movie: movieToDelete },
       success: function (data) {  
       console.log(data);  
   
         movies.splice(movies.indexOf(movieToDelete), 1);
         render();

       }
         });
      
    });
  });
});


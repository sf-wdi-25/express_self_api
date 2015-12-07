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
  
});



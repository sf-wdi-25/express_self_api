console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$.ajax({
		method: "GET",
		url:"/api/profile",
		success: function(pizza){
			$("h1").append("<img src=\"" + pizza[0].github_profile_image + "\">");
		},

		error: function(){
			console.log("Error with displaying Image");
		}
	});

	// READ for Videogame DataStructure
	$.ajax({
		method: "GET",
		url:"/api/videogames",
		success: function(pizza){

			pizza.forEach(function (element){
				console.log(element);
				$(".showList").append("Title: " + element.title);
				$(".showList").append("<br> Developer: " + element.developer);
				$(".showList").append("<br> Year: " + element.year);
				$(".showList").append("<br> Description: " + element.description + "<p></p>");
				//can be refactored
			});	
		},

		error: function(){
			console.log("Error with Videogame READ/GET");
		}
	});

	$.ajax({
		method: "GET",
		url:"/api/videogames/1",
		success: function(pizza){
			console.log(pizza);
		},

		error: function(){
			console.log("Error with Videogame READ/GET One Video Game");
		}
	});

	// CREATE for Videogame DataStructure
	// Hardcoded for now
	// Server side haven't made a path yet

	$.ajax({
		method: "POST",
		url:"/api/videogames",
		data: {
			title:"Final Fantasy VII",
	    	developer: "SquareSoft",
	    	year: 1997,
	    	description: "The start of mixing video games and cinematics."
		},
		success: function(pizza){
			console.log("Your videogame was added!");
			console.log(pizza);
		},

		error: function(){
			console.log("Error with Videogame CREATE/POST");
		}
	});

	// UPDATE for Videogame DataStructure
	// Hardcoded for now
	// Server side haven't made a path yet

	$.ajax({
		method:"PUT",
		url:"/api/videogames/1",
		data: {
			title:"Super Mario 64",
	    	developer: "Nintendo",
	    	year: 1996,
	    	description: "Mario's first foray into 3D graphics."
		},
		success: function(pizza){
			console.log(pizza);
			console.log("Your videogame was updated");
		},

		error: function(){
			console.log("Error with Videogame UPDATE/PUT");
		}
	});

	// DESTROY for Videogame DataStructure
	// Hardcoded for now
	// Server side haven't made a path yet
	$.ajax({
		method: "DELETE",
		url:"/api/videogames/3",
		success: function(pizza){
			console.log("Videogame deleted!");
		},

		error: function(){
			console.log("Error with Videogame DESTROY/DELETE");
		}
	});
});

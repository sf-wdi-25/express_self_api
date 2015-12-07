console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	// READ for Videogame DataStructure
	$.ajax({
		method: "GET",
		url:"/api/videogames",
		success: function(pizza){

			pizza.forEach(function (element){
				console.log(element);
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

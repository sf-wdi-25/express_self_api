console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// // your code
	$.ajax ({
		method:'GET',
		url: '/api/profile/',
		success: function(data) {
			console.log(data.data[0]);
			var profile = data.data[0];
			$('.profile').append("<p>" + profile.name + "</p>" + "<br>" + "<p>" + profile.current_city + "</p>" + "</br>");
			$('.profile').append('<h4><u>Family members</u></h4>');
			profile.family_members.forEach(function (member) {
			  $('.profile').append('<p>' + member.name + " - " + member.relationship + '</p><br>');
			});
	    }
	});
	    $.ajax ({
	    	mehthod: 'GET',
	    	url: '/api/favoriteMovies',
	    	success: function() {
	    		console.log(favoriteMovies.favoriteMovies);
	    		$('.favoriteMovies').forEach(favoriteMovies.movies);
	    	}
	    }); 
	   		
	 
	// $.ajax ({
	// 	method: "POST",
	// 	url: '/api/favoriteMovies',
	// 	success: function(data) {

	// 	}
	// 	});
});

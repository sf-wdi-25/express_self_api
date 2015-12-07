console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code

$.ajax({
         method: 'GET',
         url: '/api/profile',	
         success: function(data) {
         	console.log(data.name);
         	data.family_members.forEach(function (member) {
         		console.log(member.name, member.relationship);
         	})
         	$('#profile').append("<h1>" + data.name + "</h1>")
         	$('#profile').append("<p>" + data.github_link + "</p>")
         	$('#profile').append("<p><img src=\"github_profile_image</img>\"")
           }
});

$.ajax({
         method: 'GET',
         url: '/api/favoriteMovies',
         success: function(data) {
         	data.forEach(function (movie){
         		console.log(movie.year);
         	$('#movie').append("<p>" + movie.title + "</p>" )	
         	$('#movie').append("<p>" + movie.year + "</p>"	)	
         	});
         	//data.data.forEach(function (element){
         		//$('#profile').append("<p>" + element.name + "</p>")
           }
});           
    //    },  	
    //      error: function() { console.log('uh oh')

    //      }
    // });



});
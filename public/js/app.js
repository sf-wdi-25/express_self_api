console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code

$.ajax({
         method: 'GET',
         url: '/api/profile',	
         success: function(data) {
         	// console.log(data.name);
         	// data.family_members.forEach(function (member) {
         	// 	console.log(member.name, member.relationship);
         	// })
         	$('#profile').append("<p><strong>Name:</strong> " + data.name + "</p>")
         	$('#profile').append("<p><strong>GitHub Link:</strong> " + data.github_link + "</p>")
         	$('#profile').append("<p><img src=" + data.github_profile_image + "</img>")
         	$('#profile').append("<p><strong>City:</strong> " + data.current_city + "</p>")
         	$('#profile').append("<p><strong>Family Members:</strong></p>" + 
         	 	"<li>" + 
         	 		"<ul>" + data.family_members[0].name + " - " + data.family_members[0].relationship + "</ul>" +
         	 		"<ul>" + data.family_members[1].name + " - " + data.family_members[1].relationship + "</ul>" +
         	 		"<ul>" + data.family_members[2].name + " - " + data.family_members[2].relationship + "</ul>" + 
         	 	"</li>")
           }
});

$.ajax({
         method: 'GET',
         url: '/api/favoriteMovies',
         success: function(data) {
         	data.forEach(function (movie){
         		console.log(movie.year);
         	$('#movie').append("<p>" + movie._id + "." + " " + movie.title + " " + "\(" + movie.year + "\)" + " - " + movie.director + "</p>" )		
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
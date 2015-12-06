console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// // your code
	$.ajax ({
		method:'GET',
		url: '/api/profile/',
		success: function(data) {
		data.data.forEach( function (e){
			$('.profile').append("<p>" + e.name + "</p>" + "<br>" + "<p>" + e.current_city + "</p>" + "</br>" + "<br>" + "<p>" + e.family_members[{}] + "</p>" + "</br>");

		});
		
	}
	});
		
});

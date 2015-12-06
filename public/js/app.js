console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// // your code
	$.ajax ({
		method:'GET',
		url:'http://localhost:3000/api/profile/favoritemovies',
		success: function(data) {
		console.log()
		// 	data.forEach(function (element) {
		// }
	})
	})
		


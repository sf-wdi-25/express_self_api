console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  $(".about").click(function handler() {
  	$.ajax({
  		method: "GET",
  		url: "/api/profile",
  		success: function (data) {
  			$(".about-me").append("<h1><img src='" + data.github_profile_image + "'><br />" +
  				"About " + data.name + "</h1>" +
  				"<p>Chicago-native currently residing in " + data.current_city + ", and taking a web dev course in San Francisco.</p>");
  		},
  		error: function (error) {
  			console.log("Something went terribly wrong. Error code: " + error.status);
  			$(".about-me").append("Oops! Looks like something went wrong. This data is currently unavailable.");
  		}
  	});
  });

});

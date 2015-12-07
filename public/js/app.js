console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  $(".about-me").hide();
  $(".shows-list").hide();

  $(".about").click(function handler() {
  	$(".about-me").show();
  	$.ajax({
  		method: "GET",
  		url: "/api/profile",
  		success: function (data) {
  			$(".about-me").html("<h1><img src='" + data.github_profile_image + "'><br />" +
  				"About " + data.name + "</h1>" +
  				"<p>Chicago-native currently residing in " + data.current_city + ", and taking a web dev course in San Francisco.</p>");
  		},
  		error: function (error) {
  			console.log("Something went terribly wrong. Error code: " + error.status);
  			$(".about-me").html("<h1>Oops! Looks like something went wrong. This data is currently unavailable.</h1>");
  		}
  	});
  });

  $(".shows").click(function handler() {
  	$(".shows-list").show();
  	$.ajax({
  		method: "POST",
  		url: "/api/shows",
  		data: {
			    name: 'The Grand Test',
			    creator: "Sir Testerson III",
			    series_status: 'ongoing',
			    marathon_status: 'up to date'
    		  },
	    success: function (data) {
	    	console.log(data);
	    	data.forEach(function (element) {
	    		$(".shows-list").append("<h1>" + element.name + " - " + element.creator + "</h1>");
	    	});
	    	
	    },
	    error: function (error) {
	    	console.log(error);
	    }
  	});
  	
  });

  // $(".shows-list").on("click", $(".post"), function handler() {
  // 	$.ajax({
  // 		method: "POST",
  // 		url: "/api/shows",
  // 		data: {
		// 	    name: ,
		// 	    creator: ,
		// 	    series_status: 'ongoing',
		// 	    marathon_status: 'up to date'
  //   		  },
	 //    success: function (data) {
	 //    	console.log(data);
	 //    },
	 //    error: function (error) {
	 //    	console.log(error);
	 //    }
  // 	});
  // });
});

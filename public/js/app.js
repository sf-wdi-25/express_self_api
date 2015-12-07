console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  $(".about-me").hide();
  $(".shows-list").hide();

  var dataToUse = {};
  var methodToUse;
  var url;

  $(".about").click(function handler() {
  	$(".shows-list").hide();
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

  function updateShowData(data) {
  	$(".shows-list.data").empty();
  	data.forEach(function (element) {
		$(".shows-list.data").append("<h1>" + element.name + " - " + element.creator + "</h1>");
	});
  }

  $(".shows").click(function handler() {
  	$(".about-me").hide();
  	$(".shows-list").show();
  	$.ajax({
  		method: "GET",
  		url: "/api/shows",
  		success: function (data) {
  			updateShowData(data);
  		},
  		error: function (error) {
  			console.log(error);
  			$(".shows-list.data").html("<h1>Oops! Looks like something went wrong. This data is currently unavailable.</h1>");
  		}
  	});
  });
  	
  $(".btn.post").click(function handler() {
  	methodToUse = "POST";
  	url = "/api/shows";
	if ($(".name.post").val() !== "" && $(".creator.post").val() !== "" && $(".show_status.post").val() !== "" && $(".marathon_status.post").val() !== "") {
		dataToUse.name = $(".name.post").val();
		dataToUse.creator = $(".creator.post").val();
		dataToUse.show_status = $(".show_status.post").val();
		dataToUse.marathon_status = $(".marathon_status.post").val();
	  	$.ajax({
	  		method: methodToUse,
	  		url: url,
	  		data: dataToUse,
		    success: function (data) {
		    	updateShowData(data);
		    	$(".name.post").val("");
		    	$(".creator.post").val("");
		    	$(".show_status.post").val("");
		    	$(".marathon_status.post").val("");
		    },
		    error: function (error) {
		    	console.log(error);
		    }
	  	});
  	} else {
  		alert("Please ensure all fields are populated.");
  	}
  });
});

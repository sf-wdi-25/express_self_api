console.log("Sanity Check: Braaaaaaaaaaaaiiiiiiiins!");

$(document).ready(function(){


	// Grabs (GET) profile data via profile API, and displays it in left-hand assigned div space on page load
	$.ajax ({
		method: "GET",
		url: "/api/profile",
		success: function (data) {
			console.log(data);
			$('#profile').append("<p>Name: " + data.profileInfo[0].name + "</p><br\>" +
				"<p>github " + data.profileInfo[0].githubLink + "</p><br\>" +
				"<p>Photo: " + data.profileInfo[0].githubProfilePic + "</p><br\>" +
				"<p>City: " + data.profileInfo[0].city + "</p><br\>" +
				"<p>Mom: <a href = " + data.profileInfo[0].family[0].photo + ">" + data.profileInfo[0].family[0].dname + "</a>" + "</p><br\>" + 
				"<p>Dad: <a href = " + data.profileInfo[0].family[1].photo + ">" + data.profileInfo[0].family[1].mname + "</a>");
		},
		error: function (data) {
			console.log("stop the presses");
		}
	});




	// Function describes how to append data from goodMuzac object (associative array) into muzac div
	function muzac (data) {
		data.goodMuzac.forEach(function (ele) {
			$('#muzac').append("<p>" + ele.artist + " - " + ele.track + ": <a href = '" + ele.url + "' target='_blank'>" +
				ele.url + "</a></p><br\>");
		});
	}

	// Uses previously-described muzac function to display music data within homepage's right-hand assigned div space on page load
	$.ajax({
		method: "GET",
		url: "/api/muzac",
		success: function goodMuzac (data) {
			muzac(data);
		},
		error: function (error) {
			console.log("404 - w3bsit3 h@s ph@il3d");
		}
	});




	// Describes functionality for handling clicking the "TV Shows!" link in navbar
	$('#tvlink').click(function () {
		
		// Hides the by-default-visible profile and music div spaces
		$('#profile').hide();
		$('#muzac').hide();
		
		// Makes the previously-hidden tv div space appear (see styles.css - #tv)
		$('#tv').show();

		// Describes how to place elements from tvShows array into assigned, now-visible tv div space
		$.ajax ({
			method: "GET",
			url: "/api/tv",
			success: function (data) {
				console.log(data);
				data.tvShows.forEach(function (ele) {
					$('#tv').append("<p>" + ele + "</p><br\>");
				});
			}
		});
	});

});
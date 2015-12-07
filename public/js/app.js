console.log("Sanity Check: Braaaaaaaaaaaaiiiiiiiins!");

$(document).ready(function(){
	$.ajax ({
		method: "GET",
		url: "/api/profile",
		success: function profileInfo (data) {
			console.log(data);
			$('#profile').append("<p>Name: " + data.profileInfo[0].name + "</p><br\>" +
				"<p>github " + data.profileInfo[0].githubLink + "</p><br\>" +
				"<p>Photo: " + data.profileInfo[0].githubProfilePic + "</p><br\>" +
				"<p>City: " + data.profileInfo[0].city + "</p><br\>" +
				"<p>Family: <a href = " + data.profileInfo[0].family[0].photo + ">" + data.profileInfo[0].family[0].dname + "</a>" + "</p><br\>" + 
				"<p>Family: <a href = " + data.profileInfo[0].family[1].photo + ">" + data.profileInfo[0].family[1].mname + "</a>");
		},
		error: function profileData (data) {
			console.log("stop the presses");
		}
	});

function muzac (data) {
	data.goodMuzac.forEach(function (ele) {
		$('#muzac').append("<p>" + ele.artist + " - " + ele.track + ": <a href = '" + ele.youtube + "' target='_blank'>" +
			ele.youtube + "</a></p><br\>");
	});
}

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

// This section will contain the AJAX code to CRUD stuff, specifically showing the list of TV shows that I watch (haven't decided yet whether or
// not I'd alpha-sort 'em, or leave them disordered as they are in server.js). CRUD would allow for me to delete shows that I've finished watching,
// and to append new shows as well. Clicking the TV link in the navbar would ideally hide the profile and muzac DIVs and make the tv DIV appear,
// populating with a CRUD form, as well as listing the shows.


});
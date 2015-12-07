console.log("Sanity Check: Braaaaaaaaaaaaiiiiiiiins!");

$(document).ready(function(){
	$.ajax ({
		method: "GET",
		url: "/api/profile",
		success: function profileInfo (data) {
			console.log(data);
			$('#col1').append("<p>Name: " + data.profileInfo[0].name + "</p><br\>" +
				"<p>github: " + data.profileInfo[0].githubLink + "</p><br\>" +
				"<p>github Photo: " + data.profileInfo[0].githubProfilePic);
		},
		error: function profileData (data) {
			console.log("stop the presses");
		}
	});
});

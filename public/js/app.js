console.log("Sanity Check: Braaaaaaaaaaaaiiiiiiiins!");

$(document).ready(function(){
	$.ajax ({
		method: "GET",
		url: "/api/profile",
		success: function profileInfo (data) {
			console.log(data);
			$('#col1').append("<p>Name: " + data.profileInfo[0].name + "</p><br\>" +
				"<p>github " + data.profileInfo[0].githubLink + "</p><br\>" +
				"<p>Photo: " + data.profileInfo[0].githubProfilePic + "</p><br\>" +
				"<p>City: " + data.profileInfo[0].city + "</p><br\>" +
				"<p>Family: <a href = " + data.profileInfo[0].family[0].photo + ">" + data.profileInfo[0].family[0].dname + "</a>" + "</p><br\>" + 
				"<p>Family: <a href = " + data.profileInfo[0].family[1].photo + ">" + data.profileInfo[0].family[1].mname + "</a>" + "</p><br\>");
		},
		error: function profileData (data) {
			console.log("stop the presses");
		}
	});
});

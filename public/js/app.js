console.log("Sanity Check: Braaaaaaaaaaaaiiiiiiiins!");

$(document).ready(function(){
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

function muzac (data) {
	data.goodMuzac.forEach(function (ele) {
		$('#muzac').append("<p>" + ele.artist + " - " + ele.track + ": <a href = '" + ele.url + "' target='_blank'>" +
			ele.url + "</a></p><br\>");
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

$('#tvlink').click(function () {
	$('#profile').hide();
	$('#muzac').hide();
	$('#tv').show();
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
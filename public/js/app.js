console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	var $createMovie = $('#create-movie');

	$.ajax({
		method: 'GET',
		url: '/api/profile',
		success: function(data) {
			var profileImage = data.github_profile_image;
			var name = data.name;
			var githubLink = data.github_link;
			var currentCity = data.current_city;
			var familyMembers = data.family_members;
			var daysOld = data.days_old;
			var movies = data.movies;
			var htmlImageString = "<div class ='row'><div class='col-md-8 col-md-offset-2'><img src=" + profileImage + "></div></div>";
			var htmlNameString = "<div class ='row'><div class='col-md-8 col-md-offset-2'><p><strong>Name:</strong> " + name + "</p></div></div>";
			var htmlGithubLinkString = "<div class ='row'><div class='col-md-8 col-md-offset-2'><a href='" + githubLink + "'>My Github link</a></div></div>";
			var htmlCityString = "<div class ='row'><div class='col-md-8 col-md-offset-2'><p><strong>Current city:</strong> " + currentCity + "</p></div></div>";
			var htmlDaysOldString = "<div class ='row'><div class='col-md-8 col-md-offset-2'><p><strong>Days old:</strong> " + daysOld + "</p></div></div>";
			$("#h1AndProfile").append(htmlImageString);
			$("#h1AndProfile").append(htmlNameString);
			$("#h1AndProfile").append(htmlGithubLinkString);
			$("#h1AndProfile").append(htmlCityString);
			$("#h1AndProfile").append(htmlDaysOldString);
			familyMembers.forEach(function(element) {
				$("#h1AndProfile").append("<div class ='row'><div class='col-md-8 col-md-offset-2'><p><strong>My " + element.relationship + "'s name:</strong> " + element.name + "</p></div></div>");
			});
			$("#h1AndProfile").append("<div class ='row'><div class='col-md-8 col-md-offset-2'><p><strong>My favorite Disney movies!</p></div></div>");
		}
	});

	$.ajax({
		method: 'GET',
		url: '/api/movies',
		success: function(data) {
			var movies = data;
			movies.forEach(function(element) {
				$("#h1AndProfile").append("<div class ='row'><div class='col-md-8 col-md-offset-2'><p><strong>Title:</strong> " + element.title + "</p></div></div>");
			});
		}
	});

	$createMovie.on("submit", function (event) {
		event.preventDefault();
		var newMovie = $(this).serialize();

		$.post('/api/movies', newMovie, function (data) {
			console.log(data);
		});

		$createMovie[0].reset();
		$createMovie.find('input').first().focus();
	});
});
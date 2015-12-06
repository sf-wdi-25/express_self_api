console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	var $createMovie = $('#create-movie');

	$.ajax({
		method: 'GET',
		url: '/api/profile',
		success: function(data) {
			var profileImage = data.github_profile_image;
			var htmlString = "<div class ='row'><div class='col-md-8 col-md-offset-2'><img src=" + profileImage + "></div></div><br>";
			$("#image").append(htmlString);
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
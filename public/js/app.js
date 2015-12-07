console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code
//array for anime storage
var myAnimes = [];

var $animeList = $('#anime-list');

var $createAnime = $('#create-anime');

 
var render = function() {

	$animeList.empty();
	$.ajax({
		type: 'GET',
		url: 'https://murmuring-waters-9411.herokuapp.com/api/animes',
		success: function(favAnimes){
			favAnimes.favAnimes.forEach(function (element){
				$animeList.append("<ul class='list-group'>" + "<li class='list-group-item' data-id='" + element._id + "'>" + "Anime Title: " + element.title + "<br>"
					+ "Genre: " + element.genre + "<br>" + "Finished: " + element.finished + "</li>" + "</ul>");
			});
		}
	});
	$('.dlt').each(function() {
		$(this).on('click', function (event){
			console.log('hello');
		})
	});
}


$.ajax({
	type: 'GET',
	url: 'https://murmuring-waters-9411.herokuapp.com/api/profile',
	success: function(pInfo){
		console.log(pInfo);
		console.log(Object.keys(pInfo).length);

		// pInfo.forEach(function dispInfo(element){
			var myName = pInfo.name;
			var github = pInfo.github;
			var githubLink = pInfo.github_profile_picture;
			var myCity = pInfo.current_city;
			var sis1 = pInfo.familyMembers[0].fname;
			var sis1R = pInfo.familyMembers[0].relationship;
			var sis2 = pInfo.familyMembers[1].fname;
			var sis2R = pInfo.familyMembers[1].relationship;
			var mom = pInfo.familyMembers[2].fname;
			var momR = pInfo.familyMembers[2].relationship;
			$('#myInfo').append(
				"<div>" +  "<h2>" +"Hi, I'm " + myName + "</h2>" + "<br>" +  "<p>" + "I LOVE Software. " + "<br>"+ " I live in " + myCity + " California " +  "</p>"   
				+ "<br>" + "<a href='" + github + "'>" + '<img src="' + githubLink + '"> ' 
				+"</a>" + "<br>" + "<br>" + 
				"<p class ='fam'>" + "I have a " + sis1R 
				+ " named " + sis1 + " and a " + sis2R + " named " + sis2 + "."
				+ "<br>" + "My " + momR + "'s name is " + mom +"."+ "<br>" + "<br>" + " Below is a list of my favorite animes and you can create new favorites if you read my READ.MD for your own anime list."+ "</p>" + "</div>");
		// });
	}

});

$.ajax({
	type: 'GET',
	url: 'https://murmuring-waters-9411.herokuapp.com/api/animes',
	success: function(favAnimes){

		favAnimes.favAnimes.forEach(function (element){
			console.log(element);
			$animeList.append("<ul class='list-group'>" + "<li class='list-group-item'>" + "Anime Title: " + element.title + "<br>"
				+ "Genre: " + element.genre + "<br>" + "Finished: " + element.finished +"<br>"+  "<input class='btn btn-default dlt' data-id='" + element._id + "' type='submit' value='Delete'>" + "</li>" + "</ul>");
		});
		console.log([favAnimes.favAnimes.title]);
		$('.dlt').each(function() {
			$(this).on('click', function (event){
				var current_id = $(this).data('id');
				console.log(current_id);
				$.ajax({
					type: 'DELETE',
					url: 'https://murmuring-waters-9411.herokuapp.com/api/animes/' + current_id,
					success: function(favAnimes){
						render();
					}
				})
			})
		});
	}
});

$createAnime.on('click', function (event){
	event.preventDefault();
	//allows me to save my anime title
	// var newAnime = $(this).serialize();
	var newAnime = $('#name').val();

	$.post('https://murmuring-waters-9411.herokuapp.com/api/animes', {"animeName": newAnime}, function (favAnimes){
		myAnimes.push({favAnimes: favAnimes.title});

		render();


		});

});


});


/*

for (key in pInfo) {
	if(obj.hasOwnProperty(key))
	console.log(obj[key])
	(#myanimes).on('click', '.delete', function(){
	
	$(this).data('id')
	})
}

*/

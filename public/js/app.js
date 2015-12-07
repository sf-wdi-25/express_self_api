console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code
//array for anime storage
var myAnimes = [];

var $animeList = $('#anime-list');

var $createAnime = $('#create-anime');

 
var render = function() {

	$animeList.empty();

	var animeToHTML = {favAnimes: myAnimes};

	$animeList.append(animeToHTML);
}


$.ajax({
	type: 'GET',
	url: 'https://murmuring-waters-9411.herokuapp.com/api/profile',
	success: function(pInfo){
		console.log(pInfo);
		console.log(Object.keys(pInfo).length)

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
				"<div>" +  "<h2>" +"Hi, I'm " + myName + "</h2>" 
				+ "<br>" + "<a href=" + github + ">" + '<img src="' + githubLink + '"> ' 
				+"</a>" + "<br>" + "<p>" + "City: " + myCity + "</p>"
				+ "</p>" + "<br>" + "<p class ='fam'>"+ "Family" + "<br>" + sis1 
				+ " " + sis1R + "<br>" + sis2 + " " + sis2R 
				+ "<br>" + mom + " " + momR + "</p>" + "</div>");
		// });
	}

});

$.ajax({
	type: 'GET',
	url: 'https://murmuring-waters-9411.herokuapp.com/api/animes',
	success: function(favAnimes){

		favAnimes.favAnimes.forEach(function (element){
			console.log(element);
			$animeList.append("<ul class='list-group'>" + "<li class='list-group-item' data-id='" + element._id + "'>" + "Anime Title: " + element.title + "<br>"
				+ "Genre: " + element.genre + "<br>" + "Finished: " + element.finished + "</li>" + "</ul>");
		});
		console.log([favAnimes.favAnimes.title]);
	}
});

$createAnime.on('submit', function (event){
	event.preventDefault();
	//allows me to save my anime title
	var newAnime = $(this).serialize();

	$.post('https://murmuring-waters-9411.herokuapp.com/api/animes', newAnime, function (favAnimes){
		myAnimes.push(favAnimes.title);
		console.log(favAnimes.title)

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

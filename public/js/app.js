console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code
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
		console.log([favAnimes]);
	}
})

});

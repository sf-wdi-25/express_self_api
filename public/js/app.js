console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code
$.ajax({
	type: 'GET',
	url: 'https://murmuring-waters-9411.herokuapp.com/api/profile',
	success: function(pInfo){
		pInfo.forEach(function dispInfo(element){
			var myName = element.name;
			var github = element.github;
			var githubLink = element.github_profile_picture;
			var myCity = element.current_city;
			var sis1 = element.familyMemebers[0].fname;
			var sis1R = element.familyMemebers[0].relationship;
			var sis2 = element.familyMemebers[1].fname;
			var sis2R = element.familyMemebers[1].relationship;
			var mom = element.familyMemebers[2].fname;
			var momR = element.familyMemebers[2].relationship;
			$('#myInfo').append(
				"<div>" +  "<h1>" +"Hi, I'm " + myName +
				+ "<br>" + "<a href=" + github + "</a>" + '<img src="' + github_profile_picture + '"> ' +
				+"</a>" + "<br>" + "<p>" + "City: " + myCity + "</p>"
				+ "</p>" + "<br>" + "<p>"+ "Family" + "<br>" + sis1 
				+ " " + sis1R + "<br>" + sis2 + " " + sis2R +
				+ "<br>" + mom + " " + momR + "</p>" + "</div>");
		});
	}
});

});

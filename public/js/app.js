console.log("Sanity Check: JS is working!");

$(document).ready(function(){

var mySkills = [];

var skillsList = $('#skills-list');




// your code
// im am going to have to make a bunch of ajax code here
// $.ajax({
// 	method: 'GET',
// 	url: '/api',
// 	success: function (data) {
// 		console.log(data);
// 		$('#api_index').append("<p>" + data.name + "</p>" );

// 	}
// });

$.ajax({
	method: 'GET',
	url: '/api/profile',
	success: function (data) {
			console.log(data);
		$('#profile').append("<p>" + data.name + "</p>" );
		$('#profile').append("<p>" + "Github Link: " + data.github_link + "</p>" );
		$('#profile').append("<p>" + "Current City: " + data.current_city + "</p>" );
		$('#profile').append("<p>" + "Father: " + data.family_members[0].Father + "</p>" );
		$('#profile').append("<p>" + "Mother: " + data.family_members[0].Mother + "</p>" );
		$('#profile').append("<p>" + "Oldest brother: " + data.family_members[0].Oldest_brother + "</p>" );
		$('#profile').append("<p>" + "Brother: " + data.family_members[0].brother + "</p>" );
		$('#profile').append("<p>" + "Sister: " + data.family_members[0].sister + "</p>" );
	}
});
$.ajax({
	method: 'GET',
	url: '/api/travel',
	success: function (data) {
		console.log(data);
		$('#travel').append("<p>" + "Destination: " + data.travel[0].destination + "<br\>" +
		 " Reasons I want to visist: " + data.travel[0].Reasons + "</p>" );
		$('#travel').append("<p>" + "Destination: " + data.travel[0].destination + "<br\>" +
		 " Reasons I want to visist: " + data.travel[0].Reasons + "</p>" );
		 $('#travel').append("<p>" + "Destination: " + data.travel[0].destination + "<br\>" +
		 " Reasons I want to visist: " + data.travel[0].Reasons + "</p>" );	
		 $('#travel').append("<p>" + "Destination: " + data.travel[0].destination + "<br\>" +
		 " Reasons I want to visist: " + data.travel[0].Reasons + "</p>" );
	}	
});
$.ajax({
	method: 'GET',
	url: '/api/skills',
	success: function (data) {
		console.log(data);
		$('#skills').append("<p>" + "Skills: " + data.skills[0].skills + "</p>" );
		$('#skills').append("<p>" + "Skills: " + data.skills[0].skills + "</p>" );
		$('#skills').append("<p>" + "Skills: " + data.skills[0].skills + "</p>" );
		$('#skills').append("<p>" + "Skills: " + data.skills[0].skills + "</p>" );
	}	
});




});

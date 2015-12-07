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
		data.travel.forEach(function (i){
			var travel = i.destination;
			var reason = i.reason;
		
		$('#travel').append("<p>" + "Destination: " + travel + "<br\>" +
		 " Reasons I want to visit: " + reason + "</p>" );
		});
			}	
});
$.ajax({
	method: 'GET',
	url: '/api/skills',
	success: function (data) {
	data.skills.forEach(function (i){
		var skills = i.skills;
		console.log(data);
		$('#skills').append("<p>" + "Skills: " + skills + "</p>" );
	});
		
		}	
});

// $.ajax({
//   method: "DELETE",
//   url: '/api/skills',
//   success: function (data) {
//     console.log("your skill was deleted.");
//   },
//   error: function () {
//     console.error("Failed to delete.");
//   }
// });

// $.ajax({
//   method: "PUT",
//   url: '/api/skills',
//   data: {
//     skills:'',
//   },
//   success: function (data) {
//     console.log("your skill was updated.");
//   },
//   error: function () {
//     console.error("Failed to update your skill.");
//   }
// });

// $.ajax({
//   method: "POST",
//   url: '/api/skills',
//   data: {
//     skills:'',
//   },
//   success: function (data) {
//     console.log("your skill was created");
//     console.log("your book has an id of", book._id);
//     // render book to page
//   },
//   error: function () {
//     console.error("Skill did not get created.");
//   }
// });




});

$(document).ready(function(){

	console.log("Sanity Check: My JS is working!");



	$.ajax({
  	method: "GET",
	url: "https://stormy-temple-5156.herokuapp.com/api/profile",
  	success: function (data) {
   console.log(data.profile);
	// function render(info) {
    	// info.forEach(function (info){
       	// $("div#target").append("<p>" + message.message + "</p>");
//     	});
//   	}
//   	//render(response.data);
	}
 });
 });

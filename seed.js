var db = require("./models");


// db.Profile.remove({}, function (err){
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log("You cleared the profile entries");
// 	}
// });

// db.Place.remove({}, function (err){
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log("You cleared place entries");
// 	}
// });



/*
var place = {location: "Zion National Park", why: "stunning views, swimming in the canyon, pretty colors"};

Places.create(place, function(err, place) {
	if(err) {console.log(err);
	}
	console.log(place);
});
*/

// db.Profile.create(
// {
// 	name: "Rich Rizzo",
// 	city: "Oakland CA",
// 	image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Giraffe_Mikumi_National_Park.jpg",
// }, function (err, profile) {
// 		if(err) {
// 			return console.log("Error");
// 		}

// 		//console.log(profile);
// 		db.Place.create(
// 		{
// 			location: "Big Island of Hawaii", 
// 			why: "Volcanoes National Park, tropical wildlife, beaches, exploration"
// 		}, function (err, place) {
// 			if(err) {
// 				console.log("Error");
// 			}
// 			profile.placesToVisit.push(place);
// 			profile.save(function(err,success){
// 				if(err){
// 					console.log(err);
// 				}
// 				console.log(success);
// 			});
			
// 		});
	
// 	});

db.Profile.find({}, function (err, profile){
	if(err) {
		console.log(err);
	} else {
		console.log(profile)
	}
});

// db.Place.find({location: "Big Island of Hawaii"}, function (err, place) {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(place)
// 	}
// });

// db.Place.remove({location: "Big Island of Hawaii", _id: "56665604b8bc74fc39d0b0f9"}, function (err, place) {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(place);
// 	}
// });

// var me = db.Profile.find({name: "Rich Rizzo"}, function (error, success) {
// 	if(error) {
// 		console.log(error);
// 	} else {
// 		console.log(success);
// 	}
// });



/*db.Profile.create({name: "Rich Rizzo"}, function (err, success) {
	if(err){return console.log("ERR");}
		profile.placesToVisit.push({location: "Taipei", why: "seems like a cool city, good food, night markets, and hot springs"}, {location: "Zion National Park", why: "stunning views, swimming in the canyon, pretty colors"});

 			profile.save(function (err, success) {
	if(err){return console.log("ERR");}
			console.log(success);
			console.log(profile);
  });
 });*/


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my-api-db');

var Profile = require('./models/profile');
var Movie = require('./models/movie');


var birthday = new Date('December 29, 1988 00:00:00');
var daysOld = Math.round((Date.now() - birthday.getTime()) / (1000 * 60 * 60 * 24));
var data = {name: "Kayvon Ranjbar",
  github_link: "https://github.com/Kranjbar",
  github_profile_image: "https://avatars2.githubusercontent.com/u/14255298?v=3&s=460",
  current_city: 'San Francisco',
  family_members: [{name: 'Anne Sophie Ranjbar', title: 'wife'},
  	{name: 'Hossein Ranjbar', relationship: 'father'},
    {name: 'Maria Ranjbar', relationship: 'mother'},
    {name: 'Noshene Ranjbar', relationship: 'sister'}
    ],
  days_old: daysOld};

Profile.remove({}, function(err){
	if(err) {
		console.log(err);
		process.exit();
	}

	Profile.create(data, function(err, profile){
		if(err) {
			console.log(err);
			process.exit();
		} else {
			console.log("Created:", profile);
			// process.exit();
		}
	});
});

var movies = [
  {title: "The Lion King", director: "Roger Allers"},
  {title: "Pocahontas", director: "Mike Gabriel"},
  {title: "Aladdin", director: "Ron Clements"}
  ];

Movie.remove({}, function(err){
	if(err) {
		console.log(err);
		process.exit();
	}

		Movie.create(movies[0], movies[1], movies[2], function(err, movie1, movie2, movie3) {
			if(err) {
				console.log(err);
				process.exit();
			} else {
				console.log(movie1, movie2, movie3);
				process.exit();
			}
		});
});

// Profile.find(function (err, allProfiles) {
// 	console.log(allProfiles);
// });


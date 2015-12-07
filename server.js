// require express and other modules
var express = require('express'),
    app = express();
    app.use(express.static('public'));
    
	// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/

// your hardcoded data here

var profileInfo = [
  {
    name: "Nathan",
    githubLink: "<a href = 'https://github.com/anonym0us3' target='_blank'><strong>Link</strong></a>",
    githubProfilePic: "<img src= 'https://avatars1.githubusercontent.com/u/15662297?v=3&s=460' width='50' height='auto'>",
    city: "San Francisco",
    family: [
      {
        dname: "Papa Bear",
        relationship: "Father",
        photo: "'http://i.imgur.com/a3oOA6l.jpg' target='_blank'"
      },
      {
        mname: "Mama Bear",
        relationship: "Mother",
        photo: "'http://i.imgur.com/zSJmRLa.jpg' target='_blank'"
      }
    ]
  }
];

var goodMuzac = [
  {
    artist: "Tropicana",
    track: "Things to Come",
    youtube: "https://www.youtube.com/watch?v=TH0R2YRnpe0"
  },
  { artist: "Hanz Zimmer",
    track: "He\'s a Pirate (Tiesto Remix)",
    youtube: "https://www.youtube.com/watch?v=_R1jRAe-asU"
  },
  { artist: "Aram Khachaturian",
    track: "Masquerade: Waltz",
    youtube: "https://www.youtube.com/watch?v=YCoLUMURunQ"
  },
  { artist: "The Beatles",
    track: "For No One",
    youtube: "https://www.youtube.com/watch?v=4t-qlgF_vwY"
  },
  { artist: "Cosmic Gate",
    track: "Tomorrow - 12 Inch version",
    youtube: "https://www.youtube.com/watch?v=wUG0vPILIWA"
  },
  { artist: "Bones Domingo",
    track: "Violate",
    youtube: "https://www.youtube.com/watch?v=_Ierk_i6Sd4"
  },
  { artist: "Yngwie Malmsteen",
    track: "Asylum I: Asylum",
    youtube: "https://www.youtube.com/watch?v=h_iTHKVEbAs"
  }
];

var tvShows = ["Suits", "The Walking Dead", "South Park", "Family Guy", "Arrow", "The Flash", "Legends", "Elementary",
              "Heroes Reborn", "Top Chef", "Quantico", "Scream Queens", "The Player", "Minority Report"];

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api/profile', function profile(req, res) {
  res.json({profileInfo: profileInfo});
});


app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to mah personal api!",
    documentation_url: "https://github.com/anonym0us3/express_self_api/blob/master/ReamDe.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "https://mysterious-earth-5591.herokuapp.com",
    endpoints: [
      {
        method: "GET",
        path: "/api",
        description: "Describes available endpoints"}
    ]
  });
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

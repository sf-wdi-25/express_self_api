// require express and other modules
var express = require('express'),
    app = express();

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// serve static files from vendor folder
app.use(express.static(__dirname + '/vendor'));

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// your hardcoded data here

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

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to my personal api!",
    documentation_url: "https://github.com/jroers/express_self_api/blob/master/README.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "http://damp-retreat-5020.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/shows", description: "Lists out recent marathon'd TV shows"}
    ]
  });
});

app.get('/api/profile', function api_profile (req, res) {
  res.json({
    name: "Joe Roers",
    github_link: "https://github.com/jroers/",
    github_profile_image: "https://avatars0.githubusercontent.com/u/15789101?v=3&s=460",
    current_city: "Berkeley, CA",
    family_members: [{ name: "Susan",
                      relation: "Mother"
                    }, { name: "Jeff",
                      relation: "Father"
                    }, { name: "Andrew",
                      relation: "Brother"
                    }, { name: "Tom",
                      relation: "Brother"
                    }, { name: "Danny",
                      relation: "Brother"
                    }, { name: "Ben",
                      relation: "Brother"
                    }]
  });
});

app.get('/api/shows', function api_shows (req, res) {
 res.json([
    {
      _id: 1,
      name: 'Sense8',
      creator: 'J. Michael Straczynski',
      series_status: 'season break',
      marathon_status: 'up to date'
    },
    { 
      _id: 2,
      name: 'Criminal Minds',
      creator: 'Jeff Davis',
      series_status: 'ongoing',
      marathon_status: 'behind'
    },
    {
      _id: 3,
      name: "30 Rock",
      creator: "Tina Fey",
      series_status: "ended",
      marathon_status: "up to date"
    },
    {
      _id: 4,
      name: "How to Get Away With Murder",
      creator: "Shonda Rhimes",
      series_status: "season break",
      marathon_status: "up to date"
    }
  ]);
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

// require express and other modules
var express = require('express'),
    app = express();

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/

// your hardcoded data here

var personalProfile = {
  name: "Noah Wimmer",
  github_link : "https://github.com/nwimmer123",
  github_profile_image: "https://avatars3.githubusercontent.com/u/14186697?v=3&s=460",
  current_city: "Berkeley",
  family_members:[
    {name: "Rachel", relationship: "wife"},
    {name: "Eloise", relationship: "daughter"},
    {name: "Felix", relationship: "son"}
  ]
};

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

 // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function homepage (req, res) {  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to my personal api!",
    documentation_url: "https://github.com/nwimmer123/test-driven-todo-api.git", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "sheltered-dusk-2675.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/api/personalProfile", description: "Provides personal data about me"}
    ]
  })
});

app.get('/api/personalProfile', function personalProfile_index (req, res){
  res.json({personalProfile: personalProfile});
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

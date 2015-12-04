// require express and other modules
var express = require('express'),
    app = express();

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
var profile = [
  {name: "Kayvon Ranjbar"},
  {github_link: "https://github.com/Kranjbar"},
  {github_profile_image: "https://avatars2.githubusercontent.com/u/14255298?v=3&s=460"},
  {current_city: 'San Francisco'},
  {family_members: [{name: 'Hossein Ranjbar', relationship: 'father'},
    {name: 'Maria Ranjbar', relationship: 'mother'},
    {name: 'Noshene Ranjbar', relationship: 'sister'}]}
];

var movies = [
  {_id: 1, title: "The Lion King", director: "Roger Allers"},
  {_id: 2, title: "Pocahontas", director: "Mike Gabriel"},
  {_id: 3, title: "Aladdin", director: "Ron Clements"}
  ];

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
    documentation_url: "https://github.com/Kranjbar/express_self_api/blob/master/README.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "http://secret-beyond-7591.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});

app.get('/api/profile', function profile_index (req, res) {
  res.json(profile);
});

app.get('/api/movies', function profile_index (req, res) {
  res.json(movies);
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

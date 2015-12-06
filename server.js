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
var profile = {name: "Kayvon Ranjbar",
  github_link: "https://github.com/Kranjbar",
  github_profile_image: "https://avatars2.githubusercontent.com/u/14255298?v=3&s=460",
  current_city: 'San Francisco',
  family_members: [{name: 'Hossein Ranjbar', relationship: 'father'},
    {name: 'Maria Ranjbar', relationship: 'mother'},
    {name: 'Noshene Ranjbar', relationship: 'sister'}
    ]};

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

app.get('/README.md', function documentation (req, res){
  res.sendFile(__dirname + '/README.md');
});

/*
 * JSON API Endpoints
 */

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to my personal api!",
    documentation_url: "http://secret-beyond-7591.herokuapp.com/README.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "http://secret-beyond-7591.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/", description: "Opens homepage"},
      {method: "GET", path: "/README.md", description: "Documentation url"},
      {method: "GET", path: "/api/profile", description: "Index of profile"},
      {method: "GET", path: "/api/movies", description: "Index of movies"},
      {method: "GET", path: "/api/movies/:id", description: "Shows selected movie"},
      {method: "POST", path: "/api/movies", description: "Creates movie"},
      {method: "PUT", path: "/api/movies/:id", description: "Updates selected movie"},
      {method: "DELETE", path: "/api/movies/:id", description: "Deletes selected movie"}
    ]
  });
});

app.get('/api/profile', function profile_index (req, res) {
  res.json(profile);
});

app.get('/api/movies', function movies_index (req, res) {
  res.json(movies);
});

app.get('/api/movies/:id', function movies_show (req, res) {
  var movieId = parseInt(req.params.id);
  var foundMovie = movies.filter(function(movie) {
    return movie._id == movieId;
  })[0];
  res.json(foundMovie);
});

app.post('/api/movies', function movies_create (req, res) {
  var newMovie = req.body;
  if (movies.length > 0) {
    newMovie._id = movies[movies.length - 1]._id + 1;
  } else {
    newMovie._id = 1;
  }
  movies.push(newMovie);
  res.json(newMovie);
});

app.put('/api/movies/:id', function movies_update (req, res) {
  var movieId = parseInt(req.params.id);
  var movieToUpdate = movies.filter(function (movie) {
    return movie._id == movieId;
  })[0];
  movieToUpdate.title = req.body.title;
  movieToUpdate.director = req.body.director;
  res.json(movieToUpdate);
});

app.delete('/api/movies/:id', function movies_delete (req, res) {
  var movieId = parseInt(req.params.id);
  var movieToDelete = movies.filter(function (movie) {
    return movie._id == movieId;
  })[0];
  movies.splice(movies.indexOf(movieToDelete), 1);
  res.json(movieToDelete);
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

// require express and other modules
var express = require('express'),
    app = express();

var db = require("./models");


var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

/************
 * DATABASE *
 ************/

 //put data here
 var info = {   name: 'Kehontas Rowe',
      github_link: 'http://github.com/kehontas',
      github_profile_image: 'https://avatars2.githubusercontent.com/u/2671587?v=3&u=45586c8ceefc66e4fef4f31490a0ed248e10d7d4&s=140',
      current_city: 'San Francisco',
      family_members: [{
        name: 'Charice Malone', relationship: 'Mother'}, {name: 'Doug Wilson', relationship: 'Father'}]
    };

var movies = { data: [
    {title: 'The Matrix'},
    {title: 'The Matrix Reloaded'},
    {title: 'The Matrix Revolutions'},
    {title: 'Napolean Dynamite'}
  ]};
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
    documentation_url: "https://github.com/kehontas/express_self_api.git", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "http://stormy-temple-5156.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});

app.get('/api/profile', function profile (req, res){
        res.send(info);
});

 app.get('/api/movies', function (req, res) {
  // console.log(movies);
      res.send(movies);
  });

//  app.post('/users', function(req, res) {
//   var user = req.body.user;
//   User.create(user, function (err, user) {
//     res.status(200).json(user);
//   });
// });

 app.post('/api/movies', function (req, res) {
  
  var newMovie = {};
  newMovie.title = req.body.movie;

  console.log(req.body);
  db.Movie.create({title: newMovie.title}, function (err, movieTitle){
      console.log(err);
      console.log(movieTitle);
      res.send(movieTitle);
  });
});


 app.delete('/api/movies', function destroy(req, res) {
  var newMovie = {};
  newMovie.title = req.body.movie;

  console.log(req.body);
  db.Movie.remove({title: newMovie.title}, function (err, movieTitle){
      console.log(err);
      console.log(movieTitle);
      res.send(movieTitle);
    });
 
 });
/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

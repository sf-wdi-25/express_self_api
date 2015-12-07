// require express and other modules
var express = require('express'),
    app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true})); // parse POSTed data



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

// My Favorite Movies
var favoriteMovies = [
    { _id: 1,
      title: "Citizen Kane",
      genre: "Drama",
      director: "Orson Welles",
      year: "1941"
    },
    { _id: 2,
      title: "Up",
      genre: "Animation",
      director: "Peter Docter",
      year: "2009"      
    },
    { _id: 3,
      title: "Back to the Future",
      genre: "Adventure",
      director: "Robert Zemeckis",
      year: "1985"      
    },
    { _id: 4,
      title: "Indiana Jones: Raiders of the Lost Ark",
      genre: "Action",
      director: "Steven Spielberg",
      year: "1981"      
    },
    { _id: 5,
      title: "Amélie",
      genre: "Drama",
      director: "Jean-Pierre Jeunet",
      year: "2001"      
    }
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
    documentation_url: "https://github.com/trebloc/express_self_api/blob/master/README.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "http://ancient-peak-3033.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  })
});

app.get('/api/profile', function api_profile (req, res){
  res.json({
      name: "Colbert Tse",
      url: 'localhost:3000',
      github_link: "https://github.com/trebloc",
      github_profile_image: "https://avatars1.githubusercontent.com/u/6238249?v=3&u=d66fb4b7d60254f849f08c8dee354f0a5b74cc91&s=140",
      current_city: "San Francisco",
      family_members: [ { name: 'Taffany Hwang', relationship: 'Fiańcee' }, { name: 'Ankey Tse', relationship: 'Mother' }, { name: 'Nicole Tse', relationship: 'Sister' } ]
      })
});

//Sending the Message to the Web Page.
  app.get('/', function (req, res) {
    //console.log(req);
    res.sendFile('views/index.html' , { root : __dirname});
  });

  //My Profile API
  app.get('/api/profile', function (req, res) {
    res.json();
  });  

  //My Favorite Movie API
  app.get('/api/favoriteMovies', function (req, res) {
    res.json(favoriteMovies);  
  });

  //POST of Favorite Movies for creating a new entry.
  app.post('/api/favoriteMovies', function create(req, res) {
    var newID = req.body;

    if (favoriteMovies.length > 0) {
      newID._id = favoriteMovies[favoriteMovies.length - 1]._id + 1;
    } else {
      newID._id = 1;
    }

    favoriteMovies.push(newID);

    res.json(favoriteMovies);
  });

  //POST of Favorite Movies for an update of an existing movie.
  app.put('/api/favoriteMovies/:id', function update(req, res) {
  var editID = parseInt(req.params.id);

  var editMovie = favoriteMovies.filter(function (edit) {
    return edit._id == editID;
  })[0];

  if(req.body.year) {
    editMovie.year = req.body.year;  
  }

  if(req.body.title) {
    editMovie.title = req.body.title;  
  }
  
  if(req.body.director) {
    editMovie.director = req.body.director;  
  }
  
  if(req.body.genre) {
    editMovie.genre = req.body.genre;    
  }  

  res.json(favoriteMovies);
});

//Delete of a Movie.
  app.delete('/api/favoriteMovies/:id', 
    function destroy(req, res) {
      var getID = parseInt(req.params.id);

      var deleteID = favoriteMovies.filter(function (favoriteMovie) {
          return favoriteMovie._id == getID;
      })[0];

      favoriteMovies.splice(favoriteMovies.indexOf(deleteID), 1);
      res.json(favoriteMovies);
  });

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

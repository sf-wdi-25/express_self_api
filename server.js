// require express and other modules
var express = require('express'),
    app = express(); 
    bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

 // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var my_profile = [
  {
    name: "Doug",
    github_link: "https://github.com/bachtsui",
    github_profile_image:"http://vignette3.wikia.nocookie.net/rickandmorty/images/7/70/Snuffles-helmet.jpg/revision/latest?cb=20131212193614",
    current_city: "Palo Alto",
    family_members: 
      [
        {name: "CT",
         relationship: "Dad"
        },
        
        {name: "AT",
         relationship: "Mom"
        },

        {name: "Denise Tsui",
         relationship: "Sister"
        },

        {name: "Kelly Tsui",
         relationship: "Sister"
        },

        {name: "Jackie Tsui",
         relationship: "Sister"
        }
      ]
  }
]; 

var videogames = [
  {
    _id: 1,
    title: "Super Mario Bros. 3",
    developer: "Nintendo",
    year: 1988,
    description: "A platformer with genius design." 
  },

  {
     _id: 2,
    title:"Super Mario RPG: Legend of the Seven Stars",
    developer: "Squaresoft",
    year: 1996,
    description: "One of the best RPGs of the 90s."
  },

  {
     _id: 3,
    title:"Super Smash Bros. Melee",
    developer: "Nintendo",
    year: 2001,
    description: "Fighting game with an unexpected life span."
  }
];

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
    documentation_url: "https://github.com/bachtsui/express_self_api/blob/master/README.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "https://gentle-meadow-4010.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});

//Sends Information on Profile
app.get('/api/profile', function readProfile (req, res){
  res.json(my_profile);
});

//Sends Information on ALL Videogames
app.get('/api/videogames', function readVideoGames(req, res){
  console.log(videogames);
  res.json(videogames);
});

app.get('/api/videogames/:id', function readOneVideoGames (req, res){
  var vgID = parseInt(req.params.id);
  
  var oneVideoGame = videogames.filter(function (videoGame){ //creates new array with elements that pass test of function
    return videoGame._id == vgID; //No strict equality here?
  })[0];

  console.log(oneVideoGame);
  res.json(oneVideoGame);
});

//Creates a new Videogame and send it back
//Code based on our lecture notes
app.post('/api/videogames', function createVideoGames (req, res){
  var newVideoGame = req.body;
  console.log(req.body);

  if(videogames.length > 0) {
    newVideoGame._id = videogames[videogames.length - 1]._id + 1;
  } else {
    newVideoGame._id = 1;
  }

  videogames.push(newVideoGame);

  console.log(newVideoGame);
  res.json(newVideoGame);

});

//Updates a new Videogame
//Code based on our lecture notes
app.put('/api/videogames/:id', function updateVideoGames (req, res){
  var vgID = parseInt(req.params.id);
  
  var updatedVideoGame = videogames.filter(function (videoGame){ //creates new array with elements that pass test of function
    return videoGame._id == vgID; //No strict equality here?
  })[0];

  updatedVideoGame.title = req.body.title;
  updatedVideoGame.developer = req.body.developer;
  updatedVideoGame.year = req.body.year;
  updatedVideoGame.description = req.body.description;

  console.log(updatedVideoGame);
  res.json(updatedVideoGame);
});

//Deletes a new Videogame
//Code based on our lecture notes
app.delete('/api/videogames/:id', function deleteVideoGames (req, res){
  var vgID = parseInt(req.params.id);

  var videogameToDelete = videogames.filter(function (videoGame){ 
    return videoGame._id == vgID; //No strict equality here?
  })[0];

  videogames.splice(videogames.indexOf(videogameToDelete), 1);

  console.log(videogameToDelete);
  console.log("Deleted");

  res.json(videogameToDelete);
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

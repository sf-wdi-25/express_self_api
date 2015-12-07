// require express and other modules
var express = require('express'),
    app = express();

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/
  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// your hardcoded data here
  

  var favoriteMovies = [
            { _id: 1,
              title: 'How the Grinch stole christmas',
              theme: 'holiday',
              director: 'Ron Howard'
            },
            {  _id: 2,
              title: 'Finding Nemo',
              theme: 'Ocean',
              director: 'Andrew Stanton , Lee Unkrich'
            },
            { _id: 3,
              title: 'Princess Bride',
              theme: 'Love-Adverture story' ,
              director: 'Rob Reiner'
            },
            { _id: 4,
              title: 'Robin Hood Men in tights',
              theme: 'Romance-Comedy',
              director: 'Mel Brooks'
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

app.get('/api/profile', function (req , res) {
    res.json({
      url: 'localhost:3000',
      data: [{
    name: "Josh", 
    url: 'localhost:3000',
     github_link: "https://github.com/JDe-Lora",
     github_profile_image:"https://avatars2.githubusercontent.com/u/15679196?v=3&s=460" ,
     current_city: "Oakland",
     family_members: [{
      name: 'Eric', relationship: 'father'} , {name: 'Robin', relationship: 'Mother'}, 
      {name: 'Ben' , relationship: 'Brother'} , {name: 'Emily', relationship: 'Sister'},
      {name: 'Chris' , relationship: 'Brother'}
        ]}
      ]

    });
});
    app.get('/api/favoriteMovies', function index(req, res) {
      res.json({favoriteMovies: favoriteMovies});
    }
);
    app.get('/api/favoriteMovies/:id', function show( req , res) {
     //trying to add index from using the expample from weeks example it only shows objects sadly.
        var favoriteMoviesId = parseInt(req.params.id);
        var foundfavoriteMovies = favoriteMovies.filter(function(favoriteMovies) {
          return favoriteMovies._id == favoriteMoviesId;
        }[1]
        );
          res.json(foundfavoriteMovies);
    
    });
    app.post('/api/favoriteMovies', function create (req, res) {

    });
/*
 * JSON API Endpoints
 */

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to my personal api!",
    documentation_url: "https://github.com/JDe-Lora/express_self_api/blob/master/Readme.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "http://calm-depths-5756.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});

//app.get('/')
/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

  // require express and other modules
var express = require('express'),
app = express();

  //including bodyparser middleware.
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

  // serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(express.static('vendor'));

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/************
 * DATABASE *
 ************/
var pInfo = {
    name: 'Breon Knight',
    github: 'https://github.com/BreonKnight/',
    github_profile_picture: 'https://avatars2.githubusercontent.com/u/10602103?v=3&s=460',
    current_city: 'Berkeley',
    familyMembers: [
      {
        fname: 'Maya',
        relationship: 'Sister'
      },
      {
        fname: 'Tania',
        relationship: 'Sister'
      },
      {
        fname: 'Tanya',
        relationship: 'Mother'
      }
    ]
  };

var favAnimes = [
  {_id: 1, title: 'Code: Geass', genre: 'Mecha', finished: true},
  {_id: 2, title: 'Magi: The Magic Kingdom', genre: 'Shonen', finished: true},
  {_id: 3, title: 'One Piece', genre: 'Shonen', finished: false},
  {_id: 4, title: 'Steins: Gate', genre: 'Sci-Fi', finished: true},
  {_id: 5, title: 'Owari No Seraph', genre: 'Sci-Fi', finished: false}
];
/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  res.json({
    message: "Welcome to my personal api!",
    documentation_url: "https://github.com/breonknight/express_self_api/README.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "https://murmuring-waters-9411.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});
/*  
  My Profile!!!
*/
app.get('/api/profile', function show(req, res) {

    res.json(pInfo);
});
/*

ANIMES

*/

app.get('/api/animes', function index(req, res) {
  res.json({favAnimes: favAnimes});
});


app.post('/api/animes', function newAnime(req, res) {
  var anime = req.body;
  if (favAnimes > 0) {
    anime._id = favAnimes[favAnimes.length - 1] + 1;
  }else{
    anime._id = 1;
  }
  favAnimes.push(anime);
  res.json(anime);
});
/*This is getting the anime by the id 
and indexing them in a page number such as animes/1 and animes/2
*/
app.get('/api/animes/:id', function getAnimes(req, res) {
  var myAnimes = parseInt(req.params.id);
  var theseAnimes = favAnimes[myAnimes - 1];
  res.send({
  data: [theseAnimes]
  });
});
//this is to update my page with the current anime
app.put('/api/animes/:id', function updateAnime(req, res) {
  favAnimes.forEach(function (element, index){
    var appending = req.body;
    if (element._id === req.params.id) {
      favAnimes.splice(index, 1, {_id: element._id, title: appending.title,
      genre: appending.genre, finished: appending.finished});
      res.json(favAnimes[index]);
    }
  });
});
//Deleting Anime from server
app.delete('/api/animes:id', function deleteAnime(req, res) {
  favAnimes.forEach(function (element, index) {
    if (element._id === req.params.id) {
      res.json(favAnimes[index]);
      favAnimes.splice(index, 1);
    }
  });

});
/**********
 * SERVER *
 **********/
// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
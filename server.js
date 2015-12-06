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

var books = [
  { _id: 1, contributor: 'Noah', title: 'Pandoras Star', author: 'Peter Hamilton', genre: 'Science Fiction', notes: 'One of my favorite book of all times. Space opera meets satanism and zombies. Need I say more?', synopsis: 'Space is not the only void... /n In AD 2600 the human race is finally beginning to realize its full potential. Hundreds of colonized planets scattered across the galaxy host a multitude of prosperous and wildly diverse cultures. Genetic engineering has pushed evolution far beyond nature\'s boundaries, defeating disease and producing extraordinary spaceborn creatures. Huge fleets of sentient trader starships thrive on the wealth created by the industrialization of entire star systems. And throughout inhabited space the Confederation Navy keeps the peace. A true golden age is within our grasp. /n But now something has gone catastrophically wrong. On a primitive colony planet a renegade criminal\'s chance encounter with an utterly alien entity unleashes the most primal of all our fears. An extinct race which inhabited the galaxy aeons ago called it "The Reality Dysfunction." It is the nightmare which has prowled beside us since the beginning of history.' }
];

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
      {method: "GET", path: "/api/personalProfile", description: "Provides personal data about me"},
      {method: "GET", path: "/api/books", description: "Books we should all read!"}
    ]
  });
});

app.get('/api/personalProfile', function personalProfile_index (req, res){
  res.json({personalProfile: personalProfile});
});

app.get('/api/books', function books_index (req, res){
  res.json({books: books});
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

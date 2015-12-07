// require express and other modules
var express = require('express'),
    app = express();
    bodyParser = require('body-parser');

 //bddy parser config
 app.use(bodyParser.urlencoded({ extended: true }));

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
var profile = {
  name: "Rich Rizzo",
  github_link: "https://github.com/bw-giraffe",
  github_profile_image: "https://pixabay.com/static/uploads/photo/2012/04/18/03/05/giraffe-36716_960_720.png",
  current_city: "Oakland",
  family_members: [{name: "Erich", relationship: "partner"}, {name: "Joule", relationship: "Minister of Hay"}, {name: "Newton", relationship: "Secretary of Greens"}]
}

var places = [ {id: 1, location: "Singapore"}, {id: 2, location: "Taiwan"}, {id: 3, location: "Okinawa"}, {id: 4, location: "South Africa"}, {id: 5, location: "Slovenia"}, {id: 6, location: "France"}, {id: 7, location: "Zion National Park"}, {id: 8, location: "Volcanoes National Park"}, {id: 9, location: "Canyonlands National Park"}, {id: 10, location: "Yosemite National Park"}, {id: 11, location: "Seattle"}, {id: 12, location: "Australia"}, {id: 13, location: "Berlin"}, {id: 14, location: "Chile"}, {id: 15, location: "Peru"}, {id: 16, location: "Argentina"}, {id: 17, location: "Costa Rica"}, {id: 18, location: "Aruba"}];
/**********
 * ROUTES *
 **********/
// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
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
    documentation_url: "https://github.com/bw-giraffe/express_self_api", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "https://sheltered-dawn-4760.herokuapp.com/api",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  })
});

app.get('/api/profile', function api_index (req, res){
  res.json(profile)
});

app.get('/api/places', function aget_place(req, res) {
  res.json(places);
});

app.post('/api/places', function add_place(req, res) {
  var newPlace = req.body;
  newPlace.id = parseInt(newPlace.id);
  console.log(newPlace);
  places.push(newPlace);
  res.send(newPlace);
});

app.delete('/api/place/:id', function delete_place (req, res) {
  var id = req.params.id; 
  console.log(id);
  res.send(id);
});

app.create 
/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

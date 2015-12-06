// require express and other modules
var express = require('express'),
    app = express();

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

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

var places = ["Singapore", "Taiwan", "Okinawa", "South Africa", "Slovenia", "France", "Zion National Park", "Volcanoes National Park", "Canyonlands National Park", "Yosemite National Park", "Seattle", "Australia", "Berlin", "Chile", "Peru", "Argentina", "Costa Rica", "Aruba"];

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
  res.json({
    message: "hay gurl hayyy",
    takeThisObject: profile
  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

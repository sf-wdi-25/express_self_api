// require express and other modules
var express = require('express'),
    app = express();

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
 var info = ({   name: 'Kehontas',
      github_link: 'http://githib.com/kehontas',
      github_profile_image: '',
      current_city: 'San Francisco',
      family_members: [{
        name: 'Charice', relationship: 'mother'}, {name: 'Doug', relationship: 'father'}]
    });

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

app.get('/api/profile', function profile (re, res){
        res.send(info);
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

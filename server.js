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
    message: "Is Angieri's first api",
    documentation_url: "https://github.com/isangieri/express_self_api/blob/master/APIREADME.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "http://gentle-shore-4526.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "retrieve all apis"},
      {method: "POST", path: "/api", description: "create new api"},
      {method: "PUT", path: "/api/:id", description: "update existing api"},
      {method: "DELETE", path: "/api/:id", description: "delete existin api"},
      {method: "GET", path: "/api/:id", description: "retrieve specific api"}
    ]
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
//either at process.env.PORT(heroku) or 3000
//boilerplate
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

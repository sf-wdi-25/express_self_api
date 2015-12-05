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
var api = [
  {_id: 1, method: "GET", path: "/api", description: "retrieve all apis"},
  {_id: 2, method: "POST", path: "/api", description: "create new api"},
  {_id: 3, method: "PUT", path: "/api/:id", description: "update existing api"},
  {_id: 4, method: "DELETE", path: "/api/:id", description: "delete existing api"},
  {_id: 5, method: "GET", path: "/api/:id", description: "retrieve specific api"}
];

//retrieve all apis
app.get('/api', function api_index (req, res){
  res.json({
    message: "Is Angieri's first api",
    documentation_url: "https://github.com/isangieri/express_self_api/blob/master/APIREADME.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "http://gentle-shore-4526.herokuapp.com",
    endpoints: api,
  });
});

//retrieve api by id
app.get('/api/:id', function show(req, res) {
  api.forEach(function (element, index) {
    if (element._id == req.params.id + 1) {
      res.json(todos[index]);
    }
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

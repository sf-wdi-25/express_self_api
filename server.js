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

  /**********
 * /api *
 **********/

 var api =  [
  { method: "GET", path: "/api", description: "retrieve all apis"},
  { method: "GET", path: "/APIREADME.md", description: "retrieves documentation"},
  { method: "GET", path: "/api/profile", description: "retrieves profile api"},
  { method: "GET", path: "/api/designProjects", description: "retrieves designProjects api"},
  { method: "GET", path: "/api/design/:id", description: "retrieves selected designProject by id"},
  { method: "POST", path: "/api/designProjects", description: "creates designProjects property"},
  { method: "PUT", path: "/api/designProjects/:id", description: "updates selected designProjects property"},
  { method: "DELETE", path: "/api/designProjects/id", description: "deletes selected designProjects property"}
];

//retrieve all apis
app.get('/api', function api_index (req, res){
  res.json({
    message: "Is Angieri's first api",
    documentation_url: "https://github.com/isangieri/express_self_api/blob/master/APIREADME.md",
    base_url: "http://gentle-shore-4526.herokuapp.com",
    endpoints: api
  });
});

  /**********
 * /api/profile *
 **********/

    //  + `github_link` - url to your github profile
    // + `github_profile_image` - url of github profile image
    // + `current_city` - string

 var profile = [
  {firstname: "Is"},
  {lastname: "Angieri"},
  {github_link: "https://github.com/isangieri"},
  {github_profile_image: "https://avatars2.githubusercontent.com/u/15096174?v=3&s=460"},
  {current_city: "Oakland, CA"},
  { family_members: [{name: "Nicolette", relationship: "mother"},
  {name: "Gabriele", relationship: "father"},
  {name: "Faith", relationship: "step-mother"},
  {name: "Dominic", relationship: "brother"},
  {name: "Gabriel", relationship: "brother"},
  {name: "Yvonne", relationship: "sister"},
  {name: "Ghislaine", relationship: "sister"},
  {name: "Jean-Paul", relationship: "brother"},
  {name: "Denise", relationship: "sister"},
  {name: "Clementina", relationship: "sister"}]}
];

//retrieve all profile properties
app.get('/api/profile', function index(req, res) {
  res.json({ "profile": profile });
});

 /**********
 * /api/design_projects *
 **********/

var designProjects = [
  { _id: 1,
  date: "",
  title: "",
  description: "",
  images: [ 
    { _id: 1, title: "", caption: "", url: "url"},
  ]}
];

//retrieve all design_projects properties
app.get('/api/design_projects', function index(req, res) {
  res.json({ designProjects: designProjects });
});

//retrieve designProjects property by id
app.get('/api/design_projects/:id', function show(req, res) {
  designProjects.forEach(function (element, index) {
    if (element. _id === parseInt(req.params.id, 10)) {
      res.json(element);
    }
  });
});

function makeID (item) {
  var previous_id = item[item.length - 1]._id;
  return previous_id + 1;
}

//retrieve designProjects property by id
app.post('/api/design_projects', function create(req, res) {
  var data = req.body;
  var images = data.images;
  var newDesignProject = { 
    _id: makeID(designProjects), 
    date: data.date, 
    title: data.title, 
    description: data.description,
    images: [
      { _id: 1, title: images.title, caption: images.caption, url: images.url}
    ]
  };
  res.json(newDesignProject);
});

app.delete('/api/design_projects/:id', function destroy(req, res) {
  designProjects.forEach(function (element, index) {
    if (element._id === parseInt(req.params.id, 10)) {
      res.json(designProjects[index]);
      designProjects.splice(index, 1);
    }
  });
});

app.put('/api/design_projects/:id', function update(req, res) {
  design_projects.forEach(function (element, index) {
    var data = req.body;
    if (element._id === parseInt(req.params.id, 10)) {
      design_projects.splice(index, 1, { 
        _id: element._id, 
        date: data.date,
        title: data.title, 
        description: data.description,
        images: [
          { _id: 1, title: images.title, caption: images.caption, url :images.url}
        ]
      });
      res.json(design_projects[index]);
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

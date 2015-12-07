// require express and other modules
var express = require('express'),
    app = express();


   // bodyParser = require('body-parser');


// serve static files from public folder
// app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname + '/public'));




/************
 * DATABASE *
 ************/

// your hardcoded data here
 // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  
// Change the hardcoded data into an accessible array
var travel = [
  { _id: 1, destination: 'Thailand', reason: 'Full moon party, elephant riding, great weather, and beautiful scenery. ' },
  { _id: 2, destination: 'Alaska', reason: 'Wildlife, glaciers, nature, and fishing.' },
  { _id: 3, destination: 'Japan', reason: 'Culture, food, technology.' },
];

var skills = [
{ _id: 1, skills: 'Basic construction'},
{ _id: 2, skills: 'Basic mechanic'},
{ _id: 3, skills: 'Scuba diving'},
];



  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

var id = skills._id;


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to my personal api!",
    documentation_url: "https://github.com/tscurrie/express_self_api.git", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "http://cryptic-sea-2589.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});

app.get('/api/profile', function profile (req, res) {
  res.send({
    name: 'Thomas',
    github_link: 'https://github.com/tscurrie/seven_challenges.git',
    // github_profile_image:
    current_city: 'San Francisco', 
    family_members: [{
      Father: 'Thomas Currie',
      Mother: 'Lubitza Barkigia',
      Oldest_brother: 'Pedro Alonzo',
      brother: 'Luis Alonzo',
      sister: 'Lubitza Currie',

    }
]
  });
});

app.get('/api/skills', function index(req, res) {
  // res.send('hello world');
  res.json({skills: skills});
});

app.get('/api/travel', function index (req, res) {
  res.json({travel: travel});
});
  
  
app.get('/api/skills/:id', function skills (req, res) {
  var skillsId = parseInt(req.params.id);
  console.log('welp', sklillsId);
  var foundSkills = skills.filter(function (tacos) {
    return tacos._id == skillsId;
  })[0];
  res.json(foundSkills); 

  });
  
    // use this to create functionality for your buttons

  

// click event on button
// $('button').on('click', function (event) {
//   event.preventDefault();
//   $.ajax({
//     method: 'POST',
//     url: '/api/skills',
//     dataType: 'json',
//     success: function (data) {
//       console.log(data);
//     }
//   });
// });


// Use this to create new skills.
app.post('/api/skills', function create(req, res) {
  var newSkills = req.body;


  if (skills.length > 0) {
    newSkills._id = skills[skills.length - 1]._id + 1;
  }
  else {
    newSkills._id = 1;
  }

  skills.push(newSkills);

  res.json(newSkills);
  
});

// use this to DESTROY certain things.
app.delete('/api/skills/:id', function destroy(req, res) {
  var skillsId = parseInt(req.params.id);
  var skillsToDelete = skills.filter(function (todo){
    return skills._id == skillsId;
  })[0];
  skills.splice(skills.indexOf(skillsToDelete), 1);
  
  res.json(todoToDelete);
});




/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

// require express and other modules
var express = require('express'),
    app = express();
    // bodyParser = require('body-parser');


// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/

// your hardcoded data here
 // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  
// Change the hardcoded data into an accessible array
var travel = [
  { _id: 1 , }
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

// var family_members =
// var travel_plans = [{Destination: Thailand,
// Interesting aspects: BLAH BLAH BLAH,},
// {Destination: China, Interesting aspects: Great Wall of China, Culture},
// {Destination: Patagonia:},{Destination: Alaska}, {Destination: Japan}, {Destination: South Africa},{},{},{},]
// var movies =
// var skills = {Scuba diving Certification, Sky diving certification, Hunting License, basic construction, basic machanics,}
// var wish_list = 

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

app.get('/api/travel', function travel (req, res) {
  res.send({
    travel: [{ destination: 'Thailand', Reasons: 'Full moon party, elephant riding, great weather, and beautiful scenery'  }
    // {destination: 'Patagonia', Reasons:},
    // {destination: 'China', Reasons:},
    // {destination: 'Japan', Reasons:},
    // {destination: 'Alaska', Reasons:}
      ]
         });

});
  


app.get('/api/skills', function skills (req, res) {
  res.send({
    skills: [{skills: 'Basic Construction'}
//     skills: 'Basic Mechanic',
//     skills: 'Scuba diving certification'
          ]
            });
}); 


// Use this to create new travel.
// app.post('/api/travel', function create(req, res) {
//   var newTravel = req.body;


//   if (travel.length > 0) {
//     newTravel._id = todos[todos.length - 1]._id + 1;
//   }
//   else {
//     newTodo._id = 1;
//   }

//   todos.push(newTodo);

//   res.json(newTodo);
  
// });

// use this to DESTROY certain things.
// app.delete('/api/todos/:id', function destroy(req, res) {
//   var todoId = parseInt(req.params.id);
//   var todoToDelete = todos.filter(function (todo){
//     return todo._id == todoId;
//   })[0];
//   todos.splice(todos.indexOf(todoToDelete), 1);
  
//   res.json(todoToDelete);
// });




/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

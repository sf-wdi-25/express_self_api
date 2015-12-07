// require express and other modules
var express = require('express'),
    app = express();
var bodyParser = require('body-parser');
// serve static files from public folder
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true}));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

/************
 * DATABASE *
 ************/

 //messages
var url ='localhost:3000';


var music = [{
        artist: 'Perfume'},
        {artist: 'Calvin Harris'},
        {artist: 'Dash'
}];


var messages = [{
  _id: 0,
  user: 'Danny',
  message: 'Hello'
}];


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

app.get('/api/', function api_index (req, res) {
  res.json({
    message: "Welcome to my personal api!",
    documentation_url: "https://github.com/chan-d/express_self_api/README.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "https://frozen-bayou-5536.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "My profile"}
    ]
  });
});

app.get('/api/profile', function api_profile (req, res) {
res.json({ 
  message: "About Me",
  base_url: url,
  data: [{
      name: "Danny Chan",
      github_link: "http://github.com/chan-d/",
      github_profile_image: "",
      current_city: "San Francisco",
      family_members: [{name: 'Chris',
                        relationship: 'Father',
                      },
                        {name: 'Celeste',
                          relationship: 'Mother'
                      },
                        { name: 'Henry', 
                          relationship: 'Brother',
                      },]
    }]
  });
});

app.get('/api/music', function api_music(req, res){
    res.json({
        base_url: url,
        data: music
    });
});

app.post('/api/messages', function post (req,res) {

     var newMessage =req.body; 
     messages.push(newMessage); 
       res.send({data: newMessage});
  
  });

  

app.get('/api/messages', function api_messages(req, res){
  res.json({data: messages});
});



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

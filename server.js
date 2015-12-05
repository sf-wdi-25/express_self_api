// require express and other modules
var express = require('express'),
    app = express();

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/
  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// your hardcoded data here
  // var profile = [{
  //   name: Josh, 
  //    github_link: "https://github.com/JDe-Lora",
  //    github_profile_image:"http://bbsimg.ngfiles.com/1/22523000/ngbbs4d6ec8b6c2013.jpg" ,
  //    current_city: "Oakland",
  //    family_members: [{
  //     name: 'Dad', relationship: 'father'} , {name: 'Mom', relationship: 'Mother'}, 
  //     {name: 'Ben' , relationship: 'Brother'} , {name: 'Emily', relationship: 'Sister'},
  //     {name: 'Chris' , relationship: 'Brother'}
  
     



]}];
/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// app.get('/api/profile', function (req , res) {
//   res.json({profile : profile});
// });
/*
 * JSON API Endpoints
 */

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to my personal api!",
    documentation_url: "https://github.com/JDe-Lora/express_self_api/blob/master/README.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "http://calm-depths-5756.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});

//app.get('/')
/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

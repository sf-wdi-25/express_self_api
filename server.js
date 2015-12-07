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

// your hardcode here
var profile = {
  name: "Reva",
  current_location: "California",
  github_profile_image: "/images/tumblr.jpg",
  hobbies: ""
};

var articles = [
  {_id: 1, 
    image: "/images/dubois-ambedkar-letter.jpg",
    title: "What B.R. Ambedkar Wrote to W.E.B. Du Bois",
    author: "",
    article_link: "https://www.saada.org/tides/article/20140422-3553"
  },

  {_id: 2, 
    image: "/images/jim-crow.png",
    title: "The Aesthetic Beauty of Oppression: Jim Crow, Darkies, and Aunt Jemima",
    author: "",
    article_link: "https://www.academia.edu/6076346/The_Aesthetic_Beauty_of_Oppression_Jim_Crow_Darkies_and_Aunt_Jemima"
  },

    {_id: 3, 
    image: "/images/black-asian-solidarity.jpg",
    title: "Why Asian Americans Might Not Talk About Ferguson",
    author: "",
    article_link: "http://thesaltcollective.org/asian-americans-might-talk-ferguson/"
  }
];

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
    documentation_url: "https://github.com/revalidate/express_self_api/blob/master/README.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "http://murmuring-chamber-7862.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  })
});

app.get('/api/profile', function api_profile(req,res){
  res.json(profile);
});


app.get('/api/articles', function index(req,res){
  res.json({articles})
});


// app.get('/api/articles', function show(req,res){
//   //show CRUD
// });


app.post('/api/articles', function create(req,res){
  var newArticle = req.body;
  if (articles.length > 0) {
    newArticle._id = articles[articles.length - 1]._id + 1;
  } else {
    newArticle._id = 1;
  }
  articles.push(newArticle);
  res.send(newArticle);
});


app.put('/api/articles', function update(req,res){
  var newImage = req.body.image;
  var newTitle = req.body.title;
  var newLink = req.body.article_link;
  var newId = parseInt(req.params.id);
  var update = {_id: newId, image: newImage, title: newTitle, article_link: newLink};
  res.json(update);
});


app.delete('/api/articles/:id', function destroy(req,res){
  var deleteArticleId = parseInt(req.params.id);
  var newArray = articles.find (function (e, i){
    if (deleteArticleId === e._id) {
      articles.splice(i, 1)
      return articles;
    }
  });
  res.send(newArray);
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://murmuring-chamber-7862.herokuapp.com');
});

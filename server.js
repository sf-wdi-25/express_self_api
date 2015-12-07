// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    request = require('request');


// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

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

var profile = {
  firstName: "Daniel",
  lastName: "Lwo",
  birthday: new Date("1991-01-16"),
  github_link: "https://github.com/phnxdaniel",
  github_profile_image: "https://avatars3.githubusercontent.com/u/10553764?v=3&s=460",
  current_city: "San Francisco, CA",
  is_awake: true
};

var books = [
  {
    _id: 1,
    title: "Zero to One",
    author: "Peter Thiel, Blake Masters",
    image: "http://t1.gstatic.com/images?q=tbn:ANd9GcTI_ooZzjy49uuu0Shtt6mOlIxLIEZ4Qd5DRJgS7z9asXEoHP5J",
    releaseDate: new Date("2014-09-16"),
    status: "done"
  },
  {
    _id: 2,
    title: "The Giver",
    author: "Lois Lowry",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7b/The_Giver_first_edition_1993.jpg",
    releaseDate: new Date("1993"),
    status: "done"
  },
  {
    _id: 3,
    title: "The Firm",
    author: "John Grisham",
    image: "http://www.gstatic.com/tv/thumb/movieposters/14877/p14877_p_v7_aa.jpg",
    releaseDate: new Date("1991-02-01"),
    status: "reading"
  },
];

// Set the weather
var localTemp = {
  url: "http://api.wunderground.com/api/9f5993d669b60ea5/conditions/q/CA/San_Francisco.json",
  urlF: "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6",
  temp: 0,
  image: "",
};
function getTemp() {
  request(localTemp.url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var weather = JSON.parse(body);
      // console.log(weather);
      localTemp.temp = weather.current_observation.temp_f;
      localTemp.image = weather.current_observation.icon_url;
    }
  console.log("Weather: " +localTemp.temp);
  });
  setTimeout(getTemp, 10*60*1000);
}
getTemp();

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
    documentation_url: "https://github.com/phnxdaniel/express_self_api/README.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "https://whispering-river-4329.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});

app.get('/api/profile', function api_profile (req, res) {
  var now = new Date().getUTCHours();
  if(now > 7 && now < 16) {
    profile.is_awake = false;
  } else {
    profile.is_awake = true;
  }
  res.json(profile);
});

app.get('/api/days_old', function api_days_old(req, res) {
  var today = new Date();
  var age = (today - profile.birthday)/365/24/60/60/1000;
  res.json(Math.floor(age));
});

app.get('/api/weather', function api_weather(req, res) {
  res.json(localTemp);
});

app.get('/api/books', function api_get_books (req, res) {
  var resBooks = [];
  var limit = books.length;
  if(req.query.status) {
    books.forEach(function (ele, index) {
      if(ele.status == req.query.status) {
        resBooks.push(ele);
      }
    });
  } else {
    resBooks = books;
  }
  if(req.query.limit) {
    limit = req.query.limit;
  }
  res.json(resBooks.slice(0, limit));
});

app.get('/api/books/:id', function api_get_books_id(req, res) {
  books.find(function (ele) {
    if(ele._id == req.params.id) {
      res.json(ele);
    }
  });
});

app.get('/api/search', function api_search(req, res) {
  var title = req.query.title.toLowerCase();
  books.find(function (ele) {
    if(ele.title.toLowerCase() === title) {
      res.json(ele);
    }
  });
  res.json("Can't find " + title);
});

app.post('/api/books', function api_post_books(req, res) {
  var newBook = req.body;
  newBook._id = 0;
  books.forEach(function (ele, index) {
    newBook._id = ele._id >= newBook._id ? ele._id+1 : newBook._id;
  });
  // console.log(newBook);
  books.push(newBook);
  res.json(newBook);
});

app.put('/api/books/:id', function api_put_books(req, res) {
  var editBook = req.body;
  books.find(function (ele, index) {
    if(ele._id == req.params.id) {
      books[index] = editBook;
      res.json(books[index]);
    }
  });
});

app.delete('/api/books/:id', function api_delete_books(req, res) {
  var deleteBook = req.body;
  books.find(function (ele, index) {
    if(ele._id == req.params.id) {
      books.splice(index, 1);
      res.json(ele);
    }
  });
});




/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

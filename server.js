// server.js
// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();

// serve static files in public
// your code here


// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.send('Hello World!');
});




app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});

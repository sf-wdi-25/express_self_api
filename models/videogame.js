var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//specifying datatypes that goes into the field
var VideoGameSchema = new Schema({
  _id: Number,
  title: String,
  developer: String,
  year: Number,
  description: String
});

var VideoGame = mongoose.model("VideoGame", VideoGameSchema);

//module is global variable to node
//module.export is how you export data from one file to another
module.exports = VideoGame;

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//    Character = require('./character.js');

var ProfileSchema = new Schema({
  name: String,
  placesToVisit: [],
  city: String,
  image: String

});

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
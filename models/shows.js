var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//    Character = require('./character.js');

var skillsSchema = new Schema({
  skill: String,
 });

var travelSchema = new Schema({
  destination: String,
  reasons: String,
 });

var ShowSchema = new Schema({
  name: String,
  characters: [CharacterSchema],
  network: String
});



var Character = mongoose.model('Character', CharacterSchema);
var Show = mongoose.model('Show', ShowSchema);

module.exports = Character;
module.exports = Show;
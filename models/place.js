var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var PlaceSchema = new Schema({
  location: String,
   why: String
});

var Place = mongoose.model('Place', PlaceSchema);
module.exports = Place;
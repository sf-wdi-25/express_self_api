var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express_self_api');

module.exports.Profile = require('./profile.js');
module.exports.Place = require('./place.js');
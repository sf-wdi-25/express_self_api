var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express_self_api');

module.exports.Movie = require('./movies.js');

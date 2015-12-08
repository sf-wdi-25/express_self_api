var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FamilySchema = new Schema({
	name: String,
	relationship: String
});

var ProfileSchema = new Schema({
  name: String,
  github_link: String,
  github_profile_image: String,
  current_city: String,
  family_members: [FamilySchema],
  days_old: Number
});

var Family = mongoose.model('Family', FamilySchema);
var Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Family;
module.exports = Profile;
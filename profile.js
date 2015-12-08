var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MemberSchema = new Schema({
	name: String,
	relationship: String
});

var ProfileSchema = new Schema({
  name: String,
  github_link: String,
  github_profile_image: String,
  current_city: String,
  family_members: [MemberSchema]
});

var Character = mongoose.model('Character', CharacterSchema);
module.exports = Character;
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,  
  },
  password: String,
  gender: String,
  bio: String
});

module.exports = mongoose.model('User', UserSchema);
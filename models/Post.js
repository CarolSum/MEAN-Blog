var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./User.js');

var PostSchema = new mongoose.Schema({
  title: String,
  text: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: String
});

module.exports = mongoose.model('Post', PostSchema);
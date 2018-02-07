var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var PostSchema = new mongoose.Schema({
  title: String,
  text: String,
  userId: ObjectId
});

module.exports = mongoose.model('Post', PostSchema);
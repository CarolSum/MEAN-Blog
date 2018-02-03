var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var PostSchema = new mongoose.Schema({
  title: String,
  text: String,
});

module.exports = mongoose.model('Post', PostSchema);
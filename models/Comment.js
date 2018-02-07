var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var CommentSchema = new mongoose.Schema({
  postId: {
    type: String,
    index: true,  
  },
  content: String,
  userId: String,
  createdAt: String
});

module.exports = mongoose.model('Comment', CommentSchema);
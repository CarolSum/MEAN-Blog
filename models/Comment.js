var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./User.js');

var CommentSchema = new mongoose.Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    index: true,  
  },
  content: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: String,
  isShielded: Boolean
});

module.exports = mongoose.model('Comment', CommentSchema);
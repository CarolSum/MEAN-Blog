var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./User.js');

var CommentSchema = new mongoose.Schema({
  postId: {
    type: String,
    index: true,  
  },
  content: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: String
});

module.exports = mongoose.model('Comment', CommentSchema);
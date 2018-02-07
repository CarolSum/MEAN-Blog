var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var sha1 = require('sha1');
var moment = require('moment');


var Post = require('../models/Post.js');
var User = require('../models/User.js');
var Comment = require('../models/Comment.js');

/* GET ALL Posts. */
router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
    if(err) return next(err);
    console.log(posts);
    res.json(posts);
  });
});

/* GET ALL Posts Of A User. */
router.get('/posts/:userId', function(req, res, next) {
  Post.find({userId: req.params.userId} ,function(err, posts){
    if(err) return next(err);
    console.log(posts);
    res.json(posts);
  });
});

/* GET SINGLE POST BY ID */
router.get('/post/:id', function(req, res, next) {
  Post.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE POST */
router.post('/post', function(req, res, next) {
  console.log(req.body);
  Post.create(req.body, function (err, post) {
    if (err) { console.log(err); return next(err); }
    res.json(post);
  });
});

/* UPDATE POST */
router.put('/post/:id', function(req, res, next) {
  Post.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE POST */
router.delete('/post/:id', function(req, res, next) {
  Post.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* CREATE A NEW USER*/
router.post('/createUser', function(req, res, next){
  console.log(req.body);
  var name = req.body.name;
  var password = req.body.password;
  var repassword = req.body.repassword;
  var gender = req.body.gender;
  var bio = req.body.bio;

   // 校验参数
  try {
    if (!(name.length >= 1 && name.length <= 10)) {
      throw new Error('名字请限制在 1-10 个字符')
    }
    if (['m', 'f', 'x'].indexOf(gender) === -1) {
      throw new Error('性别只能是 m、f 或 x')
    }
    if (!(bio.length >= 1 && bio.length <= 30)) {
      throw new Error('个人简介请限制在 1-30 个字符')
    }
    if (password.length < 6) {
      throw new Error('密码至少 6 个字符')
    }
    if (password !== repassword) {
      throw new Error('两次输入密码不一致')
    }
  } catch (e) {
    console.log(e.message);
    res.json(false);
    return;
  }

  password = sha1(password);
  let user = {
    username: name,
    password: password,
    gender: gender,
    bio: bio
  }

  User.create(user, function (err, data) {
    if (err) { 
      console.log(err.message); 
      res.json(false);
      return;
    }
    res.json(data);
  });

});


/* LOGIN */
router.post('/login', function(req, res, next){
  var username = req.body.name;
  var password = req.body.password;
  if(username == '' || username == null || username == undefined){
    res.json(false);
    return;
  }
  if(password == '' || password == null || password == undefined){
    res.json(false);
    return;
  }

  password = sha1(password);
  let user = {
    username: req.body.name,
    password: password
  }
  User.findOne(user, function(err, result){
    //when could not find a user, result will be null
    console.log(result);
    if(err) {
      console.log(err.message);
      res.json(false);
      return;
    }
    res.json(result);
  })

});


/* ADD COMMENT */
router.post('/comment', function(req, res, next){
  console.log(req.body);
  var postId = req.body.postId;
  var userId = req.body.userId;
  var content = req.body.content;
  if (postId == '' || userId == '' || content == '') {
    res.json(false);
    return;
  }
 
  let cm = {
    postId: postId,
    content: content,
    userId: userId,
    createdAt: moment().format('YYYY-MM-DD HH:mm')
  }

  Comment.create(cm, function(err, data){
    if (err) { 
      console.log(err.message); 
      res.json(false);
      return;
    }
    res.json(data);
  })

});


/* GET COMMENTS OF A POST */
router.get('/comments/:postId', function(req, res, next){
  Comment.find({'postId': req.params.postId})
    .populate('userId')
    .exec(function(err, comments){
      if (err) return next(err);
      res.json(comments);
    })
});


/* DELETE A COMMENT */
router.delete('/comment/:id', function(req, res, next) {
  Comment.findByIdAndRemove(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* DELETE ALL COMMENTS OF A POST */
router.delete('/comments/:id', function(req, res, next) {
  Comment.remove({ postId: req.params.id}, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});




module.exports = router;
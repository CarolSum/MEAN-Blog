var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/Post.js');


/* GET ALL Posts. */
router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
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


module.exports = router;
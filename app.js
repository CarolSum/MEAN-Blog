var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/blog-test', { promiseLibrary: require('bluebird') })
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

var api = require('./routes/api');
// var index = require('./routes/index');

var app = express();



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(express.static(path.join(__dirname, 'public')));


//app.use('/posts', express.static(path.join(__dirname, 'dist')));
app.use('/api', api);

//index这个路由控制所有其他链接，以及相关链接的访问
//app.use('/', index);

//view engine 改为html
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
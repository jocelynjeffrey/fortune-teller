var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

// var indexRouter = require('./routes/index');
// var motionRouter = require('./routes/motion');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// app.use('/', indexRouter);
// app.use('/motion', motionRouter);

app.get('/', function(req, res) {
  res.render('index', { title: 'Fortune Teller' });
});

app.get('/motion', function(req, res) {
  console.log('REQUEST IS', req.body)
  res.send('motionnnnn');
});

app.post('/motion', (req, res) => {
  // console.log('msg from app.js', msg);
  // res.status(200);
  // res.send(msg);
  var msg = req.body.msg;
  console.log('msg is:', msg)
  res.json({
    fortune: (Math.random() * 100).toFixed(2) - 0,
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

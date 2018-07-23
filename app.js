var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var isMotion = false;
var TIMEOUT = 1500;
var lastMotion;
var currTime;
var ELLAPSED_SECS = (currTime - lastMotion) / 1000;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.render('index', { title: 'Fortune Teller' });
});

function checkForMotion() {
  ELLAPSED_SECS < TIMEOUT
  ? isMotion = true
  : isMotion = false
}

app.post('/motion', function(req, res) {
  var msg = req.body.msg;
  console.log('msg is', msg);

  if (msg === 'PI') {
    isMotion = true;
    lastMotion = Date.now();
    res.send("MOTION");
  } else {
    currTime = Date.now();
    checkForMotion();
  }

  isMotion ? res.send('MOTION') : res.send('');
});

function getPiData() {
}

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

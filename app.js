const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index', { title: 'Fortune Teller' });
});

let isMotion = false;

app.post('/motion', (req, res) => {
  isMotion = Boolean(req.body.msg);
  res.end();
});

app.get('/fortune', (req, res) => {
  isMotion ? res.send('MOTION') : res.send('detecting...');
});

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

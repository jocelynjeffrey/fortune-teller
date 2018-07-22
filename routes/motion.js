var express = require('express');
var router = express.Router();

/* GET motion listing. ORIGINAL */
// router.get('/', function(req, res, next) {
//   res.send('motion');
// });

router.post('/motion', (req, res) => {
  var msg = req.body.msg;
  console.log(msg);
  res.send(msg);
});

// version 2
//router.post('/motion', function(req, res) {
//   var msg = req.body.msg
//   console.log(msg);
//   alert(msg); // for some reason this keeps the loop open
//   res.send("hey girl");
// });

//router.post('/motion', function(req, res) {
//  var msg = req.body.msg
//  console.log(msg);
//  console.log('response is', res);
//  alert('test');
//});

module.exports = router;

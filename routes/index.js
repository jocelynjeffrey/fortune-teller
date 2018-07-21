var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Fortune Teller' });
});

// router.post('/motion', function(req, res) {
//   var msg = req.body.msg
//   console.log(msg);
//   alert(msg); // for some reason this keeps the loop open
//   res.send("hey girl");
// });

module.exports = router;

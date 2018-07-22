var express = require('express');
var router = express.Router();

/* GET motion listing. ORIGINAL */
router.get('/', function(req, res, next) {
  res.send('motion');
});

// version 2
// router.post('/motion', function(req, res) {
//   var msg = req.body.msg
//   console.log(msg);
//   res.send('motion 2');
// });

module.exports = router;

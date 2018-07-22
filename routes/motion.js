var express = require('express');
var router = express.Router();

/* GET motion listing. ORIGINAL */
router.get('/', function(req, res) {
  console.log('in motion.js status', res.status )
  res.send(res);
});

module.exports = router;

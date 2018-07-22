var express = require('express');
var router = express.Router();

/* GET motion listing. ORIGINAL */
router.get('/', function(req, res, next) {
  res.send('motion from router');
});

module.exports = router;

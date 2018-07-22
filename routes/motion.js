var express = require('express');
var router = express.Router();

/* GET motion listing. */
router.get('/motion', function(req, res) {
  console.log('REQUEST IS', req)
  res.send('motion from router');
});

module.exports = router;

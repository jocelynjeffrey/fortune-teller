var express = require('express');
var router = express.Router();
var app = express();

/* GET motion listing. ORIGINAL */
router.get('/', function(req, res, next) {
  res.send('motion from router');
});

app.post('/motion', (req, res) => {
  var msg = req.body.msg;
  console.log('msg from app.js', msg);
  res.status(200);
  res.send(msg);
});

module.exports = router;

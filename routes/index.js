var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Applied Cryospheric Cons.' });
});

/* GET team page. */
router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Applied Cryospheric Cons.' });
});

module.exports = router;

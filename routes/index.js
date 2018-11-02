var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/random_joke', function(req, res, next) {
    var url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";
    request(url).pipe(res);
});

router.get('/chucknoris_joke', function(req, res, next) {
    var url = "https://api.chucknorris.io/jokes/random?category=dev";
    request(url).pipe(res);
});

router.get('/dad_joke', function(req, res, next) {
    var url = "https://icanhazdadjoke.com/slack";
    request(url).pipe(res);
})
module.exports = router;

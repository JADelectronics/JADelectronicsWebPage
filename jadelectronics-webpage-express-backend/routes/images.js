var express = require('express');
var router = express.Router();

var nano = require('nano')('http://localhost:5984');
var images_db = nano.db.use('images');

router.get('/getLogoThumbnail', function(req, res, next) {
    res.send('logo thumbnail');
});

router.get('/getBrainThumbnail', function(req, res, next) {
    res.send('brain thumbnail');
});

router.get('/getBodyThumbnail', function(req, res, next) {
    res.send('body thumbnail');
});

module.exports = router;
var express = require('express');
var router = express.Router();

var nano = require('nano')('http://localhost:5984');
var path = require('path');
var images_db = nano.db.use('images');

router.get('/getLogoThumbnail', function(req, res, next) {
    res.sendFile(path.resolve(__dirname + '/../public/images/dragonsmall.png'));
});

router.get('/getBrainThumbnail', function(req, res, next) {
    res.sendFile(path.resolve(__dirname + '/../public/images/dragonBrain.png'));
});

router.get('/getBodyThumbnail', function(req, res, next) {
    res.sendFile(path.resolve(__dirname + '/../public/images/dragonBody.png'));
});

module.exports = router;
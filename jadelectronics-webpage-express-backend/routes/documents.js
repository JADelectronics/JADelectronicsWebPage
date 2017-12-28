var express = require('express');
var router = express.Router();

var nano = require('nano')('http://localhost:5984');
var documents_db = nano.db.use('documents');
var path = require('path');

router.get('/getResume', function(req, res, next) {
    res.sendFile(path.resolve(__dirname + '/../public/documents/JacobDaigleResume_05-2017.pdf'));
});

module.exports = router;
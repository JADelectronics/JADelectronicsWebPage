var express = require('express');
var router = express.Router();

var nano = require('nano')('http://localhost:5984');
var documents_db = nano.db.use('documents');

router.get('/getResume', function(req, res, next) {
    res.send('here is a resume pdf');
});

module.exports = router;
var express = require('express');
var router = express.Router();

var nano = require('nano')('http://localhost:5984');
var users_db = nano.db.use('users');

router.get('/', function(req, res, next) {
    users_db.list({include_docs: true}, function(err, body) {
        if (!err) {
            body.rows.forEach(function(doc) {
                console.log(doc.doc);
            });
            res.send(body)
        }
    });
});

module.exports = router;
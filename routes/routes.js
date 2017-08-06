var index = require('./modules/index');
var users = require('./modules/users');

var express = require('express'),
    router = express.Router()


router.use('/', index);
router.use('/users', users);

module.exports = router;
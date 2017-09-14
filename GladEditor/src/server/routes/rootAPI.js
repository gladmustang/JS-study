var express = require('express');
var router = express.Router();



router.use('/', require('./index'));
router.use('/user', require('./users'));


module.exports = router;
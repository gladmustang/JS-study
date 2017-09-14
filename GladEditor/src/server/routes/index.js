var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/closeApp', function(req, res, next) {
    console.log("closeApp called");
    var exec = require('child_process').exec;
    var cmdStr = 'cd '+ rootDir +'&& npm stop';
    exec(cmdStr, function(err,stdout,stderr){
        if(err) {
            console.log('close app error:'+stderr);
            res.json({code: 1, error: err})
        } else {
            res.json({code: 0});
        }
    });

});

module.exports = router;

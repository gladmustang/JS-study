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

router.get('/getChildNodes', function(req, res, next) {
    var result = [
        { name: 'child1', key: '/path1' },
        { name: 'child2', key: '/path2' },
        { name: 'child3', key: '/path3', isLeaf: true },
        ]

    res.json({code:0, childNodes: result});

});


module.exports = router;

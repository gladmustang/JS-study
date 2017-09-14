var express = require('express');
var router = express.Router();

var fs = require("fs");
var path = require("path");

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

router.post('/getChildNodes', function(req, res, next) {
    var clientPath = req.body.path;
    var filePath= rootDir + req.body.path;

    fs.readdir(filePath,function(err,files) {
        if (err) {
            console.log(err);
            res.json({code:1, error: err});
            return;
        }
        var count = files.length;
        var results = [];

        files.forEach(function(filename) {
            try {
                var stats = fs.statSync(path.join(filePath, filename));
                if (stats.isFile()) {
                    results.push({name:filename, key: path.join(clientPath, filename), isLeaf: true});
                } else if (stats.isDirectory()) {
                    results.push({name:filename, key:  path.join(clientPath, filename)});
                }
            } catch(err) {
                res.json({code:1, error: err});
                return;
            }
        });
        res.json({code:0, childNodes: results});
    });


});


module.exports = router;

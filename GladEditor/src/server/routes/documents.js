var express = require('express');
var router = express.Router();

var fs = require("fs");
var path = require("path");

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

router.post('/getDocument', function(req, res, next) {
    var docPath = req.body.docPath;
    var filePath= rootDir + docPath;
    fs.statSync(filePath)
    // fs.readFile()
    res.json({code:0, content: "<html>hello</html>"});

});

module.exports = router;

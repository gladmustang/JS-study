var express = require('express');
var router = express.Router();

var fs = require("fs");
var path = require("path");
var mv = require('mv');

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
            var baseFilename = path.basename(filename, '.html');
            try {
                var stats = fs.statSync(path.join(filePath, filename));
                if (stats.isFile()) {
                    results.push({name:baseFilename, key: path.join(clientPath, filename), isLeaf: true});
                } else if (stats.isDirectory()) {
                    results.push({name: baseFilename, key:  path.join(clientPath, filename)});
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
    fs.readFile(filePath,function (err, data) {
        if (err) {
            console.log(err);
            res.json({code:1, error: err});
            return;
        }
        var content = data.toString();
        res.json({code:0, content: content});
    })


});

router.post('/saveDoc', function(req, res, next) {
    var docPath = req.body.docPath;
    var filePath= rootDir + docPath;
    var fileName = req.body.fileName;
    var content = req.body.content;


    var oldFileName = path.basename(docPath,'.html');
    var folderPath = path.dirname(filePath);
    var newFilePath = path.join(folderPath,fileName+".html");
    var newDocPath = path.join(path.dirname(docPath),fileName+".html");
    if(oldFileName!=fileName) {
        mv(filePath, newFilePath, function(err) {
            // done. it tried fs.rename first, and then falls back to
            // piping the source file to the dest file and then unlinking
            // the source file.
            if(err) {
                res.json({code:1, error: err});
                return;
            }
            fs.writeFile(newFilePath, content, function (err) {
                if(err) {
                    res.json({code:1, error: err});
                    return;
                }
                var fileInfo = {
                    name: fileName,
                    key:  newDocPath,
                    isLeaf: true
                };
                res.json({code:0, fileInfo: fileInfo});
                return;
            })

        });
    } else {
        fs.writeFile(newFilePath, content, function (err) {
            if(err) {
                res.json({code:1, error: err});
                console.log(err);
                return;
            }
            var fileInfo = {
                name: fileName,
                key:  newDocPath,
                isLeaf: true
            };
            res.json({code:0, fileInfo: fileInfo});
            return;
        })
    }



});


module.exports = router;

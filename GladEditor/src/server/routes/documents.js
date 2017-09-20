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
    if((oldFileName!=fileName)&&(fs.existsSync(filePath))) {
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

router.post('/deleteDoc', function(req, res, next) {
    var docPath = req.body.docPath;
    var filePath= rootDir + docPath;
    try{
        if(fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        res.json({code:0});
    } catch(err) {
        res.json({code:1});
    }

});

router.post('/addDir', function(req, res, next) {
    var dirPath = req.body.dirPath;
    var folderPath= rootDir + dirPath;
    try{
        fs.mkdirSync(folderPath)
        res.json({code:0});
    } catch(err) {
        res.json({code:1});
    }

});

router.post('/renameDirOrDoc', function(req, res, next) {
    var dirOrDocPath = req.body.dirOrDocPath;
    var srcPath= rootDir + dirOrDocPath;
    var parentDir = path.dirname(srcPath);
    var newName = req.body.newName;
    var destPath = path.join(parentDir, newName);
    var destKey = path.join(path.dirname(dirOrDocPath), newName)
    try {
        var stats = fs.statSync(srcPath);
        if (stats.isFile()) {
            destPath = destPath+".html";
            destKey = destKey+".html";
        }
        mv(srcPath, destPath, {mkdirp: true}, function(err) {
            // done. it first created all the necessary directories, and then
            // tried fs.rename, then falls back to using ncp to copy the dir
            // to dest and then rimraf to remove the source dir
            if(err) {
                res.json({code:1, error: err});
            }
            var treeItemInfo= {
                key: destKey,
                name: newName
            }
            res.json({code:0, treeItemInfo: treeItemInfo});
        });

    } catch(err) {
        console.log(err);
        res.json({code:1, error: err});
    }


});



module.exports = router;

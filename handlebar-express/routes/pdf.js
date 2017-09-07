var express = require('express');
var pdf = require('html-pdf');
var handlebars = require('handlebars');
var fs = require('fs');
var router = express.Router();

router.get('/download', function(req, res, next) {

    res.set('Content-Type', 'application/pdf');
    res.download(__dirname+"/../public/download/test.pdf");
});

router.get('/download2', function(req, res, next) {//内存生成html并转成pdf下载
    var html= "<table><tr><td>data 1</td><td>这是数据2</td></tr></table>";

    //res.set('Content-Type', 'application/pdf');
    res.set('Content-Disposition', 'attachment; filename="test.pdf"');
    res.set('Content-Type', 'application/octet-stream');
    pdf.create(html).toStream(function(err, stream){
        stream.pipe(res);
    });

});

router.get('/downloadFromTemplate', function(req, res, next) {//模板利用handlebar生成html并转成pdf下载
    var data={users:[
            {id:2, name: "神剑", age: 15} ,
            {id:3, name: "健身", age: 18}
    ]};

    fs.readFile(__dirname+ '/../public/download/html-to-pdf-tmpl.html', 'utf-8', function(error, source){
        var template = handlebars.compile(source);
        var html = template(data);
        res.set('Content-Disposition', 'attachment; filename="test.pdf"');
        res.set('Content-Type', 'application/octet-stream');
        pdf.create(html).toStream(function(err, stream){
            stream.pipe(res);
        });

    });

});

router.get('/view', function(req, res, next) {//查看pdf,直接在浏览器里浏览
     var html= "<style>table {color: red}</style><table><tr><td>data 1</td><td>这是数据2</td></tr></table>";
    res.set('Content-Type', 'application/pdf');
    pdf.create(html).toStream(function(err, stream){
        stream.pipe(res);
    });

});

module.exports = router;
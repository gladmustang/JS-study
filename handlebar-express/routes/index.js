var express = require('express');
var router = express.Router();




var a = require("../services/testService")


/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' , layout: false}); //don't use layout
    //res.render('index', { title: 'Express'}); //use default layout



    //throw new Error("error happened in home");
    res.render('index', { title: 'Express', layout:"main1"});//use different layout

});


router.get('/getData', function(req, res, next) {
    //console.log(req);
    var data = require("../public/samples/arrays.json").data;
    var start = parseInt(req.query.start);
    var length = parseInt(req.query.length);
    //var searchValue = req.query.search.value;
    var recordsTotal = data.length;
    var pData =[];
    var end= (start+length) > recordsTotal? recordsTotal: (start+length);
    for(var i=start;i<end; i++) {

        pData[pData.length]=data[i];
    }

    var result = {
        draw: req.query.draw,
        recordsTotal: recordsTotal,
        recordsFiltered: recordsTotal,
        data: pData
    }
    res.json(result);
    
    a.hah();

});



module.exports = router;

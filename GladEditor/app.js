var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var index = require('./src/server/routes/index');
var users = require('./src/server/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', exphbs(require("./src/server/utils/renderUtil")));
app.set('view engine', 'html');

var app_name="gladeditor"
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/'+app_name, express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.redirect('/' + app_name + '/');
})

app.use('/' + app_name, index);
app.use('/users/' + app_name, users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var port = process.env.PORT || '3000';

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, function () {
    console.log(app_name + ' is running on port ' + port + ' now!');
});

module.exports = app;


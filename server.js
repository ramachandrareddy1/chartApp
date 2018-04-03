var express = require('express');
var path = require('path');
var http=require('http');
// rcreddy

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var nodemon = require('nodemon');

var fs = require('fs');
var ejs = require('ejs');

var app = express();
var index=require('./routes/index');
var server=http.createServer(app);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));



//app.use(authChecker);
app.use('/', index);
//'0.0.0.0'


server.listen(3000, function (error) {
    console.log('server running on the port:3000')
});

module.exports = app;

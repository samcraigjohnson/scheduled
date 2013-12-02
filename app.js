
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config')();
var mongoose = require('mongoose');

//models

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//connect to the db
mongoose.connect('mongodb://' + config.mongo.host + '/' + config.mongo.database);

//route all requests through routes.js
var routes = require('./routes')(app);

//get database instance
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//start server once database connection has been made
db.once('open', function callback() {
  console.log("adding in fake data...")
  require('./fake_data.js');
  http.createServer(app).listen(config.port, function(){
    console.log('Express server listening on port ' + config.port);
  });
});


/**
 * Module dependencies.
 */

var express = require('express');
var controllers = require('./controllers');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');
var config = require('./config')();
var mongoose = require('mongoose');

//models
var School = require('./models/school');

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

//create dummy school info
School.remove({loc_state: "IN"}, function (err){
  if(err){
    console.log("error: " + err);  
  }  
});

new School({name: "PT", gpa: 4.0, s_length: 5, loc_state: "IN"}).save();
new School({name: "Hancock", gpa: 4.5, s_length: 7, loc_state: "IN"}).save();
//


app.get('/', function(req, res){
    School.find({loc_state: "IN"}, function(err, docs){
	    res.render('index', {
	      title: 'classti.me',
	      schools:docs    
	    });
      console.log(docs.length);
    });
});//routes.index);
//app.get('/users', user.list);
//using controllers here
var Admin = require('./controllers/Admin');
app.all('/admin*', function(req, res, next){
 Admin.run(req, res, next);
}); 


//get database instance
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))

//start server once database connection has been made
db.once('open', function callback() {
  http.createServer(app).listen(config.port, function(){
    console.log('Express server listening on port ' + config.port);
  });
});

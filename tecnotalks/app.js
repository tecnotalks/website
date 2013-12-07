
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var EventProvider = require("./eventprovider-mongodb").EventProvider;
var UserProvider = require("./userprovider-mongodb").UserProvider;

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function(req, res) {
	return res.render('index.html');
});

var eventProvider = new EventProvider('localhost', 27017);
var userProvider = new UserProvider('localhost', 27017);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

/* Listar eventos */
app.get('/services/events/list', function(req, res){
    eventProvider.findAll( function(error,docs){
        	res.send(docs)
        });
    });

/* Salvar usuaro */
app.post('/services/user/save', function(req, res){
        userProvider.save(req.body, function(users){res.send(users);});
    });

/* listar usuario */
app.get('/services/user/list', function(req, res){
    userProvider.findAll( function(error,docs){
            res.send(docs)
        });
    });



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

/*
var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200, {
		'Content-type': 'text/plain'
	});
	res.end('It\'s working');
}).listen(3000);
*/

/*
var connect = require('connect');
var app = connect();

var logger = function(req,res,next){
	console.log(req.method,req.url);
	next();
}

var hello = function(req,res,next){
	res.setHeader('Content-type', 'text/plain');
	res.end('Hello');
};

var goodbye = function(req,res,next){
	res.setHeader('Content-type', 'text/plain');
	res.end('Goodbye');
};

app.use(logger);
app.use('/hello',hello);
app.use('/goodbye',goodbye);
app.listen(3000);
*/
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

var db = mongoose();
var app = express(db);
var passport = passport();
app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');
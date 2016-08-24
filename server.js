var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

//config
var db = require('./config/connection.js');

//set port
var port = process.env.PORT || 8080;

//connect to mongoDB
mongoose.connect(db.url);

//get all data/ of the body(POST) params
//parse app/json
app.use(bodyParser.json());

//parse app/vnd.api and json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//parse app/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//override with the x-http-method-override header in request. simulate DEL/PUT
app.use(methodOverride('x-http-method-override'));

//set static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

//routes
var routes = require('./controllers/router.js');
app.use('/', routes);

//start app at localhost:8080
app.listen(port);

console.log('Listening on port ' + port);

//expose app
exports = module.exports = app;
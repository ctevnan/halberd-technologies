/*require('dotenv').config();*/
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var logger = require('morgan');
var methodOverride = require('method-override');
var server = require('http').Server(app);

//set port
var PORT = process.env.PORT || 3000;

/*//config
var db = require('./config/connection.js');

//mongoose connect
var db = 'mongodb://localhost/halberdtechnologies';
mongoose.connect(db, function(err){
  if(err){
    console.log(err);
  } else {
    console.log('mongoose connection is successful');
  }
});
*/
//connect to mongoDB
/*mongoose.connect(db.url);*/

//MIDDLEWARE
//get all data/ of the body(POST) params
//parse app/json
/*app.use(bodyParser.json());

//parse app/vnd.api and json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//parse app/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//override with the x-http-method-override header in request. simulate DEL/PUT
app.use(methodOverride('x-http-method-override'));*/

//set static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

app.use(logger('dev'));

//routes
/*var routes = require('./controllers/router.js');
app.use('/', routes);

//expose app
exports = module.exports = app;*/

//start app at localhost:8080
app.listen(PORT, function(){
  console.log('Listening on ', PORT);
}); 
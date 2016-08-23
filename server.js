var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//config
var db = require('./config/db');

//set port
var port = process.env.PORT || 8080;

//connect to mongoDB
//mongoose.connect(db.url);

//get all data/ of the body(POST) params
//parse app/json
app.use(bodyParser.json());

//parse app/vnd.api and json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//parse app/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//override with the x-http-method-override header in request. simulate DEL/PUT
app.use(methodOverride('x-http-method-override'));
// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.listen(3000);
console.log("App running on port 3000");
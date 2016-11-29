// app.js
/**
 * Server's bootstrap js
 */

var express = require('express');
var app = express();

const DEFAULT_PORT = 80;

app.use(express.static('resources'));
app.use(express.static('page'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.listen(DEFAULT_PORT, function() {
	console.log('Server start on port [' + DEFAULT_PORT + ']...');
});
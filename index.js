var express = require('express');
var app = express();
require('dotenv').config();

app.get('/', function (req, res) {
    res.send('{ "response": "Hey There! This is Working" }');
});

app.get('/signin', function (req, res) {
    res.send('{ "response": "Hello! Please sign in with your account credentials" }');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
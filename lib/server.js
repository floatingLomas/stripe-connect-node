'use strict';

var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));

module.exports = exports = app;

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const elasticsearch = require('elasticsearch');
const logger = require('./logger');

// Constants
const PORT = 8080;

var app = express();
var router = express.Router();

app.use(function (req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser());
app.use('/api', router);

app.listen(PORT);

var client = new elasticsearch.Client({
  host: '192.168.99.100:9200',
  log: 'trace'
});

router.post('/error', function(req, res){
  logger.error(req.body);
});
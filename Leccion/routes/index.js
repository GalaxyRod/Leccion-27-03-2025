var express = require('express');
var router = express.Router();
const { servicios } = require('../models');
const {Sequalize, Op} = require('sequelize');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;

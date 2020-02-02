var express = require('express');
var router = express.Router();
var {sequelize, Sequelize, Board} = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(Board);
  res.render('index', { title: 'Express' });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var {Board} = require('../models');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const data = await Board.findAll();
  res.render('board-list.pug');
});

router.get('/write', (req, res) => {
  res.render('board-write.pug');
})

router.post('/wr', async (req, res, next) => {
  const data = await Board.create({
    title: req.body.title,
    comment: req.body.comment,
    writer: req.body.writer
  });
  res.redirect("/board");
})

module.exports = router;

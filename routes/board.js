var express = require('express');
var router = express.Router();
var datetime = require('date-time');
var {Board} = require('../models');
var {Board} = require('../models');


/* GET users listing. */
router.get(['/', '/:id'], async (req, res, next) => {
  let data;
  try {
    if(req.params.id) {
      if(req.params.id === "write") res.render('board-write.pug');
      else {
        data = await Board.findOne({
          where: { id: req.params.id },
          raw: true
        });
        res.json(data);
      }
    }
    else {
      data = await Board.findAll({
        order: [["id", "desc"]],
        raw: true
      });
      for(var v of data) v.createdAt = datetime({date: v.createdAt});
      res.render('board-list.pug', {data});
    }
  }
  catch(err) {
    next(err);
  }
});


router.get('/delete/:id', async (req, res) => {
  const data = await Board.destroy({
    where: {
      id: req.params.id
    }
  });
  res.redirect("/board");
})

router.post('/wr', async (req, res, next) => {
  const data = await Board.create({
    title: req.body.title,
    comment: req.body.comment,
    writer: req.body.writer
  });
  res.redirect("/board");
});

router.put('/update', async (req, res) => {
  try {
    const data = await Board.update({
      title: req.body.title,
      writer: req.body.writer,
      comment: req.body.comment
    }, {
      where: {
        id: req.body.id
      }
    });
    if(data[0]) res.redirect("/board");
  }
  catch(err) {
    next(err);
  }
  /*
  Board.update({
    title: req.body.title,
    writer: req.body.writer,
    comment: req.body.comment
  }, {
    where: {
      id: req.body.id
    }
  }).then(function(data){
    if(data[0]) res.redirect("/board");
  }
  ).catch(function(err) {
    next(err);
  });
  */
})

module.exports = router;

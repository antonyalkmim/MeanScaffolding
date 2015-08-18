var express = require('express');
var router = express.Router();


function indexAction(req, res, next){
  // res.render('index', {
  //   title: 'Express'
  // });
  res.send('notes/indexAction');
}

function testeAction(req,res, next){
  res.send("notes/testeAction");
}

/* Routes */
router.get('/', indexAction);
router.get('/index', indexAction);

module.exports = router;

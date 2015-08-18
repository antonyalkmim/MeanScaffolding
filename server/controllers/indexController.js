var express = require('express');
var router = express.Router();


function indexAction(req, res, next){
  res.send('indexAction');
}

function testeAction(req,res, next){
  res.send("testeAction");
}

/* Routes */
router.get('/', indexAction);
router.get('/teste', testeAction);

module.exports = router;

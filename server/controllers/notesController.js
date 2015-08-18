var express = require('express');
var router = express.Router();


function indexAction(req, res, next){
  // res.render('index', {
  //   title: 'Express'
  // });
  res.send('notes/indexAction');
}

function listAction(req,res, next){
  //res.send("notes/testeAction");

  var json = "{success:true}";

  res.json({success:true, message:"Deu certo!"});
}

/* Routes */
router.get('/', indexAction);
router.get('/list', listAction);

module.exports = router;

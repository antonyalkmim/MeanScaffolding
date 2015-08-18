var express = require('express');
var router = express.Router();


function indexAction(req, res, next){
  // res.render('index', {
  //   title: 'Express'
  // });
  res.send('notes/indexAction');
}

function listAction(req,res, next){

  var notes = [
      {text:'Jao', date: '21-21-2121'},
      {text:'Julesca', date: '21-21-2121'},
      {text:'Tio', date: '21-21-2121'},
      {text:'Toin', date: '21-21-2121'},
      {text:'Jacu', date: '21-21-2121'},
      {text:'Aderbaldo', date: '21-21-2121'}
  ];


  res.json({success:true, notes:notes});
}


/* Routes */
router.get('/', indexAction);
router.get('/list', listAction);

module.exports = router;

var express = require('express');
var router = express.Router();
var Note = require('../models/Note');

function indexAction(req, res, next){
    res.send('notes/indexAction');
}

function listAction(req,res, next){
    Note.find(function(err, notes){
        res.json({
            error: err,
            notes: err ? [] : notes
        });
    });
}

function addAction(req,res,next){

    var n = new Note(req.body.note);
    n.save(function(err,data){
        res.json({
            error: err,
            message : err ? "Error occured when try to save note" : "Note succesfull saved!"
        });
    });
}


/* Routes */
router.get('/', indexAction);
router.get('/list', listAction);
router.post('/add', addAction);

module.exports = router;

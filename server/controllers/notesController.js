/**
 * NotesController
 */
var NotesController = {};
var Note = require('../models/Note');

//ACTIONS
//==================================================
/**
 * IndexAction
 */
NotesController.index = function(req,res,next){
  res.send("Index");  
};

/**
 * List
 */
NotesController.list = function(req,res,next){
  
  Note.find(function(err, notes){
    res.json({
      error: err,
      notes: err ? [] : notes
    });
  });
  
};

/**
 * Add
 */
NotesController.add = function(req,res){
  var n = new Note(req.body.note);
  n.save(function(err,data){
    res.json({
      error: err,
      message : err ? "Error occured when try to save note" : "Note succesfull saved!"
    });
  });
};


/**
 * Delete
 */
NotesController.delete = function(req,res, next){
  var id = req.params.id || 0;
  
  var callback = function(){
    res.json({message: "All notes are removed!"});
  };
  
  if(id == 0){
    Note.remove(callback);
    return;
  }
    
  Note.remove({id : id}, callback);
};


//PRIVATE METHODS
//==================================================
///


module.exports = NotesController;
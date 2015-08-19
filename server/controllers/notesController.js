/**
 * NotesController
 */


module.exports.index = function(req,res,next){
  res.send("notes something");
}

module.exports.listar = function(req,res,next){
  res.send("notes listar");
}
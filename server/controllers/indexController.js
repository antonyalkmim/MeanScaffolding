/**
 * IndexController
 */
var IndexController = {};


//ACTIONS
//==================================================
IndexController.index = function(req,res,next){
  res.send("Index");  
};

IndexController.listar = function(req,res,next){
  res.send(rewrite());
};


//PRIVATE METHODS
//==================================================
///


module.exports = IndexController;
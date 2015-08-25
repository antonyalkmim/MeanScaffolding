/**
 * UserController
 */
var UserController = {};
var User = require('../models/User');

//  IndexAction
//==================================================
UserController.index = function(req,res,next){
  res.send("Index");  
};


//  ListAction
//==================================================
UserController.list = function(req,res,next){
  
  User.find(function(err, users){
    res.json({
      error: err,
      users: err ? [] : users
    });
  });
  
};

//  AddAction
//==================================================
UserController.add = function(req,res){
  var user = new User(req.body.user);
  
  user.save(function(err,data){
    res.json({
      error: err,
      message : err ? "Error occured when try to save new user" : "User succesfull saved!"
    });
  });
};


//  EditAction
//==================================================
UserController.edit = function(req,res){
  var user = new User(req.body.user);
  
  User.update({ _id: user._id }, { 
    $set: { 
      username: user.username,
      password: user.password 
    }
  }, function(err, user){
    res.json({
      error: err,
      message : err ? "Error occured when try to edit user" : "User succesfull Edited!"
    });  
  });
  
};


//  DeleteAction
//==================================================
UserController.delete = function(req,res, next){
  var userId = req.params.id || 0;
  
  var callback = function(){
    res.json({message: "All users are removed!"});
  };
  
  //If userId == 0 then remove all users
  if(userId == 0){
    User.remove(callback);
    return;
  }
  
  //remove some specified userId
  User.remove({
    _id : userId
  }, callback);
};


//PRIVATE METHODS
//==================================================
///




module.exports = UserController;
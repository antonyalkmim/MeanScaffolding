var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    id: Schema.ObjectId,
    username : String,
    password : String
});

// Private Methods
//========================================
userSchema.methods.findSomeUser = function(){
    console.log("Find Some User");
};


var User = mongoose.model('User', userSchema);
module.exports = User;

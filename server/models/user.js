var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    id : { type: ObjectId, required: true, unique: true },
    text : String,
    reminderDate : Date,
    lastChange : Date
});


// userSchema.methods.setDate = function(){
//
// };

var User = mongoose.model('User', userSchema);
module.exports = User;

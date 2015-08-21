var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var noteSchema = new Schema({
    id: Schema.ObjectId,
    text : String,
    reminderDate : Date,
    lastChange : Date
});


// noteSchema.methods.setDate = function(){
//
// };

var Note = mongoose.model('Note', noteSchema);
module.exports = Note;

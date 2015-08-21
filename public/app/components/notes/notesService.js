$app.factory('NoteService', ['$http', function ($http) {
    
    var notes = []; 
    updateList();
    

    
    //SAVE
    //======================================
    var save = function save(note, callbackSucess, callbackError) {
        $http
            .post('notes/add', {
                note : note
            })
            .then(function(data){
                updateList();               
                callbackSucess && callbackSucess(data);
             }, callbackError);
    };
    
    //REMOVE
    //======================================
    var remove = function remove(note, callback){
        $http.delete('notes/delete/' + note._id)
            .success(function(data){
                notes.splice(notes.indexOf(note), 1);
            })
            .then(callback);
    }
    
    //CLEAR
    //======================================
    var clear = function clear(callback){
        $http.delete('notes/delete/0')
            .success(function(data){
                notes.splice(0, notes.length);
            })
            .then(callback);
    }
    
    //getNote
    //======================================
    var getNote = function getNote(noteId){
        for(var i = 0, len = notes.length; i < len; i++){
            if(notes[i]._id == noteId){
                return notes[i];
            } 
        }
        return null; //note not found
    }
    
    
    
    /**
     * PRIVATES METHODS
     */
    function updateList(){
        $http.get('notes/list').then(function(data){
            notes.splice(0, notes.length);
            
            data.data.notes.forEach(function(note) {
                notes.push(note);   
            });
        });
    }
    

    return {
        notes : notes,
        save     : save,
        remove   : remove,
        clear    : clear,
        getNote  : getNote,
    };     
}])
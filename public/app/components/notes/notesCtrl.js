$app.controller('NotesController', ['$scope', '$http', '$location', 'NoteService', function ($scope, $http, $location, NoteService) {

    $scope.notes = NoteService.notes;
    $scope.clearNotes = clear;
    $scope.deleteNote = deleteNote;
    $scope.clear = NoteService.clear
    $scope.edit = editNote;
    
    
    function clear(){
        NoteService.clear(function(){
           $location.path("/notes"); 
        });
    }
    
    function deleteNote(note){
        NoteService.remove(note, function(){
           $location.path("/notes"); 
        });
    }
    
    function editNote(note){
        $location.path("/edit/" + note._id);
    }
    
}])

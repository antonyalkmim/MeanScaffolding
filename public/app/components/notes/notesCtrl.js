$app.controller('NotesController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

    $scope.notes = getNotes();
    $scope.removeAll = removeAll;
    $scope.deleteNote = deleteNote;

    function getNotes(){
        $http.get('notes/list').success(function(data){
            $scope.notes = data.notes;
        });
    }
    
    
    function removeAll(){
        deleteNote(0); //delete All
    }
    
    function deleteNote(id){
        $http.delete('notes/delete/' + id)
            .success(function(data){
                $location.path('/notes');
            });
    }

}])

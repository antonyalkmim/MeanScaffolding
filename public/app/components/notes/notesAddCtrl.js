$app.controller('NotesAddController', ['$scope', '$http', '$location', '$routeParams', 'NoteService', function ($scope, $http, $location, $routeParams, NoteService) {
    
    $scope.noteModel = NoteService.getNote($routeParams.id) || {
        text: "",
        reminderDate: Date.now(),
        lastChange: Date.now()
    };
    
    
    $scope.addNote = addNote;
    


    function addNote(){
        NoteService.save($scope.noteModel, function(){
            $location.path("/notes");
        })
    }

}])

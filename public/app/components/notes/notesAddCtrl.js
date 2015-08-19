$app.controller('NotesAddController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

    $scope.noteModel = {
        text: "",
        reminderDate: Date.now(),
        lastChange: Date.now()
    };
    $scope.addNote = addNote;



    function addNote(note){
        $http.post('notes/add', {
            note : note
        }).then(function(response){ //success
            $location.path('/notes');
        }, function(response){ //error
            console.log(response);
        });
    }

}])

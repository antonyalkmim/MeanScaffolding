$app.controller('NotesController', ['$scope', '$http', function ($scope, $http) {

    $scope.notes = getNotes();



    function getNotes(){
        $http.get('notes/list').success(function(data){
            $scope.notes = data.notes;
        });
    }
}])

$app.controller('NotesController', ['$scope', '$http', function ($scope, $http) {

    $scope.teste = "Notes";
    $scope.listar = listarNotes;


    function listarNotes(){
        $http.get('notes/list').success(function(data){
            console.log(data);
        });
    }
}])

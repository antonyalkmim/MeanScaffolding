$app.controller('HomeController', ['$scope', function ($scope) {

    $scope.teste = "Something";
    $scope.alert = alert;
    
    
    //Alert
    //============================================
    function alert(){
        console.log("Something know...");
    }

}])

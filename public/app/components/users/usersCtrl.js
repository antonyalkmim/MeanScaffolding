$app.controller('UsersController', ['$scope', '$http', '$location', 'UserService', function ($scope, $http, $location, UserService) {

    $scope.users = UserService.users;
    $scope.clearUsers = clear;
    $scope.deleteUser = deleteUser;
    $scope.clear = UserService.clear
    $scope.editUser = editUser;
    $scope.addUser = addUser;
    $scope.updateUser = updateUser;
    
    //Clear
    //=====================================
    function clear(){
        UserService.clear(function(){
           $location.path("/users"); 
        });
    }
    
    // DeleteUser
    //=====================================
    function deleteUser(user){
        UserService.remove(user, function(){
           $location.path("/users"); 
        });
    }
    
    // EditNote
    //=====================================
    function editUser(user){
        $scope.newUser = angular.copy(user);
    }
    
    // AddUser
    //=====================================
    function addUser(){
        var user = angular.copy($scope.newUser);
        $scope.newUser = {};
        
        UserService.save(user, function(err){
            if(err) throw err;
            
            $location.path("/users");
        })
    }
    
    
    // UpdateUser
    //=====================================
    function updateUser(){
        var user = angular.copy($scope.newUser);
        $scope.newUser = {};
        
        UserService.edit(user, function(){
            $location.path("/users");
        })
    }
    
    
}])

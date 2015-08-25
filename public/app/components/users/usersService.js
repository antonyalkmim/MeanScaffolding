$app.factory('UserService', ['$http', function ($http) {
    
    var users = []; 
    updateList();
    

    
    //SAVE
    //======================================
    var save = function save(user, callbackSucess, callbackError) {
        $http
            .post('users/add', {
                user : user
            })
            .then(function(data){
                updateList();               
                callbackSucess && callbackSucess(data);
             }, callbackError);
    };
    
    //Edit
    //======================================
    var edit = function edit(user, callbackSucess, callbackError){
        $http
            .post('users/edit', {
                user : user
            })
            .then(function(data){
                updateList();               
                callbackSucess && callbackSucess(data);
             }, callbackError);
    };
    
    //REMOVE
    //======================================
    var remove = function remove(user, callback){
        $http.delete('users/delete/' + user._id)
            .success(function(data){
                users.splice(users.indexOf(user), 1);
            })
            .then(callback);
    }
    
    //CLEAR
    //======================================
    var clear = function clear(callback){
        $http.delete('users/delete/0')
            .success(function(data){
                users.splice(0, users.length);
            })
            .then(callback);
    }
    
    //getUser
    //======================================
    var getUser = function getUser(userId){
        for(var i = 0, len = users.length; i < len; i++){
            if(users[i]._id == userId){
                return users[i];
            } 
        }
        return null; //user not found
    }
    
    
    
    /**
     * PRIVATES METHODS
     */
    function updateList(){
        $http.get('users/list').then(function(data){
            users.splice(0, users.length);
            
            data.data.users.forEach(function(user) {
                users.push(user);   
            });
        });
    }
    

    return {
        users    : users,
        save     : save,
        edit     : edit,
        remove   : remove,
        clear    : clear,
        getUser  : getUser,
    };     
}])
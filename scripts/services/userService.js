app.service("userService",function($http){

    this.getUserInfo = function(reqData, nextStep){
        $http({
            method : "GET",
            url : "https://jsonplaceholder.typicode.com/users"
        }).then(function succesCallback(response){
            nextStep.call(this, response);
        },function errorCallback(response){
            nextStep.call(this, response);
        })
    };
    
    this.getUserTodos = function(reqData, nextStep){
        $http({
            method : "GET",
            url : "https://jsonplaceholder.typicode.com/todos?userId=" + reqData.id

        }).then(function succesCallback(response){
            nextStep.call(this, response);
        },function errorCallback(response){
            nextStep.call(this, response);
        })
    };

    this.addUserTodos = function(reqData, nextStep){
        $http({
            method : "POST",
            url : "https://jsonplaceholder.typicode.com/todos",
            data : reqData
        }).then(function succesCallback(response){
            nextStep.call(this, response);
        },function errorCallback(response){
            nextStep.call(this, response);
        })
    };

    this.deleteUserTodos = function(reqData, nextStep){
        $http({
            method : "DELETE",
            url : "https://jsonplaceholder.typicode.com/todos/" + reqData.id,
            data : reqData
        }).then(function succesCallback(response){
            nextStep.call(this, response);
        },function errorCallback(response){
            nextStep.call(this, response);
        })
    };

    this.updateUserTodos = function(reqData, nextStep){
        $http({
            method : "UPDATE",
            url : "https://jsonplaceholder.typicode.com/todos/" + reqData.id,
            data : reqData
        }).then(function succesCallback(response){
            nextStep.call(this, response);
        },function errorCallback(response){
            nextStep.call(this, response);
        })
    };
});
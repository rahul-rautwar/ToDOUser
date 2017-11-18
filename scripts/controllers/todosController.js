app.controller("todosController",function($scope, $routeParams, userService){


    if($routeParams){
        $scope.userID = $routeParams.userid;
    }else{
        $scope.userID = 1;
    }

    
    $scope.userTodos = [];
    $scope.getTodosData = function(){
        var reqData ={};
        reqData.id= $scope.userID;
        userService.getUserTodos(reqData, function(response, error){
            if(response){
                $scope.userTodos = response.data;
            }
        })
    };
    $scope.getTodosData();

    $scope.addNewTodo = function(){
        var reqData ={};
        reqData.title = $scope.newTodo;
        reqData.userId = $scope.userID;
        reqData.completed = false;
        userService.addUserTodos(reqData, function(response, error){
            if(response){
                alert("Todo Added");
                $scope.getTodosData();
                console.log("Added",response.data);
            }
        })
    };

    $scope.deleteTodo = function(todoID){
        var reqData ={};
        reqData.id = todoID;
        userService.deleteUserTodos(reqData, function(response, error){
            if(response){
                alert("Todo deleted");
                $scope.getTodosData();
               console.log("Deletd",response.data);
            }
        })
    };

    $scope.updateTodo = function(todoID, todoStatus){
        var reqData ={};
        reqData.completed = !todoStatus;
        reqData.id= todoID;
        userService.updateUserTodos(reqData, function(response, error){
            if(response){
                alert("Todo Updated");
                $scope.getTodosData();
                console.log("updated",response.data);
            }
        })
    };
});
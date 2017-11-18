app.controller("userController",function($scope, userService){


    $scope.userData = [];
    $scope.getUserData = function(){
        var reqData ={};
        userService.getUserInfo(reqData, function(response, error){
            if(response){
                $scope.userData = response.data;
            }
        })
    };
    $scope.getUserData();
});
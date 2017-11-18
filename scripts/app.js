var app = angular.module("app",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .otherwise({
        templateUrl : "pages/userCards.html",
        controller : "userController"
        
       /* templateUrl : "pages/userTodos.html",
        controller : "todosController"*/
    })
    .when("/cards",{
        templateUrl : "pages/userCards.html",
        controller : "userController"
    })
    .when("/todos/:userid",{
        templateUrl : "pages/userTodos.html",
        controller : "todosController"
    });

});
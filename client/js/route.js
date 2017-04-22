
// UI Routing setup

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: '../views/home/home.html'
        })
        
        .state('about', {
            url: '/about',
            templateUrl: '../views/about/about.html'
        })

        .state('games', {
            url: '/games',
            templateUrl: '../views/games/games.html'
        })
        
});
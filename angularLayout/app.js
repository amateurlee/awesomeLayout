/***********************************
 ******  app define and config  *****
 ************************************/
// var app = angular.module(
//     'myApp', ['ngRoute']
//
// );
var myApp = angular.module('myApplication', ['ui.router']);

myApp.config(
    function($stateProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    '': {
                        templateUrl: "pages/home.html",
                        controller: "mainController"
                    },
                    'status': {
                        templateUrl: "pages/status.html",
                        controller: 'statusController'
                    }
                }
            })
            .state('about', {
                url: '/about',
                views: {
                    '': {
                        templateUrl: 'pages/about.html',
                        controller: 'aboutController'
                    }
                }
            });
        /////////////// remove # from templateUrl
        // use the HTML5 History API, need a <base href="/"> in <head> tag
        $locationProvider.html5Mode(true);
    }
);


/***********************************
 ******  controller definition  *****
 ************************************/
myApp.controller('mainController', function($scope) {
    $scope.message = "Hi, this main message.";
});

myApp.controller('statusController', function($scope) {
    $scope.message = "Hi, this is status message";
});
myApp.controller('aboutController', function($scope) {
    $scope.message = "Hi, this is about message";
});

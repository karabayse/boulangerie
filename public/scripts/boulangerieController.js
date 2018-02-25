/*** BOULANGERIE CONTROLLER ***/

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'BakeryController',
    controllerAs: 'BakeryController as bc'
  }).when('/macarons', {
    templateUrl: 'views/macarons.html',
    controller: 'BakeryController',
    controllerAs: 'BakeryController as bc'
  }).when('/cake', {
    templateUrl: 'views/cake.html',
    controller: 'BakeryController',
    controllerAs: 'BakeryController as bc'
  }).when('/pie', {
    templateUrl: 'views/pie.html',
    controller: 'BakeryController',
    controllerAs: 'BakeryController as bc'
  }).when('/coffee', {
    templateUrl: 'views/coffee.html',
    controller: 'BakeryController',
    controllerAs: 'BakeryController as bc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
});

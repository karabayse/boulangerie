/*** BOULANGERIE CONTROLLER ***/

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'BakeryController',
    controllerAs: 'BakeryController as bc'
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller: 'BakeryController',
    controllerAs: 'BakeryController as bc'
  }).when('/bakery', {
    templateUrl: 'views/bakery.html',
    controller: 'BakeryController',
    controllerAs: 'BakeryController as bc'
  }).when('/cafe', {
    templateUrl: 'views/cafe.html',
    controller: 'BakeryController',
    controllerAs: 'BakeryController as bc'
  }).when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'BakeryController',
    controllerAs: 'BakeryController as bc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
});

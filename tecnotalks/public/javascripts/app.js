'use strict';


// Declare app level module which depends on filters, and services
angular.module('tecnotalksSite', [
  'ngRoute',
  'tecnotalksSite.services',
  'tecnotalksSite.controllers',
  'restangular'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/agenda', {templateUrl: '/views/agenda.html', controller: 'MyCtrl1'});
  $routeProvider.when('/registro', {templateUrl: '/views/registro.html', controller: 'RegistroCtrl'});
  $routeProvider.when('/sugestoes', {templateUrl: '/views/sugestoes.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);

}]);
'use strict';


// Declare app level module which depends on filters, and services
angular.module('tecnotalksSite', [
  'ngRoute',
  'tecnotalksSite.services',
  'tecnotalksSite.controllers',
  'restangular'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/agenda', {templateUrl: '/views/agenda.html'});
  $routeProvider.when('/evento/novo', {templateUrl: '/views/newAgenda.html', controller: 'EventEditController'});
  $routeProvider.when('/registro', {templateUrl: '/views/registro.html', controller: 'RegistroCtrl'});
  $routeProvider.when('/sugestoes', {templateUrl: '/views/sugestoes.html'});

  $locationProvider.html5Mode(true);

}]);
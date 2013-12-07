'use strict';


// Declare app level module which depends on filters, and services
angular.module('tecnotalksSite', [
  'ngRoute',
  'tecnotalksSite.services',
  'tecnotalksSite.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/agenda', {templateUrl: '/views/agenda.html', controller: 'MyCtrl1'});
  $routeProvider.when('/sugestoes', {templateUrl: '/views/sugestoes.html', controller: 'MyCtrl1'});
  $routeProvider.when('/evento/novo', {templateUrl: '/views/newAgenda.html', controller: 'EventEditController'});

  $routeProvider.otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);

}]);
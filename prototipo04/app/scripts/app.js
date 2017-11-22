'use strict';

/**
 * @ngdoc overview
 * @name psicologiaMirafloresApp
 * @description
 * # psicologiaMirafloresApp
 *
 * Main module of the application.
 */
angular
  .module('psicologiaMirafloresApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/psicologa', {
        templateUrl: 'views/psicologa.html',
        controller: 'PsicologaCtrl',
        controllerAs: 'psicologa'
      })
      .when('/dondeestamos', {
        templateUrl: 'views/dondeestamos.html',
        controller: 'DondeestamosCtrl',
        controllerAs: 'dondeestamos'
      })
      .when('/adultos', {
        templateUrl: 'views/adultos.html',
        controller: 'AdultosCtrl',
        controllerAs: 'adultos'
      })
      .when('/infantil', {
        templateUrl: 'views/infantil.html',
        controller: 'InfantilCtrl',
        controllerAs: 'infantil'
      })
      .when('/parejas', {
        templateUrl: 'views/parejas.html',
        controller: 'ParejasCtrl',
        controllerAs: 'parejas'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

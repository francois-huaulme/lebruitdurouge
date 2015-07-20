'use strict';

/**
 * @ngdoc overview
 * @name lebruitdurougeApp
 * @description
 * # lebruitdurougeApp
 *
 * Main module of the application.
 */
angular
  .module('lebruitdurougeApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    
    $routeProvider
      .when('/home', {
        redirectTo: '/'
      })
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/projects/:projectId', {
        templateUrl: 'views/projects.html', 
        controller: 'ProjectDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

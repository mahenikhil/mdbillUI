"use strict";

var claimApp=angular.module('claimApp',['ui.grid','ui.grid.edit','ui.bootstrap','ngRoute']);

claimApp.config(['$routeProvider',
  	function($routeProvider) {
    $routeProvider
	  .when('/claims', {
        templateUrl: 'views/viewClaim.html',
        controller: 'ClaimController'
      })
	  .when('/claim/:id', {
        templateUrl: 'views/claim.html',
        controller: 'ClaimController'
      })
	  .when('/newClaim', {
        templateUrl: 'views/new-claim.html',
        controller: 'ClaimController'
      })
	  .when('/viewclaim/:id', {
        templateUrl: 'views/view-claim.html',
        controller: 'ClaimController'
      })
	  .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })
	  .when('/logout', {
        templateUrl: 'views/log-out.html',
        controller: 'logOutController'
      })
	  .otherwise({
        redirectTo: '/claims'
      });
  	}]);
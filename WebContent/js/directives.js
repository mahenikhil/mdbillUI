"use strict";
claimApp.directive('topNavMenu', function() {
	  return {
		templateUrl: 'views/topNavigation.html'
	  };
	})
	.directive('viewClaim', function() {
	  return {
		templateUrl: 'views/viewClaim.html'
	  };
	});
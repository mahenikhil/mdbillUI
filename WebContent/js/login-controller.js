"use strict";
claimApp.controller('logOutController',['$rootScope','$location',function($rootScope,$location){
	$rootScope.user = {};
	$location.path('login');
}]);

claimApp.controller('loginController',['$rootScope','$scope','userService','$location',
	function($rootScope,$scope,userService,$location){
	$scope.user = $rootScope.user ? $rootScope.user : {};
	if($scope.user && $scope.user.name){
		$rootScope.user = $scope.user;
		$location.path('claims');
	}else{
		$location.path('login');
	}
		
	$scope.getUsers=function(){
		userService.getUsers().success(function(data,status,headers,config){			
			$scope.users = data;			
		}).error(function(data,status,headers,config){
			$scope.error="Data canot be fetched as service is down";
		});		
	};
		
	$scope.login = function(){
		$scope.getUsers();
		angular.forEach($scope.users, function(value, key) {
			if(value.email == $scope.useEmail && value.password == $scope.userPswd){
				$scope.user = value;
			}
		});
		if($scope.user && $scope.user.name){
			$rootScope.user = $scope.user;
			$location.path('claims');
		}else{
			$location.path('login');
		}
	};	
}]);


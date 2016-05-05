"use strict";

claimApp.controller('ClaimController',['$rootScope','$scope','uiGridConstants','claimService','$modal','$window',"$location",
	function($rootScope,$scope,uiGridConstants,claimService,$modal,$window,$location){
	if(!$rootScope.user){		
		$location.path('login');
	}
	$scope.user = $rootScope.user ? $rootScope.user : {};
	
	$scope.claims =[];
	$scope.claimGrid={
			showColumnFooter:true,
			columnDefs:[
			            {field:'id', visible:false},
						{field:'claimId', displayName:'ID',visible:true},
			            {field:'billingCode',displayName:'Bill Code'},
						{field:'patientName',displayName:'Name of Patient'},
						{field:'location',displayName:'Location'},
			            {field:'insurer',displayName:'Insurer',visible:false},
			            {field:'hospital',displayName:'Hospital',enableSorting: false, enableCellEdit: true},
						{field:'amount',displayName:'Amount'},
						{field:'currentStatus',displayName:'Status'},
						{field:'visitDate',displayName:'visit Date'}						
			           ]
	};
		
	$scope.getClaims=function(){
		var promise=claimService.getClaims();
		promise.success(function(data,status,headers,config){			
			$scope.claimGrid.data=data;
			$scope.claims = data;
		});
		promise.error(function(data,status,headers,config){
			$scope.error="Data canot be fetched as service is down";
		});		
	}	
	$scope.getClaims();
	
	$scope.newClaim = function(){
		$location.path('newClaim');
	};	
}]);
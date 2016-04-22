/**
 * 
 */

var module=angular.module('ClaimApp',['ui.grid','ui.grid.edit','ui.bootstrap']);

module.controller('ClaimController',['$scope','uiGridConstants','ClaimService','$modal',function($scope,uiGridConstants,ClaimService,$modal){
	
	$scope.claimGrid={
			showColumnFooter:true,
			columnDefs:[
			            {field:'id', visible:false},
			            {field:'patientName',displayName:'Name of Patient'},
			            {field:'insurer',displayName:'Insurer'},
			            {field:'hospital',displayName:'Hospital'},
			            {field:'billCode',displayName:'Bill Code'}
			           ]
	};
		
	$scope.getClaims=function(){
		var promise=ClaimService.getClaims();
		promise.success(function(data,status,headers,config){
			
			$scope.claimGrid.data=data;
		});
		promise.error(function(data,status,headers,config){
			$scope.error="Data canot be fetched as service is down";
		});
		
	}
	
	$scope.getClaims();
		
}]);

module.service('ClaimService',['$http',function($http){
	
	this.getClaims=function(){
		return $http.get('/mdbill/claims');
		
	}
}]);



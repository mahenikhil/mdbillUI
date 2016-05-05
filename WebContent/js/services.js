"use strict";
claimApp.service('claimService',['$http',function($http){	
	this.getClaims=function(){
		return $http.get('/MDBills/json/claims.json');		
	}
}])
.service('userService',['$http',function($http){	
	this.getUsers=function(){
		return $http.get('/MDBills/json/users.json');		
	}
}])
;

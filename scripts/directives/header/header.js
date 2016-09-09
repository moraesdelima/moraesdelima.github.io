(function() {

	'use strict';

	/**
	 * @ngdoc directive
	 * @name izzyposWebApp.directive:adminPosHeader
	 * @description
	 * # adminPosHeader
	 */
	angular.module('sbAdminApp')
		.directive('header',header);

	function header(){
			return {
	        templateUrl:'scripts/directives/header/header.html',
	        restrict: 'E',
	        replace: true,
	    	}
		}

})();
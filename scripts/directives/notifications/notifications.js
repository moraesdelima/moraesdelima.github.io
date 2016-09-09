(function() {

	'use strict';

	/**
	 * @ngdoc directive
	 * @name izzyposWebApp.directive:adminPosHeader
	 * @description
	 * # adminPosHeader
	 */
	angular.module('sbAdminApp')
		.directive('notifications',notifications);

	function notifications(){
			return {
	        templateUrl:'scripts/directives/notifications/notifications.html',
	        restrict: 'E',
	        replace: true,
	    	}
		}

})();
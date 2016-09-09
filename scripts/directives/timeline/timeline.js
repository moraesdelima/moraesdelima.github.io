(function() {

	'use strict';

	/**
	 * @ngdoc directive
	 * @name izzyposWebApp.directive:adminPosHeader
	 * @description
	 * # adminPosHeader
	 */
	angular.module('sbAdminApp')
		.directive('timeline',timeline);

	function timeline() {
	    return {
	        templateUrl:'scripts/directives/timeline/timeline.html',
	        restrict: 'E',
	        replace: true,
	    }
	  }

})();
(function() {

	'use strict';

	/**
	 * @ngdoc directive
	 * @name izzyposWebApp.directive:adminPosHeader
	 * @description
	 * # adminPosHeader
	 */
	angular.module('sbAdminApp')
		.directive('chat',chat);

	function chat(){
		return {
        templateUrl:'scripts/directives/chat/chat.html',
        restrict: 'E',
        replace: true,
    	}
	}

})();
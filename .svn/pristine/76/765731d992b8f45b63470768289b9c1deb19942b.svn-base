(function () {

	'use strict';

	angular
		.module('webl')
		.directive('webl', webl);

	function webl (weblService) {

		var directive = {
			restrict: 'E',
			controller: weblController,
			link: link
		};

		return directive;


		function link(scope, elem, attr) {
			if (attr.val != null) {
				elem.html(scope.returnLabel(attr.val));
			}
			scope.$on('labelUpdate', function () {
				elem.html(scope.returnLabel(attr.val));
			});
		}
	}

	weblController.$inject = ['$rootScope', '$scope', 'weblService'];
	/* @ngInect */
	function weblController($rootScope, $scope, weblService) {
		$scope.returnLabel = function (functionName) {
			return weblService.returnLabel(functionName, $rootScope.label);
		};
	}
})();
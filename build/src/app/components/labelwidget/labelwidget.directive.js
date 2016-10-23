(function() {
	'use strict';

	angular
		.module('pstApp')
		.directive('pstLabel', widget);

	widget.$inject = ['LabelWidgetService'];
	/* @ngInject */
	function widget(LabelWidgetService) {

		var directive = {
			template: '<label>{{label}}</label>',
			restrict: 'E',
			scope: {
				labelKey: '@value'
			},
			replace: true,
			link: link
		};

		return directive;

		///////////////////////////////////

		function link(scope) {

			//--- Set label based on designated labelKey
			// scope.label = LabelWidgetService.getLabel(scope.labelKey);
			getLabels().then(function(results) {
				scope.label = results[scope.labelKey];
			})
			.catch(function(error) {
				$log.warn(error);
			});
		}

		function getLabels() {
			return LabelWidgetService.getLabelData('english');
		}
	}
})();

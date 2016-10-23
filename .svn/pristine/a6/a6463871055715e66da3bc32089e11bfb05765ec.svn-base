(function() {
	'use strict';

	angular
		.module('pstApp')
		.factory('LabelWidgetService', LabelWidgetService);

	LabelWidgetService.$inject = ['DataService', 'urlaestheticservice'];
	/* @ngInject */
	function LabelWidgetService(DataService, urlaestheticservice) {

		var service = {
			getLabelData: getLabelData,
			getLabel: getLabel
		};

		return service;

		///////////////////////////////////

		//----------------------------------------------------------
		// Returns label data.
		//----------------------------------------------------------
		function getLabelData(language) {
			return DataService.getLabelData(language)
				.then(function(results) {
					DataService.setLocalStorage('labels', results.data.results.labelMap);
					return results.data.results.labelMap;
				})
				.catch(function(error) {
					return error;
				});
		}

		//----------------------------------------------------------
		// Returns the value of the label that matches the label parameter.
		//----------------------------------------------------------
		function getLabel(label){
			var labels = DataService.getLocalStorage('labels');

			if(labels !== undefined){
				return labels[label];
			} else {
				return '';
			}
		}
	}
})();
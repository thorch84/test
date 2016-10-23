(function () {
	'use strict';

	angular
		.module('pstApp')
		.service('CompareRecords', CompareRecords);


	function CompareRecords() {
        this.selectedPlans = [];
    }
})();
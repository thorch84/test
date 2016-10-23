(function () {
	'use strict';

	angular
		.module('pstApp')
		.service('multipleCountyService', multipleCountyService);

    multipleCountyService.$inject = ['$uibModal'];

	function multipleCountyService($uibModal) {
        var svc = {}; 

        svc.open = function(countyArr, success, dismiss){
            var modalInstance = $uibModal.open({
                backdrop  : 'static',
                keyboard  : false,
                templateUrl: "routes/multipleCounty/multipleCounty.tpl.html",
                controller: "multipleCountyCtrl as multipleCountyCtrl",
                size: "md",
                resolve: {
                    countyArr: function () {
                        return countyArr;
                    }
                }
            });

            modalInstance.result.then(success, dismiss);
        };
        return svc;
    }
})();
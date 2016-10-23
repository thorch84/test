(function () {
	'use strict';

	angular
		.module('pstApp')
		.service('comparePlansErrorModalService', comparePlansErrorModalService);

    comparePlansErrorModalService.$inject = ['$uibModal'];

	function comparePlansErrorModalService($uibModal) {
        var svc = {}; 

        svc.open = function(success, dismiss){
            var modalInstance = $uibModal.open({
                templateUrl: "routes/comparePlansErrorModal/comparePlansErrorModal.tpl.html",
                controller: "comparePlansErrorModalCtrl as comparePlansErrorModalCtrl",
                size: "md"
            });

            modalInstance.result.then(success, dismiss);
        };
        return svc;
    }
})();
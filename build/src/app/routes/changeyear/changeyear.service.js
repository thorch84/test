(function () {
	'use strict';

	angular
		.module('pstApp')
		.service('changeYearService', changeYearService);
    
    changeYearService.$inject = ['$uibModal'];

	function changeYearService($uibModal) {
        var svc = {}; 

        svc.open = function(success, dismiss){
            var modalInstance = $uibModal.open({
                templateUrl: "routes/changeyear/changeyear.tpl.html",
                controller: "changeYearCtrl as changeYearCtrl",
                size: "md"
            });

            modalInstance.result.then(success, dismiss);
        };
        return svc;
    }
})();
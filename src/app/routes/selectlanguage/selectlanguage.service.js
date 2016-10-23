(function () {
	'use strict';

	angular
		.module('pstApp')
		.service('selectLanguageService', selectLanguageService);
    
    selectLanguageService.$inject = ['$uibModal'];

	function selectLanguageService($uibModal) {
        var svc = {}; 

        svc.open = function(success, dismiss){
            var modalInstance = $uibModal.open({
                templateUrl: "routes/selectlanguage/selectlanguage.tpl.html",
                controller: "selectLanguageCtrl as selectLanguageCtrl",
                size: "md"
            });

            modalInstance.result.then(success, dismiss);
        };
        return svc;
    }
})();
(function () {
	'use strict';

	angular
		.module('pstApp')
		.service('needHelpService', needHelpService);
    
    needHelpService.$inject = ['$uibModal'];

	function needHelpService($uibModal) {
        var svc = {}; 

        svc.open = function(success, dismiss){
            var modalInstance = $uibModal.open({
                templateUrl: "routes/needhelp/needhelp.tpl.html",
                controller: "needHelpCtrl as needHelpCtrl",
                size: "md"
            });

            modalInstance.result.then(success, dismiss);
        };
        return svc;
    }
})();
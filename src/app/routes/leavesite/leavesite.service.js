(function () {
	'use strict';

	angular
		.module('pstApp')
		.service('leaveSiteService', leaveSiteService);
    
    leaveSiteService.$inject = ['$uibModal'];

	function leaveSiteService($uibModal) {
        var svc = {}; 

        svc.open = function(leaveSiteInfo, success, dismiss){
            var modalInstance = $uibModal.open({
                templateUrl: "routes/leavesite/leavesite.tpl.html",
                controller: "leaveSiteCtrl as leaveSiteCtrl",
                size: "md",
                resolve: {
                    leaveSiteInfo : function(){return leaveSiteInfo;}
                }
            });

            modalInstance.result.then(success, dismiss);
        };
        return svc;
    }
})();
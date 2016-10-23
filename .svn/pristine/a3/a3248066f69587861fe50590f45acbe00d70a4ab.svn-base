(function () {
	'use strict';

	angular
		.module('pstApp')
		.service('contactUsService', contactUsService);
    
    contactUsService.$inject = ['$uibModal'];

	function contactUsService($uibModal) {
        var svc = {}; 

        svc.open = function(success, dismiss){
            
            var modalInstance = $uibModal.open({
                templateUrl: "routes/contactus/contactus.tpl.html",
                controller: "contactUsCtrl as contactUsCtrl",
                size: "md"
            });

            modalInstance.result.then(success, dismiss);
        };
        return svc;
    }
})();
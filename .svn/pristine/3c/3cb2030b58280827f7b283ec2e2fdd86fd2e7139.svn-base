(function () {
    'use strict';

    angular
        .module('pstApp')
        .service('zipCodeSearchService', zipCodeSearchService);

    zipCodeSearchService.$inject = ['$uibModal'];

    function zipCodeSearchService($uibModal) {
        var svc = {};

        svc.open = function(success, dismiss){
            var modalInstance = $uibModal.open({
                backdrop  : 'static',
                keyboard  : false,
                templateUrl: "routes/zipCodeSearch/zipCodeSearch.tpl.html",
                controller: "zipCodeSearchCtrl as zipCodeSearchCtrl",
                size: "md"
            });

            modalInstance.result.then(success, dismiss);
        };
        return svc;
    }
})();
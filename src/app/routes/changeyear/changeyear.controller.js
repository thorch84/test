(function () {
    'use strict';

    angular
        .module('pstApp')
        .controller('changeYearCtrl', changeYearCtrl);

    changeYearCtrl.$inject = ['$rootScope', '$uibModalInstance', '$window'];
    /* @ngInject */
    function changeYearCtrl($rootScope, $uibModalInstance, $window) {
        var self = this;

        self.title = $rootScope.labels['pst.plan.name'];
        self.message = $rootScope.config['pst.2016.msg'];
        
        self.changeYear = function() {
            $window.open($rootScope.config['pst.2016.url'], '_blank');
            $uibModalInstance.dismiss();
        };

        self.close = function () {
            $uibModalInstance.dismiss();
        };
    }
})();
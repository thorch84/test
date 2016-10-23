(function () {
    'use strict';

    angular
        .module('pstApp')
        .controller('leaveSiteCtrl', leaveSiteCtrl);

    leaveSiteCtrl.$inject = ['$rootScope', '$scope', '$uibModalInstance', '$location', 'leaveSiteInfo'];
    /* @ngInject */
    function leaveSiteCtrl($rootScope, $scope, $uibModalInstance, $location, leaveSiteInfo) {
        var self = this;

        self.message = $rootScope.labels['pst.site.leave.warning'];
        self.glossaryOfTermsUrl = leaveSiteInfo.url;
        self.siteAddress = leaveSiteInfo.planName;

        self.close = function () {
            $uibModalInstance.dismiss();
        };
    }
})();
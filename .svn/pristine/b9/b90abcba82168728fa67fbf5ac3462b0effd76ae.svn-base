(function () {
    'use strict';

    angular
        .module('pstApp')
        .controller('multipleCountyCtrl', multipleCountyCtrl);

    multipleCountyCtrl.$inject = ['countyArr', '$scope', '$uibModalInstance'];
    /* @ngInject */
    function multipleCountyCtrl(countyArr, $scope, $uibModalInstance) {
        var self = this;
        self.countyArr = countyArr;
        self.selectedCounty = undefined;

        self.close = function () {
            $uibModalInstance.dismiss();
        };
        self.continue = function() {
            if(self.selectedCounty) {
                
                $uibModalInstance.close(self.selectedCounty);
            }
        };

    }
})();
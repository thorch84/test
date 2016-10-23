(function () {
    'use strict';

    angular
        .module('pstApp')
        .controller('zipCodeSearchCtrl', zipCodeSearchCtrl);

    zipCodeSearchCtrl.$inject = ['$scope', '$uibModalInstance'];
    /* @ngInject */
    function zipCodeSearchCtrl($scope, $uibModalInstance) {
        var self = this;
        
        self.close = function () {
            $uibModalInstance.dismiss();
        };
        self.Go = function() {
            if(self.zipCode) {
                $uibModalInstance.close(self.zipCode);
            }
        };

    }
})();
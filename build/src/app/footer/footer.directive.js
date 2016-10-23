(function() {
    'use strict';
    
    angular
        .module('pstApp')
        .directive('footer', widget);

    function widget() {

        var directive = {
            templateUrl: 'footer/footer.tpl.html',
            restrict: 'EA',
            controller: footerController
        };

        return directive;
    }

    footerController.$inject = ['$rootScope', '$scope', '$http'];

    function footerController($rootScope, $scope, $http) {
        $rootScope.$on('labelUpdate', function () {
            $scope.contractContent = $rootScope.labels['pst.footer.medicatecontract'];
            $scope.materialId = $rootScope.labels['pst.footer.materialid'];
            $scope.approvedDate = $rootScope.labels['pst.footer.cmsapproved'];
            $scope.updatedDate = $rootScope.labels['pst.footer.updatedate'];
            $scope.disclaimer = $rootScope.labels['pst.footer.disclaimer'];
            $scope.healthplanname = $rootScope.labels['pst.msg.plan.name'];
            $scope.contactusURL= $rootScope.labels['pst.contact.url'];
        });
        $rootScope.$on('configUpdate', function(){
            $scope.additionaldisclaimer=$rootScope.config['pst.additional.disclaimer.insp'];
        });
        
        $scope.getFooterClass = function() {
            if($scope.selectedPlans) {
                if($scope.selectedPlans.length === 0) {
                    return 'cms-info';
                }else {
                    return 'cms-info-compare-visible';
                }
            }
            return 'cms-info';
        };


        $http.get('target/classes/version.properties').then(function (response) {
            $scope.timestamp = response.data.timestamp;
        });
    }
})();
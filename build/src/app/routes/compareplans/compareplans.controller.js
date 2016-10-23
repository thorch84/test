(function () {
    'use strict';

    angular
        .module('pstApp')
        .controller('comparePlansCtrl', comparePlansCtrl);

    comparePlansCtrl.$inject = ['$scope', '$rootScope', 'plansService', '$location'];
    /* @ngInject */
    function comparePlansCtrl($scope, $rootScope, plansService, $location) {
        var searchData = plansService.searchData;

        $scope.currentHelpImage = "help-plan-comparison";
        $scope.currentImageRatio = 1.05;
        $scope.selectcaredrugscopay = $rootScope.config['pst.plan.selectcaredrugscopay.display'];
        $scope.applyOnlineDisabledMsg = $rootScope.labels['pst.text.disable.applynow'];
        $scope.path = $location.path();
        $scope.counter=0;

        $scope.removeComparePlans = function(removeVal){
            var index = $scope.selectedPlans.indexOf(removeVal);
            $scope.selectedPlans.splice(index, 1);
            if($scope.selectedPlans.length==1) {
                $location.path('/#/plans');
            }
        };

        $scope.isSupplementEmpty = function(plan) {
            var value =_.isEmpty(plan.supplementalPlan);
            return value;
        };

        $scope.whatClassisit = function (someValue) {
            if (someValue == "TBD") {
                return "coverage-disable";
            }
            else {
                return "coverage-enable";
            }
        };

        $scope.isTrilliumSNP = function(plan) {
            var planName = plan.planName,
                isSNP = planName.indexOf('HMO SNP') > 1,
                value = $scope.url === 'trilliumadvantage' && isSNP;
            return value;
        };
        
    }
})();
(function () {
    'use strict';

    angular
        .module('pstApp')
        .controller('plansCtrl', plansCtrl);

    plansCtrl.$inject = ['$rootScope', '$scope', '$routeParams', '$location', 'plansService',
                        'comparePlansErrorModalService', 'urlaestheticservice'];
    /* @ngInject */
    function plansCtrl($rootScope, $scope, $routeParams, $location, plansService,
                       comparePlansErrorModalService, urlaestheticservice) {

        $scope.starRatingsURL=$rootScope.labels['pst.starratings.url'];
        $scope.starRatingsBaseUrl = $rootScope.labels['pst.sr.pdf.baseurl'];
        $scope.applyOnlineDisabledMsg = $rootScope.labels['pst.text.disable.applynow'];
        $scope.path = $location.path();
        $scope.url = urlaestheticservice.getUrl();

        $scope.isTrilliumSNP = function(plan) {
            var planName = plan.planName,
                isSNP = planName.indexOf('HMO SNP') > 1,
                value = $scope.url === 'trilliumadvantage' && isSNP;
            return value;
        };
        $scope.planId = $routeParams.planId;
        
        $scope.findWithAttr = function (array, attr, value) {
            for (var i = 0; i < array.length; i += 1) {
                if (array[i][attr] === value) {
                    return i;
                }
            }
        };
        

        $scope.isPlanSelected = function (planId) {
            return _.find($scope.selectedPlans, function(selectedPlan) {
                return selectedPlan.planId === planId;
            });
        };

        $scope.productCompare = function (plan, isPlanSelected) {
            $scope.disableCheckBox = false;

            if (isPlanSelected) {
                if ($scope.selectedPlans.length >= 3) {
                    comparePlansErrorModalService.open(function () {
                        $scope.disableCheckBox = true;
                    }, function () {

                    });
                    return false;
                } else {
                    $scope.selectedPlans.push(plan);
                }

            }
            else {
                var index = $scope.selectedPlans.indexOf(plan);
                $scope.selectedPlans.splice(index, 1);
            }
        };

        $scope.goToPlanDetail = function() {
            $location.url('plan-detail/' + $scope.heading);
        };

        $scope.removeValue = function (array, id) {
            return _.reject(array, function (item) {
                return item === id;
            });
        };

        $scope.removePlanFromCompare = function (planId) {
            console.log("planId:" + planId);
        };

        $scope.selectedPlan = function (plan) {
            if (plan.planId == $scope.planId) {
                return (plan);
            }
        };
    }
})();
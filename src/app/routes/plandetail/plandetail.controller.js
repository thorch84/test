(function () {
    'use strict';

    angular
        .module('pstApp')
        .controller('planDetailCtrl', planDetailCtrl);

    planDetailCtrl.$inject = ['$rootScope', '$scope', '$http', 'urlaestheticservice', '$routeParams', 'plansService', '$location'];
    /* @ngInject */
    function planDetailCtrl($rootScope, $scope, $http, urlaestheticservice, $routeParams, plansService, $location) {
        $scope.sobPdfBaseUrl = $rootScope.labels['pst.sob.pdf.baseurl'];
        $scope.eocPdfBaseUrl = $rootScope.labels['pst.eoc.pdf.baseurl'];
        $scope.eaPdfBaseUrl = $rootScope.labels['pst.ea.pdf.baseurl'];
        $scope.lisPdfBaseUrl = $rootScope.labels['pst.lis.pdf.baseurl'];
        $scope.drugsFormularyUrl = $rootScope.labels['pst.drugs.formulary.url'];
        $scope.starRatingsBaseUrl = $rootScope.labels['pst.sr.pdf.baseurl'];
        $scope.comparePlansBaseUrl = $rootScope.labels['pst.cp.pdf.baseurl'];
        $scope.healthyDiscountsBaseUrl = $rootScope.labels['pst.hdiscount.pdf.baseurl'];
        $scope.languagePDF=$rootScope.labels['pst.language.assistance.url'];
        $scope.applyOnlineDisabledMsg = $rootScope.labels['pst.text.disable.applynow'];
        $scope.url = urlaestheticservice.getUrl();
        $scope.planID = $routeParams.planId;
        $scope.path = $location.path();

        var fapBaseUrl;
        if($scope.url === 'healthnet') {
            fapBaseUrl = $rootScope.config['pst.providersearch.detail.url'];
        }else {
            fapBaseUrl = $rootScope.config['pst.providersearch.url'];
        }


        var searchData = plansService.searchData;

        $scope.selectedPlan = _.filter($scope.userInfo, {'planId': $scope.planID})[0];

        if($scope.selectedPlan) {
            $scope.selectedPlan.starRatings = $scope.selectedPlan.starRatings.replace(/(\d+(\.\d+)?).*/, "$1");

            $scope.selectedPlan.applyNowUrl = $scope.buildApplyNowUrl($scope.selectedPlan);

            if ($scope.selectedPlan.state === "CA") {
                $scope.requestInfo = $rootScope.config['pst.detail.requestinfo.url.ca'];
            }
            else if ($scope.selectedPlan.state === "OR") {
                $scope.requestInfo = $rootScope.config['pst.detail.requestinfo.url.or'];
            }
            else if ($scope.selectedPlan.state === "AZ") {
                $scope.requestInfo = $rootScope.config['pst.detail.requestinfo.url.az'];
            }
            else if ($scope.selectedPlan.state === "WA") {
                $scope.requestInfo = $rootScope.config['pst.detail.requestinfo.url.wa'];
            }
            else {
                $scope.requestInfo = $rootScope.config['pst.detail.requestinfo.url'];
            }

            $rootScope.$broadcast('summaryOfBenefitsPdf', $scope.selectedPlan.resourceURLs.summaryOfBenefits);

            $scope.isTrilliumSNP = isTrilliumSNP();


            $scope.fapUrl = fapBaseUrl + '?isMedicare=true&zipCode=' + searchData.zipCode +
                '&productId=' + $scope.selectedPlan.planId + '&planRegion=' + $scope.selectedPlan.state +
                '&county=' + $scope.searchData.county + '&year=' + searchData.year;
            
            $rootScope.$broadcast('fapUrl', $scope.fapUrl);
        }

        $scope.isEmptyObj = function(obj) {
            return _.isEmpty(obj);
        };

        $rootScope.$on('labelUpdate', function () {
            $scope.fapLabel = $rootScope.labels['pst.fap.label'];
        });

        $scope.currentHelpImagedetails = "help-plan-details";
        $scope.currentImageRatio=1.05;

        function isTrilliumSNP() {
            var planName = $scope.selectedPlan.planName,
                isSNP = planName.indexOf('HMO SNP') > 1,
                value = $scope.url === 'trilliumadvantage' && isSNP;
            return value;
        }
    }
})();
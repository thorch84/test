(function () {
    'use strict';

    angular
        .module('pstApp')
        .directive('sidebar', widget);

    widget.$inject = ['$location', 'urlaestheticservice'];
    /* @ngInject */
    function widget($location, urlaestheticservice) {

        return {
            templateUrl: 'sidebar/sidebar.tpl.html',
            restrict: 'EA',
            link: function (scope, element, attrs) {

            },
            controller: sideBarCtrl
        };
    }

    sideBarCtrl.$inject = ['$rootScope', '$scope', 'leaveSiteService'];
    /* @ngInject */
    function sideBarCtrl($rootScope, $scope, leaveSiteService) {
        $scope.showSummaryOfBenefits = false;
        $scope.glossaryOfTerms = function () {
            var leaveSiteInfo = {
                'planName': $scope.pstPlanName,
                'url': $scope.glossaryOfTermsUrl
            };
            
            leaveSiteService.open(leaveSiteInfo, function () {

            }, function () {

            });
        };

        $rootScope.$on('summaryOfBenefitsPdf', function (event, data) {
            $scope.summaryOfBenefitsPdf = data;
        });

        var fapUrl_backup;
        $rootScope.$on('configUpdate', function (event, data) {
            $scope.fapUrl = $rootScope.config['pst.providersearch.url'];
            fapUrl_backup = $scope.fapUrl;
            $scope.companyName = $rootScope.config['pst.company.name'];
            $scope.accessibility = $rootScope.config['pst.menu.accessibility.enable'];
        });

        $rootScope.$on('labelUpdate', function (event, data) {
            $scope.glossaryOfTermsUrl = $rootScope.labels['pst.glossaryofterms.url'];
            $scope.languageAssistanceUrl = $rootScope.labels['pst.language.assistance.url'];
            $scope.contactUrl = $rootScope.labels['pst.contact.url'];
            $scope.starRatingsUrl = $rootScope.labels['pst.starratings.url'];
            $scope.privacyPolicyUrl = $rootScope.labels['pst.privacy.policy.url'];
            $scope.formsBrochuresUrl = $rootScope.labels['pst.forms.brochures.url'];
            $scope.accessabilityInfoUrl = $rootScope.labels['pst.accessability.information.url'];
            $scope.registrationUrl = $rootScope.labels['pst.registration.url'];
            $scope.sobPdfBaseUrl = $rootScope.labels['pst.sob.pdf.baseurl'];
            $scope.phone1 = $rootScope.labels['pst.contactus.phone1'];
            $scope.fapLabel=$rootScope.labels['pst.fap.label'];
            $scope.needToFinishUrl=$rootScope.labels['pst.menu.onlineenrollment'];
            $scope.pstPlanName = $rootScope.labels['pst.plan.name'];
        });

        $rootScope.$on('summaryOfBenefitsPdf', function (event, data) {
            $scope.summaryOfBenefitsPdf = data;
        });

        $rootScope.$on('fapUrl', function (event, data) {
            $scope.fapUrl = data;
        });

        $scope.$on("$routeChangeSuccess", function (event, current, previous) {
            if(current.$$route != null && current.$$route.originalPath.indexOf('plan-detail') > -1) {
                $scope.showSummaryOfBenefits = true;
            } else {
                $scope.showSummaryOfBenefits = false;
                $scope.fapUrl = fapUrl_backup;
            }
        });
    }
})();
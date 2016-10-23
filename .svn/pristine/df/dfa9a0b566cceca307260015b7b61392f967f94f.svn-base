(function () {
    'use strict';

    angular
        .module('pstApp')
        .directive('topNavbar', widget);

    widget.$inject = ['$rootScope', '$location', 'urlaestheticservice'];
    /* @ngInject */
    function widget($rootScope, $location, urlaestheticservice) {

        return {
            templateUrl: 'topNavbar/topNavbar.tpl.html',
            restrict: 'EA',
            link: function (scope, element, attrs) {
                scope.url = urlaestheticservice.getUrl();

                element.find('#contact-header-link').on('click', function() {
                     element.addClass('trigger');
                });
            },
            controller: topNavbarCtrl
        };
    }


    topNavbarCtrl.$inject = ['$rootScope', '$scope', 'urlaestheticservice'];
    /* @ngInject */
    function topNavbarCtrl($rootScope, $scope, urlaestheticservice) {

        $scope.contactUsPopover = {            
            templateUrl: 'routes/contactus/contactus.tpl.html',
            isHealthNetSite: (urlaestheticservice.getUrl() == "healthnet") ? true : false
        };

        $scope.getContactsUrl = function() {
            if($scope.planTypes.HMO) {
                return 'routes/contactus/contactus.tpl.html';
            }
        };
        
        $rootScope.$on('configUpdate', function (event, data) {
            $scope.companyName = $rootScope.config['pst.company.name'];
        });

        $rootScope.$on('labelUpdate', function (event, data) {
            $scope.phone1 = $rootScope.labels['pst.contactus.phone1'];
            $scope.phone2 = $rootScope.labels['pst.contactus.phone2'];
        });

        $scope.$on('state', function(event, args) {

            $scope.state = args.state;
            var url = urlaestheticservice.getUrl();

            if($scope.state === "AZ" &&  url !== 'bridgewayhs') {
                $scope.phone1 = $rootScope.labels['pst.contactus.phone1.az'];
            }else if($scope.state === "OR" && url !== 'trilliumadvantage') {
                $scope.phone1 = $rootScope.labels['pst.contactus.phone1.or'];
            }else {
                $scope.phone1 = $rootScope.labels['pst.contactus.phone1'];
            }
        });
        
        $scope.$watch('planTypes', function(value){
            $scope.planTypes = value;
        });

        $scope.getHeaderStyle = function() {
            var url = urlaestheticservice.getUrl();
            if(url === 'sunshinehealth' || url === 'magnoliahealthplan' || url === 'pshpgeorgia') {
                return 'pstHeaderInverseOrange';
            }else if(url === 'buckeyehealthplan') {
                return 'pstHeaderInverseLimeGreen';
            }
            else if(url === 'trilliumadvantage') {
                return 'pstHeaderInverseGreen';
            }
            else {
                return 'pstHeader';
            }
        };
    }
})();
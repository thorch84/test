(function() {
    'use strict';
    
    angular
        .module('pstApp')
        .directive('loadingIndicator', widget);
            
        function widget() {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/loading-indicator.tpl.html',
            scope: {
                ngModel: '='
            },
            controller: loadingIndicatorCtrl
        };
    }

    loadingIndicatorCtrl.$inject = ['$scope', 'urlaestheticservice'];
    
    function loadingIndicatorCtrl($scope, urlaestheticservice) {
        
        $scope.getStroke = function() {
            var url = urlaestheticservice.getUrl();
            if(url === 'sunshinehealth' || url === 'magnoliahealthplan' || url === 'pshpgeorgia') {
                return 'orangeStroke';
            }if(url === 'superiorhealthplan' || url === 'bridgewayhs' || url === 'mhswi') {
                return 'pinkStroke';
            }else if(url === 'buckeyehealthplan') {
                return 'limeGreenStroke';
            }
            else if(url === 'trilliumadvantage') {
                return 'greenStroke';
            }
            else {
                return 'cyanStroke';
            }      
        };
    }
})();
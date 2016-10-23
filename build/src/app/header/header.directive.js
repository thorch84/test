(function() {
    'use strict';

    angular
        .module('pstApp')
        .directive('header', widget);

    function widget() {

        var directive = {
            templateUrl: 'header/header.tpl.html',
            restrict: 'EA'
        };

        return directive;
    }
})();
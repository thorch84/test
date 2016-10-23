(function () {
    'use strict';

    angular
        .module('pstApp')
        .directive('zipcodeValidate', widget);

    function widget() {

        return {
            require:'ngModel',
            link: function (scope, element, attrs, mCtrl) {
                function zipValidation(value) {
                    if(value!=='') {
                        var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
                        mCtrl.$setValidity('charE', isValidZip);
                        return value;
                    }
                }
                mCtrl.$parsers.push(zipValidation);
            }
        };
    }
})();
(function () {
    'use strict';

    angular
        .module('pstApp')
        .directive('zipcodeAnimate', widget);

    function widget() {

        return {
            link: function (scope, element, attrs, mCtrl) {

                element.on('click', function(event) {
                    event.preventDefault();
                    var newElement = element.find('.zipForm div');
                    console.log('newElement:' + newElement);
                    element.children('div').addClass('active');
                });
            }
        };
    }
})();
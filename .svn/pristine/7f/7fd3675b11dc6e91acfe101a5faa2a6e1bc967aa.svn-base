(function () {
	'use strict';

	angular
		.module('pstApp')
		.factory('filterSliderService', filterSliderService);
    
	function filterSliderService() {

        return {
            getCostPerMonth: getCostPerMonth,
            getOopMax: getOopMax
        };

        function getCostPerMonth(plans) {

            var filterSlider = {
                minMonthlyPremium: minValueOfPropertyFromArrayOfObjects(plans, 'monthlyPremium'),
                maxMonthlyPremium: maxValueOfPropertyFromArrayOfObjects(plans, 'monthlyPremium')
            };

            var costPerMonth = {
                minValue: filterSlider.minMonthlyPremium,
                maxValue: filterSlider.maxMonthlyPremium,
                options: {
                    floor: filterSlider.minMonthlyPremium,
                    ceil: filterSlider.maxMonthlyPremium,
                    step: 0.1,
                    precision: 2,
                    rightToLeft: true,
                    translate: function(value) {
                        return '$' + value;
                    }
                }
            };

            return costPerMonth;
        }

        function getOopMax(plans) {

            var filterSlider = {
                minOopMax: minValueOfPropertyFromArrayOfObjects(plans, 'medicalCoverage.oopMax'),
                maxOopMax: maxValueOfPropertyFromArrayOfObjects(plans, 'medicalCoverage.oopMax')
            };

            var oopMax = {
                minValue: filterSlider.minOopMax,
                maxValue: filterSlider.maxOopMax,
                options: {
                    floor: filterSlider.minOopMax,
                    ceil: filterSlider.maxOopMax,
                    step: 0.1,
                    precision: 2,
                    rightToLeft: true,
                    translate: function(value) {
                        return '$' + value;
                    }
                }
            };

            return oopMax;
        }

        function minValueOfPropertyFromArrayOfObjects(inputArray, property) {
            var PropertyValues = _.map(inputArray, property);
            var value = _.map(PropertyValues, function (PropertyValue) {
                PropertyValue = PropertyValue.substring(PropertyValue.indexOf("-") + 2); // to remove the range and get the max range limit
                return parseFloat(_.trim(PropertyValue, '$').replace(/,/g, '')); // to remove the dollar and commas in the price
            });
            return _.min(value);
        }

        function maxValueOfPropertyFromArrayOfObjects(inputArray, property) {
            var PropertyValues = _.map(inputArray, property);
            var value = _.map(PropertyValues, function (PropertyValue) {
                PropertyValue = PropertyValue.substring(PropertyValue.indexOf("-") + 2); // to remove the range and get the max range limit
                return parseFloat(_.trim(PropertyValue, '$').replace(/,/g, '')); // to remove the dollar and commas in the price
            });
            return _.max(value);
        }

    }
})();
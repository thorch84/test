(function () {
    'use strict';

    angular
        .module('pstApp')
        .factory('filterService', filterService);

    function filterService() {

        return {
            getFilteredPlans: getFilteredPlans,
            saveFilterResult: saveFilterResult
        };

        function getFilteredPlans(filteredUserInfo, costPerMonth, oopMax, planType, pharmacyCoverage) {
            var planTypeFilteredPlans = [],
                UniquePlanTypeFilteredPlan = [],
                planTypeCount = 0;
            
            if (costPerMonth.minValue > costPerMonth.options.floor || costPerMonth.maxValue < costPerMonth.options.ceil) {
                filteredUserInfo = _.filter(filteredUserInfo, function (userInfo) {
                    var  propertyValue = userInfo.monthlyPremium;
                    propertyValue = propertyValue.substring(propertyValue.indexOf("-") + 2);
                    propertyValue = parseFloat(_.trim(propertyValue, '$').replace(/,/g, ''));
                    return (costPerMonth.minValue  <= propertyValue && propertyValue <= costPerMonth.maxValue);
                });
            }

            if (oopMax.minValue > oopMax.options.floor || oopMax.maxValue < oopMax.options.ceil) {
                filteredUserInfo= _.filter(filteredUserInfo, function (userInfo) {
                    var  propertyValue = userInfo.medicalCoverage.oopMax;
                    propertyValue = propertyValue.substring(propertyValue.indexOf("-") + 2);
                    propertyValue = parseFloat(_.trim(propertyValue, '$,').replace(/,/g, ''));
                    return (oopMax.minValue  <= propertyValue && propertyValue <= oopMax.maxValue);
                });
            }

            _.forIn(planType, function(value, key) {
                if(value === true) {
                    planTypeCount++;
                    var tempFilter = updatePlanType(key, filteredUserInfo);
                    if(planTypeCount > 1) {
                        tempFilter = _.concat(planTypeFilteredPlans, tempFilter);
                    }
                    planTypeFilteredPlans = tempFilter;
                }
            });


            if(planTypeFilteredPlans.length > 0) {
                UniquePlanTypeFilteredPlan = _.uniqBy(planTypeFilteredPlans, function (planTypeFilteredPlan) {
                    return planTypeFilteredPlan.planId;
                });
            }

            if(planTypeCount > 0) {
                filteredUserInfo = UniquePlanTypeFilteredPlan;
            }


            if (pharmacyCoverage.value === 'No') {
                filteredUserInfo = _.filter(filteredUserInfo, function (userInfo) {
                    return angular.equals({},userInfo.prescriptionCoverage);
                });
            }

            if (pharmacyCoverage.value === 'Yes') {
                filteredUserInfo = _.filter(filteredUserInfo, function (userInfo) {
                    return !angular.equals({},userInfo.prescriptionCoverage);
                });
            }
            
            return filteredUserInfo;
        }

        function updatePlanType(key, array) {
            var filterResultsArray = [];
            var j = 0;
            for (var i = 0; i < array.length; i++) {
                var tmpPlanName = array[i].planName;

                if (tmpPlanName.indexOf('HMO SNP') > 1) {
                    tmpPlanName= _.replace(tmpPlanName, 'HMO ', '');
                }
                if (tmpPlanName.indexOf(key) > 1) {
                    filterResultsArray[j] = array[i];
                    j++;
                }
            }
            return filterResultsArray;
        }

        function saveFilterResult(filterResult, costPerMonth, oopMax, planType, pharmacyCoverage) {
            filterResult.costPerMonthMinValue = costPerMonth.minValue;
            filterResult.costPerMonthMaxValue = costPerMonth.maxValue;
            filterResult.oopMaxMinValue = oopMax.minValue;
            filterResult.oopMaxMaxValue = oopMax.maxValue;
            filterResult.HMO = planType.HMO;
            filterResult.PPO = planType.PPO;
            filterResult.SNP = planType.SNP;
            filterResult.PC = pharmacyCoverage.value;
            
            return filterResult;
        }
    }
})();
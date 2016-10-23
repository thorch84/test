App.controller('compare-plans', function($scope, CompareRecords){
    $scope.selectedPlans=CompareRecords.selectedPlans;
    $scope.primaryDoctorCopay=0;
    $scope.specialistCopay=0;
    $scope.pharmacyDrugDeductible=0;
    $scope.coverageInTheGap=0;
    $scope.preferredGenericDrugCopay=0;
    $scope.genericDrugCopay=0;
    $scope.preferredBrandDrugCopay=0;
    $scope.nonPreferredBrandDrugCopay=0;
    $scope.specialityDrugCopay=0;
    $scope.selectCareDrugCopay=0;
    $scope.removeComparePlans=function(removeVal){
        console.log(" selectedPlans: " +$scope.selectedPlans);
        console.log(" removeVal: " +removeVal);
        var index=$scope.selectedPlans.indexOf(removeVal);
        console.log("Index:" +index);
        $scope.selectedPlans.splice(index, 1);
        console.log(" selectedPlans: " +$scope.selectedPlans);





    }

    $scope.findSingleValue=function(array, id, requiredKey){
        var i=0;
        var test=array[i].requiredKey;
        for(i=0;i<=array.length; i++){
            if(requiredKey=="planName") {
                if (array[i].planId == id) {
                    return array[i].planName;
                }
            }
            if(requiredKey=="monthlyPremium") {
                if (array[i].planId == id) {
                    return array[i].monthlyPremium;
                }
            }
            if(requiredKey=="planDescription") {
                if (array[i].planId == id) {
                    return array[i].planDescription;
                }
            }
            if(requiredKey=="medicalCoverage.oopMax") {
                if (array[i].planId == id) {
                    return array[i].medicalCoverage.oopMax;
                }
            }
            if(requiredKey=="medicalCoverage.primaryDrCopay") {
                if (array[i].planId == id) {
                    return array[i].medicalCoverage.primaryDrCopay;
                }
            }

            if(requiredKey=="medicalCoverage.specialistDrCopay") {
                if (array[i].planId == id) {
                    return array[i].medicalCoverage.specialistDrCopay;
                }
            }     if(requiredKey=="medicalCoverage.deductible") {
                if (array[i].planId == id) {
                    return array[i].medicalCoverage.deductible;
                }
            }     if(requiredKey=="prescriptionCoverage.gapCoverage") {
                if (array[i].planId == id) {
                    return array[i].prescriptionCoverage.gapCoverage;
                }
            }     if(requiredKey=="prescriptionCoverage.preferredGenericDrugCopay") {
                if (array[i].planId == id) {
                    return array[i].prescriptionCoverage.preferredGenericDrugCopay;
                }
            }     if(requiredKey=="prescriptionCoverage.preferredBrandDrugCopay") {
                if (array[i].planId == id) {
                    return array[i].prescriptionCoverage.preferredBrandDrugCopay;
                }
            }     if(requiredKey=="prescriptionCoverage.nonPreferredBrandDrugCopay") {
                if (array[i].planId == id) {
                    return array[i].prescriptionCoverage.nonPreferredBrandDrugCopay;
                }
            }     if(requiredKey=="prescriptionCoverage.specialtyDrugsCopay") {
                if (array[i].planId == id) {
                    return array[i].prescriptionCoverage.specialtyDrugsCopay;
                }
            }     if(requiredKey=="prescriptionCoverage.selectCarDrugsCopay") {
                if (array[i].planId == id) {
                    return array[i].prescriptionCoverage.selectCarDrugsCopay;
                }
            }












            /*
             if(requiredKey=="monthlyPremium") {
             if (array[i].planId == id) {
             return array[i].monthlyPremium;
             }
             }
             if(requiredKey=="monthlyPremium") {
             if (array[i].planId == id) {
             return array[i].monthlyPremium;
             }
             }*/
        }

    }
    $scope.whatClassisit=function(someValue){
        if(someValue=="TBD" || someValue=="N/A") return "coverage-disable"
        else return "coverage-enable";
    }


});
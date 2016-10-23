
App.controller('default-controller', function($scope, $routeParams, CompareRecords) {

    console.log("CompareRecords :" +CompareRecords.selectedPlans);
    $scope.planId=$routeParams.planId;
    $scope.message = 'This isangular Add new order screen';
    $scope.allCounty=[];

    $scope.findWithAttr=function(array, attr, value) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {
                return i;
            }
        }
    }

    $scope.findSingleValue=function(array, id, requiredKey){
        var i;
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
        }

    }
    $scope.productCompare=function(planId, planName, checkboxValue){
        console.log("checkboxValue: " +checkboxValue);
        console.log("0000:" +CompareRecords.selectedPlans);

        if(checkboxValue) {
            <!-- $scope.selectedPlans[planId]=planName; -->
            if(CompareRecords.selectedPlans.length==3){
                return false;
            }
            CompareRecords.selectedPlans.push(planId);
            console.log(CompareRecords.selectedPlans);
            console.log("PlanId :" + planId);
            console.log("PlanName: " + planName);

        }
        else {
            // var index=$scope.findWithAttr(CompareRecords.selectedPlans, 'planName', planName);
            var index=CompareRecords.selectedPlans.indexOf(planId);
            if(index!==(-1)) {
                CompareRecords.selectedPlans.splice(index, 1);
            }
            console.log("CompareREC:" +CompareRecords.selectedPlans);


            /*   Array.prototype.remove = function() {
             var what, a = arguments, L = a.length, ax;
             while (L && this.length) {
             what = a[--L];
             while ((ax = CompareRecords.selectedPlans.indexOf(what)) !== -1) {
             CompareRecords.selectedPlans.splice(ax, 1);
             }
             }
             return CompareRecords.selectedPlans;
             };*/

            /*
             CompareRecords.selectedPlans=CompareRecords.selectedPlans.remove(planId);
             <!--$scope.selectedPlans = $filter('filter')($scope.items, {name: planName}); -->

             <!--    delete $scope.selectedPlans[planName];  -->
             <!-- $scope.selectedPlans.remove(planName); -->
             console.log(CompareRecords.selectedPlans);
             if(CompareRecords.selectedPlans.length==0) {
             CompareRecords.selectedPlans.length=0;
             }
             */


        }
    }

    $scope.selectedPlan=function(plan){
        if(plan.planId==$scope.planId){

            return(plan);

        }

    }
    /*
     $scope.additionalPlanDetails=function($scope.userInfo, planId){

     var arr=[];
     if(userInfo.planId==$scope.planId){

     arr[planName]=userInfo.planName;
     arr[premium]=userInfo.monthlyPremium;

     }

     return arr;


     }
     */

    $scope.getSelectedPlans = function () {
        return CompareRecords.selectedPlans;
    }
    $scope.unique = function(origArr){
        var newArr = [],
            origLen = origArr.length,
            found, x, y;

        for (x = 0; x < origLen; x++) {
            found = undefined;
            for (y = 0; y < newArr.length; y++) {
                if (origArr[x] === newArr[y]) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                newArr.push(origArr[x]);
            }
        }
        return newArr;
    }
    $scope.getAllCounty=function(array){
        for(var i=0; i<array.length; i++) {
            $scope.allCounty[i] = array[i].county;
        }

    };


});
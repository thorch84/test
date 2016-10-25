angular.module('templates-app', ['components/directives/loading-indicator.tpl.html', 'footer/footer.tpl.html', 'header/header.tpl.html', 'routes/changeyear/changeyear.tpl.html', 'routes/compareplans/compareplans.tpl.html', 'routes/comparePlansErrorModal/comparePlansErrorModal.tpl.html', 'routes/contactus/contactus.tpl.html', 'routes/glossary/glossary.tpl.html', 'routes/leavesite/leavesite.tpl.html', 'routes/multipleCounty/multipleCounty.tpl.html', 'routes/needhelp/needhelp.tpl.html', 'routes/plandetail/plandetail.tpl.html', 'routes/plans/plans.tpl.html', 'routes/selectlanguage/selectlanguage.tpl.html', 'routes/zipCodeSearch/zipCodeSearch.tpl.html', 'sidebar/sidebar.tpl.html', 'topNavbar/topNavbar.tpl.html']);

angular.module("components/directives/loading-indicator.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/directives/loading-indicator.tpl.html",
    "<div ng-if=\"ngModel\" class=\"loading-container\">\n" +
    "    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\">\n" +
    "        <path ng-class=\"getStroke()\" fill=\"none\" d=\"M46.399135639377576,31.951761926844192A22.5,22.5 0 1,0 20.951689826041456,47.13280788186225\"></path>\n" +
    "    </svg>\n" +
    "</div>");
}]);

angular.module("footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("footer/footer.tpl.html",
    "<div ng-class=\"getFooterClass()\">\n" +
    "    <div>{{contractContent}}</div>\n" +
    "    <div class=\"remove-bottom-margin\"><a data-toggle=\"modal\" data-target=\"#disclaimerModal\" title=\"Disclaimer Modal\" class=\"disclaimer-link\">\n" +
    "        {{disclaimer}}</a></div>\n" +
    "    <div>{{materialId}}  |  {{approvedDate}}  |  {{timestamp}}</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal fade clear-right\" id=\"disclaimerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"contactModalLabel\">\n" +
    "    <div class=\"modal-dialog\" role=\"document\">\n" +
    "        <div class=\"modal-content\">\n" +
    "\n" +
    "            <div class=\"modal-body\">\n" +
    "                <ul>\n" +
    "                <li>This information is not a complete description of benefits.  Contact the plan for more information.</li>\n" +
    "                <li>Limitations, copayments and restrictions may apply. Benefits, premiums, and/or co-payments/co-insurance may change on January 1 of each year.</li>\n" +
    "                <li>These contracts are renewed annually, and availability of coverage beyond the end of the contract year is not guaranteed.</li>\n" +
    "                    <li>These plans may not be available to Medicare beneficiaries in the following contract year because, by law, plan sponsors, like {{healthplanname}}, can choose not to renew their contract with CMS, or they can reduce their service area, and/or CMS may also refuse to renew the contract, thus resulting in a termination or non‑renewal.</li>\n" +
    "                	<li>You must live in the service area for the Medicare Advantage Plan.</li>\n" +
    "                    <li>{{healthplanname}} Online Enrollment is not available for Employer Groups and/or unions. Contact your Benefits Administrator if you currently receive health care benefits through an employer and/or union.</li>\n" +
    "                    <li>In addition to {{healthplanname}} Online Enrollment, Medicare beneficiaries may also enroll in {{healthplanname}} through the Centers for Medicare & Medicaid Services (CMS) Medicare Online Enrollment Center, located at <a href=\"http://www.medicare.gov\" target=\"_blank\">www.medicare.gov</a>.</li>\n" +
    "                    <li>Individuals must have both Part A and Part B to enroll. Medicare beneficiaries can only enroll in these plans during certain times of the year and must continue to pay their Medicare Part B premiums. Plan benefits and cost-sharing may vary by plan, county and region. <a href=\"{{contactusURL}}\" target=\"_blank\">Contact us</a>  for more information.</li>\n" +
    "                    <li>The Formulary, pharmacy network, and/or provider network may change at any time.  You will receive notice when necessary.</li>\n" +
    "                </ul>\n" +
    "                <p>DSNP Plans Only:</p>\n" +
    "                <ul class=\"remove-bottom-margin\">\n" +
    "                    <li>This plan is available to anyone who has both Medical Assistance from the State and Medicare.</li>\n" +
    "                    <li>Premiums, co-pays, co-insurance, and deductibles may vary based on the level of Extra Help you receive.  Please contact the plan for further details.</li>\n" +
    "                    <li>You must continue to pay your Medicare Part B premium. However, for full-dual beneficiaries, the State will cover your Part B premium as long as you retain your Medicaid eligibility.</li>\n" +
    "                </ul>\n" +
    "                <div ng-if=\"additionaldisclaimer=='Y'\">\n" +
    "                    <ul>\n" +
    "                        <li>Out-of-network/con-contracted providers are under no obligation to treat Trillium Medicare Advantage members, except in emergency situations.  For a decision about whether we will cover an out-of-network service, we encourage you or your provider to ask us for a pre-service organization determination before you receive the service.  Please call our member service number or see your Evidence of Coverage for more information, including the cost-sharing that applies to out-of-network services.</li>\n" +
    "                    </ul>\n" +
    "                    <p>For ISNP plans:</p>\n" +
    "                    <ul><li>This plan is available to anyone with Medicare who meets the Skilled Nursing Facility (SNF) level of care and resides in a nursing home.</li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header/header.tpl.html",
    "<section class=\"header-section\">\n" +
    "    <article id=\"header-info-box\" class=\"clearfix\">\n" +
    "\n" +
    "        <div class=\"main-box\">\n" +
    "            <div class=\"text-largest h1\" id=\"pst-plan-info\">Medicare Advantage</div>\n" +
    "            <div class=\"text-large h3\" id=\"pst-location-info\"><span ng-show=\"userInfo.length>0\">{{zipCode}}, {{county}}, {{state}}</span></div>\n" +
    "            <div>\n" +
    "                <form name=\"zipForm\" ng-submit=\"updateResults(searchData.zipCode)\" class=\"zipForm\" zipcode-animate>\n" +
    "                    <button ng-if=\"userInfo.length == 0\" type=\"button\" >Enter zip code</button>\n" +
    "                    <button ng-if=\"userInfo.length > 0\" type=\"button\" >Change zip code</button>\n" +
    "                    <div>\n" +
    "                        <input type=\"text\" keyh maxlength=\"5\" name=\"zip\" placeholder=\"Enter zip code\" ng-model=\"searchData.zipCode\" autofocus required zipcode-validate/>\n" +
    "                        <button type=\"submit\" ng-click=\"updateResults(searchData.zipCode)\" ng-show=\"zipForm.zip.$valid\">Go</button>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div ng-if=\"userInfo.length>0\">\n" +
    "                <span class=\"text-danger\" ng-show=\"zipForm.zip.$error.required\">Zip code is required</span>\n" +
    "                <span class=\"text-danger\" ng-show=\"zipForm.zip.$invalid\">Invalid zip code</span>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"secondary-box\">\n" +
    "            <div class=\"text-largest h5\" id=\"pst-year-info\">Plans for Year</div>\n" +
    "            <div ng-if=\"hideYear\" class=\"text-large h2\">2017</div>\n" +
    "\n" +
    "            <div ng-if=\"!hideYear\" class=\"text-large h2\" id=\"pst-year-switcher\" uib-dropdown on-toggle=\"toggled(open)\">\n" +
    "                <a uib-dropdown-toggle><span class=\"glyphicon glyphicon-triangle-bottom\" aria-hidden=\"true\"></span> 2017</a>\n" +
    "                <ul class=\"dropdown-menu\" uib-dropdown-menu aria-labelledby=\"simple-dropdown\">\n" +
    "                    <li ng-repeat=\"year in yearList\">\n" +
    "                        <a href ng-click=\"selectYear(year)\">{{year}}</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </article>\n" +
    "\n" +
    "    <div id=\"breadcrumbs\" ng-if=\"path==='/plans'\">\n" +
    "        <p class=\"moe-breadcrumb\" ng-if=\"userInfo.length>1\">{{userInfo.length}} Results</p>\n" +
    "        <p class=\"moe-breadcrumb\" ng-if=\"userInfo.length<=1\">{{userInfo.length}} Result</p>\n" +
    "\n" +
    "        <div class=\"filterOptions\"\n" +
    "             ng-if=\"costPerMonth.minValue > costPerMonth.options.floor || costPerMonth.maxValue < costPerMonth.options.ceil\">\n" +
    "            <span ng-click=\"filterResults('CPM')\">{{costPerMonth.minValue}}$ - {{costPerMonth.maxValue}}$ Monthly  <span\n" +
    "                    class=\"glyphicon glyphicon-remove\"></span></span>\n" +
    "        </div>\n" +
    "        <div class=\"filterOptions\"\n" +
    "             ng-if=\"oopMax.minValue > oopMax.options.floor || oopMax.maxValue < oopMax.options.ceil\">\n" +
    "            <span ng-click=\"filterResults('OOPMAX')\">{{oopMax.minValue}}$ - {{oopMax.maxValue}}$ Out of Pocket  <span\n" +
    "                    class=\"glyphicon glyphicon-remove\"></span></span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"filterOptions\" ng-if=\"planType.HMO\">\n" +
    "            <span ng-click=\"filterResults('HMO')\">HMO  <span class=\"glyphicon glyphicon-remove\"></span></span>\n" +
    "        </div>\n" +
    "        <div class=\"filterOptions\" ng-if=\"planType.PPO\">\n" +
    "            <span ng-click=\"filterResults('PPO')\">PPO  <span class=\"glyphicon glyphicon-remove\"></span></span>\n" +
    "        </div>\n" +
    "        <div class=\"filterOptions\" ng-if=\"planType.SNP\">\n" +
    "            <span ng-click=\"filterResults('SN')\">Special Needs  <span class=\"glyphicon glyphicon-remove\"></span></span>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"filterOptions\" ng-if=\"pharmacyCoverage.value === 'Yes' || pharmacyCoverage.value === 'No'\">\n" +
    "            <span ng-click=\"filterResults('PC')\">Pharmacy Coverage - {{pharmacyCoverage.value}}  <span\n" +
    "                    class=\"glyphicon glyphicon-remove\"></span></span>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div ng-if=\"userInfo.length>0\" id=\"filter-bar\">\n" +
    "            <div>\n" +
    "                <button id=\"filterresultsforHelp\" class=\"btn btn-default filter-results\" data-toggle=\"modal\"\n" +
    "                        data-target=\"#filterresults\"\n" +
    "                        style=\"float:right;\">Filter Results\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"breadcrumbs\" ng-if=\"path!=='/plans'\">\n" +
    "        <!--MOE VERSION OF BREADCRUMBS -->\n" +
    "        <p class=\"moe-breadcrumb\"><a href=\"#/plans\"><span class=\"glyphicon glyphicon-chevron-left\"></span> Back to Medicare Advantage Plans</a></p>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "\n" +
    "<!--Filter Modal -->\n" +
    "<div class=\"modal fade\" id=\"filterresults\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"filterresultsLabel\">\n" +
    "    <div class=\"modal-dialog\" role=\"document\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-body filter-body\">\n" +
    "                <div><b>Cost Per Month</b></div>\n" +
    "                <rzslider rz-slider-model=\"costPerMonth.minValue\" rz-slider-high=\"costPerMonth.maxValue\" rz-slider-options=\"costPerMonth.options\"></rzslider>\n" +
    "\n" +
    "                <p><b>Maximum Out Of Pocket</b></p>\n" +
    "                <rzslider rz-slider-model=\"oopMax.minValue\" rz-slider-high=\"oopMax.maxValue\"  rz-slider-options=\"oopMax.options\"></rzslider>\n" +
    "\n" +
    "                <br/><br/>\n" +
    "                <div><b>Plan Type</b></div>\n" +
    "                <div class=\"checkbox icheck-orange\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"planType.HMO\" id=\"HMO\">\n" +
    "                    <label for=\"HMO\">HMO</label>\n" +
    "                </div>\n" +
    "                <div class=\"checkbox icheck-orange\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"planType.PPO\" id=\"PPO\">\n" +
    "                    <label for=\"PPO\">PPO</label>\n" +
    "                </div>\n" +
    "                <div class=\"checkbox icheck-orange\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"planType.SNP\" id=\"SNP\">\n" +
    "                    <label for=\"SNP\">Special Needs Plans</label>\n" +
    "                </div>\n" +
    "\n" +
    "                <div><b>Pharmacy Coverage</b></div>\n" +
    "                <div class=\"radio icheck-orange\">\n" +
    "                    <input type=\"radio\" ng-model=\"pharmacyCoverage.value\" value=\"Yes\" name=\"Yes\" id=\"Yes\">\n" +
    "                    <label for=\"Yes\">Yes</label>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"radio icheck-orange\">\n" +
    "                    <input type=\"radio\" ng-model=\"pharmacyCoverage.value\" value=\"No\" name=\"No\" id=\"No\">\n" +
    "                    <label for=\"No\">No</label>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"radio icheck-orange\">\n" +
    "                    <input type=\"radio\" ng-model=\"pharmacyCoverage.value\" value=\"Either\" name=\"Either\" id=\"Either\">\n" +
    "                    <label for=\"Either\">Either</label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" ng-click=\"filterResults('CANCEL')\">Cancel</button>\n" +
    "                <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" ng-click=\"filterResults()\"> Save\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!--Filter Modal -->");
}]);

angular.module("routes/changeyear/changeyear.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("routes/changeyear/changeyear.tpl.html",
    "<!-- CHANGE YR Modal -->\n" +
    "<div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" ng-click=\"changeYearCtrl.close()\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\">{{changeYearCtrl.title}}</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <p>{{changeYearCtrl.message}}</p>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-success\" ng-click=\"changeYearCtrl.changeYear()\">Continue</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" ng-click=\"changeYearCtrl.close()\">Cancel</button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("routes/compareplans/compareplans.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("routes/compareplans/compareplans.tpl.html",
    "<header></header>\n" +
    "\n" +
    "<section class=\"compare-page\">\n" +
    "\n" +
    "    <div class=\"container-fluid\">\n" +
    "    <table class=\"compare-plans\">\n" +
    "        <thead class=\"rows\">\n" +
    "            <th></th>\n" +
    "            <th ng-repeat=\"plan in selectedPlans\" ng-class=\"{true: 'three-selected', false: 'two-selected'}[selectedPlans.length==3]\">\n" +
    "                <div>{{plan.planName}}</div>\n" +
    "                <div>{{plan.monthlyPremium}} Monthly premium</div>\n" +
    "                <!--<button type=\"button\" ng-click=\"goToPlanDetail()\">View Details</button>\n" +
    "                <a href=\"#plan-detail/{{heading}}\">View Details</a>-->\n" +
    "                    <a href=\"#plan-detail/{{plan.planId}}\" class=\"btn btn-default\">View Details</a>\n" +
    "            </th>\n" +
    "        </thead>\n" +
    "\n" +
    "        <tbody>\n" +
    "            <tr>\n" +
    "                <td class=\"table-heading\">Summary Information</td>\n" +
    "                <td style=\"border:1px solid white;\" ng-repeat=\"plan in selectedPlans\" ng-class=\"{true: 'three-selected', false: 'two-selected'}[selectedPlans.length==3]\"> {{plan.planDescription}}</td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td class=\"table-heading\">Coverage</td>\n" +
    "                <td style=\"border:1px solid white;\" ng-repeat=\"plan in selectedPlans\" ng-class=\"{true: 'three-selected', false: 'two-selected'}[selectedPlans.length==3]\">\n" +
    "                    <p ng-class=\"selectPlanCoverageClass(plan.medicalCoverage.oopMax)\" class=\"compare-page-coverage\">\n" +
    "                        Medical coverage\n" +
    "                    </p>\n" +
    "                    <p ng-class=\"selectPlanCoverageClass(plan.prescriptionCoverage)\" class=\"compare-page-coverage\">\n" +
    "                        Prescription Coverage\n" +
    "                    </p>\n" +
    "\n" +
    "                    <p ng-if=\"!isSupplementEmpty(plan)\">\n" +
    "                        <span class=\"glyphicon glyphicon-plus\"></span>\n" +
    "                        Supplemental\n" +
    "                    </p>\n" +
    "\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "                <td class=\"table-heading\">Copay and Coinsurance</td>\n" +
    "\n" +
    "                <td class=\"copay-td\" ng-repeat=\"plan in selectedPlans\" >\n" +
    "                  <div ng-if=\"plan.medicalCoverage.deductible\"><p>Deductible:</p>\n" +
    "                    <div>{{plan.medicalCoverage.deductible}}</div>\n" +
    "                      </div>\n" +
    "\n" +
    "                    <div ng-if=\"plan.medicalCoverage.oopMax\"><p>Out of Pocket Maximum:</p>\n" +
    "                    <div>{{plan.medicalCoverage.oopMax}}</div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    <div ng-if=\"plan.medicalCoverage.primaryDrCopay\"><p>Primary Doctor Copay:</p>\n" +
    "                    <div>{{plan.medicalCoverage.primaryDrCopay}} </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    <div ng-if=\"plan.medicalCoverage.specialistDrCopay\"><p>Specialist Copay:</p>\n" +
    "                    <div>{{plan.medicalCoverage.specialistDrCopay}} </div>\n" +
    "                    </div>\n" +
    "                    <div ng-if=\"plan.medicalCoverage.rxDeductible\"><p>Pharmacy Drug Deductible:</p>\n" +
    "                    <div>{{plan.prescriptionCoverage.rxDeductible}} </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    <div ng-if=\"plan.prescriptionCoverage.gapCoverage\"><p>Coverage in the gap:</p>\n" +
    "                    <div>{{plan.prescriptionCoverage.gapCoverage}}</div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div ng-if=\"plan.prescriptionCoverage.preferredGenericDrugCopay\"><p>Preferred generic drug copay:</p>\n" +
    "                    <div>{{plan.prescriptionCoverage.preferredGenericDrugCopay}}\n" +
    "                    </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    <div ng-if=\"plan.prescriptionCoverage.nonPreferredGenericDrugCopay\"><p>Generic drug copay:</p>\n" +
    "                    <div>{{plan.prescriptionCoverage.nonPreferredGenericDrugCopay}}</div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    <div ng-if=\"plan.prescriptionCoverage.preferredBrandDrugCopay\">\n" +
    "\n" +
    "                        <span ng-if=\"!isTrilliumSNP(plan)\">Preferred brand drugs copay:</span><span ng-if=\"isTrilliumSNP(plan)\">Brands drugs copay:</span>\n" +
    "\n" +
    "                    <div>{{plan.prescriptionCoverage.preferredBrandDrugCopay}}</div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    <div ng-if=\"plan.prescriptionCoverage.nonPreferredBrandDrugCopay\"><p>Non-preferred brand drug copay:</p>\n" +
    "                    <div>{{plan.prescriptionCoverage.nonPreferredBrandDrugCopay}} </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    <div ng-if=\"plan.prescriptionCoverage.specialtyDrugsCopay\"><p>Speciality drug copay:</p>\n" +
    "                    <div>{{plan.prescriptionCoverage.specialtyDrugsCopay}} </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    <div ng-if=\"selectcaredrugscopay==='Y' && plan.prescriptionCoverage.selectCarDrugsCopay\"><p>Select care drug copay:</p>\n" +
    "                    <div>{{plan.prescriptionCoverage.selectCarDrugsCopay}}</div>\n" +
    "                        </div>\n" +
    "                </td>\n" +
    "\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "        <div class=\"row\" id=\"bottom-breadcrumb\">\n" +
    "            <div class=\"col-md-9 hidden-xs\">\n" +
    "                <a href=\"#/plans\"><span class=\"glyphicon glyphicon-chevron-left\"></span>Back to Medicare Advantage Plans</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"compareproducts\" ng-show=\"compare\" ng-hide=\"selectedPlans.length===0\">\n" +
    "        <div ng-repeat=\"compareItem in selectedPlans\">\n" +
    "            <div class=\"col-xs-4 col-md-3 productCompare\" ng-class=\"{true: 'three-selected', false: 'two-selected'}[selectedPlans.length==3]\">\n" +
    "                <a href=\"javascript:void(0);\"\n" +
    "                   ng-click=\"removeComparePlans(compareItem)\"\n" +
    "                   type=\"button\" style=\"\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
    "                    <span aria-hidden=\"true\">×</span>\n" +
    "                </a>\n" +
    "\n" +
    "                <p class=\"planName\">{{compareItem.planName}}</p>\n" +
    "                <p class=\"hidden-xs hidden-sm\">{{compareItem.monthlyPremium}}</p>\n" +
    "\n" +
    "                <a class=\"btn btn-warning apply-now\"\n" +
    "                   ng-if=\"!compareItem.applyOnline\" ng-disabled=\"true\">Apply Now</a>\n" +
    "\n" +
    "                <a class=\"btn btn-warning apply-now\" ng-if=\"compareItem.applyOnline\"\n" +
    "                   href=\"{{buildApplyNowUrl(compareItem)}}\">Apply Now</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- HELP Modal -->\n" +
    "    <div class=\"modal fade\" id=\"helpModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"helpModalLabel\">\n" +
    "        <div class=\"modal-dialog\" role=\"document\">\n" +
    "            <div class=\"modal-content\">\n" +
    "                <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "                    <h4 class=\"modal-title\" id=\"myModalLabel\">How to use this page</h4>\n" +
    "                </div>\n" +
    "                <div class=\"modal-body\">\n" +
    "                    <img src=\"../../../medicareadv/assets/images/{{currentHelpImage}}.png\" data-ratio=\"{{currentImageRatio}}\" id=\"{{currentHelpImage}}\" border=\"0\" class=\"help-img active-help\" />\n" +
    "                    <p id=\"block-tester\"></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- END HELP US Modal -->\n" +
    "</section>");
}]);

angular.module("routes/comparePlansErrorModal/comparePlansErrorModal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("routes/comparePlansErrorModal/comparePlansErrorModal.tpl.html",
    "<!-- LANGUAGE Modal -->\n" +
    "\n" +
    "<div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <a href=\"javascript:void(0);\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" ng-click=\"comparePlansErrorModalCtrl.close()\"><span aria-hidden=\"true\">&times;</span></a>\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\">Sorry!</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <p>You can only compare three plans at a time.</p>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" ng-click=\"comparePlansErrorModalCtrl.close()\">OK</button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("routes/contactus/contactus.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("routes/contactus/contactus.tpl.html",
    "<div>\n" +
    "    <p>We're here to help.</p>\n" +
    "    <p ng-if=\"state !== 'CA'\"><strong>Call us now at {{phone1}}</strong></p>\n" +
    "    <p ng-if=\"state === 'CA' && phone2\">\n" +
    "        <span ng-show=\"{{planTypes.HMO || planTypes.PPO}}\">For our <b>HMO / PPO</b> plans call us now at {{phone1}}</span><br /><br />\n" +
    "        <span ng-show=\"{{planTypes.SNP}}\">For a <b>Special Needs Plan</b> call us now at {{phone2}} </span>\n" +
    "    </p>\n" +
    "\n" +
    "    <p ng-if=\"state === 'CA' && !phone2\">\n" +
    "        <span><b>Call us now at {{phone1}}</b></span><br /><br />\n" +
    "    </p>\n" +
    "\n" +
    "    <p><small>Our office hours are 8:00 a.m. to 8:00 p.m., 7 days a week (October 1st - February 14th) and Monday through Friday, 8:00 a.m. to 8:00 p.m. (February 15th - September 30th), excluding holidays.</small></p>\n" +
    "</div>");
}]);

angular.module("routes/glossary/glossary.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("routes/glossary/glossary.tpl.html",
    "<!-- GLOSSARY Modal -->\n" +
    "<div class=\"modal fade\" id=\"glossaryModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"glossaryModalLabel\">\n" +
    "    <div class=\"modal-dialog\" role=\"document\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "                <h4 class=\"modal-title\" id=\"myModalLabel\">Glossary of Terms</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <p>Here are some definitions to help you understand the Medicare online enrollment process.</p>\n" +
    "                <p class=\"h4\">Term #1</p>\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex id diam consectetur consectetur vel\n" +
    "                    aliquet metus. Donec lacinia, urna id placerat accumsan, nisl tellus maximus quam, a rutrum orci orci\n" +
    "                    luctus urna.</p>\n" +
    "                <p class=\"h4\">Term #2</p>\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex id diam consectetur consectetur vel\n" +
    "                    aliquet metus. Donec lacinia, urna id placerat accumsan, nisl tellus maximus quam, a rutrum orci orci\n" +
    "                    luctus urna.</p>\n" +
    "                <p class=\"h4\">Term #3</p>\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex id diam consectetur consectetur vel\n" +
    "                    aliquet metus. Donec lacinia, urna id placerat accumsan, nisl tellus maximus quam, a rutrum orci orci\n" +
    "                    luctus urna.</p>\n" +
    "                <p class=\"h4\">Term #4</p>\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex id diam consectetur consectetur vel\n" +
    "                    aliquet metus. Donec lacinia, urna id placerat accumsan, nisl tellus maximus quam, a rutrum orci orci\n" +
    "                    luctus urna.</p>\n" +
    "                <p class=\"h4\">Term #5</p>\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex id diam consectetur consectetur vel\n" +
    "                    aliquet metus. Donec lacinia, urna id placerat accumsan, nisl tellus maximus quam, a rutrum orci orci\n" +
    "                    luctus urna.</p>\n" +
    "                <p class=\"h4\">Term #6</p>\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex id diam consectetur consectetur vel\n" +
    "                    aliquet metus. Donec lacinia, urna id placerat accumsan, nisl tellus maximus quam, a rutrum orci orci\n" +
    "                    luctus urna.</p>\n" +
    "                <p class=\"h4\">Term #7</p>\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex id diam consectetur consectetur vel\n" +
    "                    aliquet metus. Donec lacinia, urna id placerat accumsan, nisl tellus maximus quam, a rutrum orci orci\n" +
    "                    luctus urna.</p>\n" +
    "                <p class=\"h4\">Term #8</p>\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex id diam consectetur consectetur vel\n" +
    "                    aliquet metus. Donec lacinia, urna id placerat accumsan, nisl tellus maximus quam, a rutrum orci orci\n" +
    "                    luctus urna.</p>\n" +
    "                <p class=\"h4\">Term #9</p>\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex id diam consectetur consectetur vel\n" +
    "                    aliquet metus. Donec lacinia, urna id placerat accumsan, nisl tellus maximus quam, a rutrum orci orci\n" +
    "                    luctus urna.</p>\n" +
    "                <p class=\"h4\">Term #10</p>\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex id diam consectetur consectetur vel\n" +
    "                    aliquet metus. Donec lacinia, urna id placerat accumsan, nisl tellus maximus quam, a rutrum orci orci\n" +
    "                    luctus urna.</p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- END GLOSSARY Modal -->");
}]);

angular.module("routes/leavesite/leavesite.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("routes/leavesite/leavesite.tpl.html",
    "<!-- CHANGE YR Modal -->\n" +
    "<div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" ng-click=\"leaveSiteCtrl.close()\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\">You are now leaving {{leaveSiteCtrl.siteAddress}}</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <p>{{leaveSiteCtrl.message}}</p>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" ng-click=\"leaveSiteCtrl.close()\">Cancel</button>\n" +
    "        <a href=\"{{leaveSiteCtrl.glossaryOfTermsUrl}}\" target=\"_blank\" class=\"btn btn-success\" >Continue</a>        \n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("routes/multipleCounty/multipleCounty.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("routes/multipleCounty/multipleCounty.tpl.html",
    "<!--  County Modal -->\n" +
    "<div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" ng-click=\"multipleCountyCtrl.close()\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\"> Please select one county </h4>\n" +
    "    </div>\n" +
    "    <form ng-submit=\"multipleCountyCtrl.continue()\">\n" +
    "        <div class=\"modal-body\">\n" +
    "            <div ng-repeat=\"county in multipleCountyCtrl.countyArr\">\n" +
    "                <input type=\"radio\" name=\"county\" ng-model=\"multipleCountyCtrl.selectedCounty\" value=\"{{county}}\"  /> {{county}}\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"modal-footer\">\n" +
    "            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" ng-click=\"multipleCountyCtrl.close()\">Cancel</button>\n" +
    "            <button type=\"submit\" class=\"btn btn-warning\" data-dismiss=\"modal\" ng-click=\"multipleCountyCtrl.continue()\">Continue</button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("routes/needhelp/needhelp.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("routes/needhelp/needhelp.tpl.html",
    "<!-- Help Modal -->\n" +
    "<div class=\"modal fade\" id=\"helpModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"helpModalLabel\">\n" +
    "    <div id=\"help-menu\" class=\"help-overlay-content left-help\" data-reference=\"menu-toggle\">Access a glossary, language assistance and more.</div>\n" +
    "    <div id=\"help-filterresults\" class=\"help-overlay-content right-help\" data-reference=\"filterresults\">Filter plans to narrow your selections</div>\n" +
    "    <div id=\"help-progbar\" class=\"help-overlay-content right-help\" data-reference=\"moe-progress-bar\">Your progress</div>\n" +
    "    <div id=\"help-contact\" class=\"help-overlay-content right-help\" data-reference=\"contact-header-link\">Contact information here</div>\n" +
    "    <div id=\"help-cost\" class=\"help-overlay-content right-help\" data-reference=\"moe-cost-info\">Your cost per month</div>\n" +
    "    <div id=\"compare-help\" class=\"help-overlay-content right-help\" data-reference=\"selectCompareHelp0\">Select upto three plans to compare.</div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- HELP Modal\n" +
    "\n" +
    "<div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" ng-click=\"needHelpCtrl.close()\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\">Need help?</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        [content varies by health plan, here is Health Net's]<br /> Health Net Medicare Sales is ready to assist you. Call\n" +
    "        toll-free 1-800-977-6738 TTY 711. Our office hours are 8:00 a.m. to 8:00 p.m., 7 days a week (October 1st - February\n" +
    "        14th) and Monday through Friday, 8:00 a.m. to 8:00 p.m. (February 15th - September 30th), excluding holidays.\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" ng-click=\"needHelpCtrl.close()\">Close</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- END HELP US Modal -->");
}]);

angular.module("routes/plandetail/plandetail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("routes/plandetail/plandetail.tpl.html",
    "<header></header>\n" +
    "\n" +
    "<div ng-controller=\"planDetailCtrl\" ng-app=\"firstApplication\">\n" +
    "	<div class=\"container-fluid\">\n" +
    "		<div class=\"planDetails\">\n" +
    "			<div ng-if=\"isLoading\">\n" +
    "				<loading-indicator ng-model=\"isLoading\"></loading-indicator>\n" +
    "			</div>\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-xs-12 col-md-8\">\n" +
    "					<h3>{{selectedPlan.planName}}</h3>\n" +
    "					<p>{{selectedPlan.planDescription}}</p>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"col-xs-12 col-md-4 text-xs-left text-md-right\">\n" +
    "					<p class=\"monthly-premium-price\">{{selectedPlan.monthlyPremium}}</p>\n" +
    "					<p class=\"monthly-premium-text\">monthly premium</p>\n" +
    "\n" +
    "					<p ng-if=\"selectedPlan.starRatings > 0\">\n" +
    "						Star Rating: <a href=\"{{starRatingsBaseUrl + selectedPlan.starRatingsPDF}}\" target=\"_blank\" class=\"star-ratings\">\n" +
    "						<rate ng-model=\"selectedPlan.starRatings\" icon-empty = \"fa-star-o\" icon-full = \"fa-star\" icon-half = \"fa-star-half-o\" icon-base = \"fa\" other-class=\"glyphicon-star\" readonly=\"true\"></rate>\n" +
    "					</a>\n" +
    "					</p>\n" +
    "\n" +
    "					<p>\n" +
    "						<a class=\"btn btn-warning apply-now\" ng-if=\"!selectedPlan.applyOnline\" ng-disabled=\"true\"\n" +
    "						   uib-popover=\"{{applyOnlineDisabledMsg}}\" popover-trigger=\"'mouseenter'\">Apply Now</a>\n" +
    "						<a class=\"btn btn-warning apply-now\" ng-if=\"selectedPlan.applyOnline\" href=\"{{selectedPlan.applyNowUrl}}\">Apply Now</a>\n" +
    "					</p>\n" +
    "\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"row\" id=\"tabContainer\">\n" +
    "				<md-content class=\"md-padding\">\n" +
    "					<md-tabs class=\"md-accent\" md-selected=\"data.selectedIndex\">\n" +
    "\n" +
    "						<md-tab id=\"tab1\">\n" +
    "							<md-tab-label>Medical</md-tab-label>\n" +
    "							<md-tab-body>\n" +
    "								<div class=\"col-xs-12 col-sm-6 right-border\">\n" +
    "									<p><b>Monthly Premium:</b> {{selectedPlan.monthlyPremium}}</p>\n" +
    "\n" +
    "									<p><b>Deductible:</b>\n" +
    "										<span>\n" +
    "											{{selectedPlan.medicalCoverage.deductible}}\n" +
    "										</span>\n" +
    "									</p>\n" +
    "\n" +
    "									<p>\n" +
    "										<b>Out-of-Pocket maximum:</b>\n" +
    "										<span style=\"margin-left:0; display:inline;\">\n" +
    "											{{selectedPlan.medicalCoverage.oopMax}}\n" +
    "										</span>\n" +
    "									</p>\n" +
    "\n" +
    "									<p>\n" +
    "										<b>Primary doctor copay:</b>\n" +
    "										<span>\n" +
    "											{{selectedPlan.medicalCoverage.primaryDrCopay}}\n" +
    "										</span>\n" +
    "									</p>\n" +
    "\n" +
    "									<p><b>Specialist copay:</b>\n" +
    "										<span>\n" +
    "											{{selectedPlan.medicalCoverage.specialistDrCopay}}\n" +
    "										</span>\n" +
    "									</p>\n" +
    "								</div>\n" +
    "								<div class=\"col-xs-12 col-sm-6\">\n" +
    "									<p ng-show=\"selectedPlan.resourceURLs.summaryOfBenefits!='' || selectedPlan.resourceURLs.summaryOfBenefits!='N/A'\"><a href=\"{{sobPdfBaseUrl + selectedPlan.resourceURLs.summaryOfBenefits}}\" target=\"_blank\">Summary of\n" +
    "										Benefits (pdf)</a></p>\n" +
    "									<p ng-show=\"selectedPlan.resourceURLs.summaryOfBenefits=='' || selectedPlan.resourceURLs.summaryOfBenefits=='N/A'\">Summary of\n" +
    "										Benefits (pdf)</p>\n" +
    "									<p><a href=\"{{eocPdfBaseUrl + selectedPlan.resourceURLs.evidenceOfCoverage}}\" target=\"_blank\">Evidence of\n" +
    "										Coverage (pdf)</a></p>\n" +
    "									<p><a href=\"{{fapUrl}}\" target=\"_blank\">{{fapLabel}}</a></p>\n" +
    "								</div>\n" +
    "							</md-tab-body>\n" +
    "						</md-tab>\n" +
    "\n" +
    "						<div ng-if=\"!isEmptyObj(selectedPlan.prescriptionCoverage)\">\n" +
    "\n" +
    "						<md-tab id=\"tab2\">\n" +
    "							<md-tab-label>Prescription</md-tab-label>\n" +
    "							<md-tab-body>\n" +
    "								<div class=\"col-xs-12 col-sm-6 right-border\">\n" +
    "									<p ng-if=\"selectedPlan.prescriptionCoverage.rxDeductible\"><b>Pharmacy Drug Deductible:</b>\n" +
    "										<span>\n" +
    "										{{selectedPlan.prescriptionCoverage.rxDeductible}}\n" +
    "										</span>\n" +
    "									</p>\n" +
    "									<p ng-if=\"selectedPlan.prescriptionCoverage.gapCoverage\">\n" +
    "										<b>Coverage in the gap:</b>\n" +
    "										<span>{{selectedPlan.prescriptionCoverage.gapCoverage}}</span><span ng-show=\"!selectedPlan.prescriptionCoverage.gapCoverage\">No Coverage</span>\n" +
    "									</p>\n" +
    "									<p ng-if=\"selectedPlan.prescriptionCoverage.preferredGenericDrugCopay\">\n" +
    "										<b>Preferred generic drugs copay:</b>\n" +
    "										<span>\n" +
    "										{{selectedPlan.prescriptionCoverage.preferredGenericDrugCopay}}\n" +
    "										</span>\n" +
    "									</p>\n" +
    "									<p ng-if=\"selectedPlan.prescriptionCoverage.nonPreferredGenericDrugCopay\">\n" +
    "										<b>Generic drugs copay:</b>\n" +
    "										<span>\n" +
    "										 {{selectedPlan.prescriptionCoverage.nonPreferredGenericDrugCopay}}\n" +
    "										</span>\n" +
    "									</p>\n" +
    "									<p ng-if=\"selectedPlan.prescriptionCoverage.preferredBrandDrugCopay\"><span ng-if=\"!isTrilliumSNP\"><b>Preferred brand drugs copay:</b></span><span ng-if=\"isTrilliumSNP\"><b>Brand drugs copay:</b></span>\n" +
    "										<span>\n" +
    "										{{selectedPlan.prescriptionCoverage.preferredBrandDrugCopay}}\n" +
    "										</span>\n" +
    "									</p>\n" +
    "									<p ng-if=\"selectedPlan.prescriptionCoverage.nonPreferredBrandDrugCopay\"><b>Non Preferred brand drugs copay:</b>\n" +
    "										<span>\n" +
    "										{{selectedPlan.prescriptionCoverage.nonPreferredBrandDrugCopay}}\n" +
    "										</span>\n" +
    "									</p>\n" +
    "									<p ng-if=\"selectedPlan.prescriptionCoverage.specialtyDrugsCopay\"><b>Specialty drugs copay:</b>\n" +
    "										<span>\n" +
    "										{{selectedPlan.prescriptionCoverage.specialtyDrugsCopay}}\n" +
    "										</span>\n" +
    "									</p>\n" +
    "									<p ng-if=\"selectedPlan.prescriptionCoverage.selectCarDrugsCopay\"><b>Select care drugs copay:</b>\n" +
    "										<span>\n" +
    "										{{selectedPlan.prescriptionCoverage.selectCarDrugsCopay}}\n" +
    "										</span>\n" +
    "									</p>\n" +
    "								</div>\n" +
    "								<div class=\"col-xs-12 col-sm-6\">\n" +
    "									<p ng-hide=\"selectedPlan.resourceURLs.summaryOfBenefits=='N/A'\"><a href=\"{{sobPdfBaseUrl + selectedPlan.resourceURLs.summaryOfBenefits}}\" target=\"_blank\">Summary of\n" +
    "										Benefits (pdf)</a></p>\n" +
    "									<p ng-hide=\"selectedPlan.resourceURLs.evidenceOfCoverage=='N/A'\"><a href=\"{{eocPdfBaseUrl + selectedPlan.resourceURLs.evidenceOfCoverage}}\" target=\"_blank\">Evidence of\n" +
    "										Coverage (pdf)</a></p>\n" +
    "									<p><b>Pharmacy Information:</b></p>\n" +
    "									<p>Visit our <a href=\"{{drugsFormularyUrl}}\" target=\"_blank\">Drug and Pharmacy</a> page for details on this\n" +
    "								</div>\n" +
    "							</md-tab-body>\n" +
    "						</md-tab>\n" +
    "						</div>\n" +
    "						<div ng-if=\"!isEmptyObj(selectedPlan.supplementalPlan)\">\n" +
    "						<md-tab id=\"tab3\">\n" +
    "							<md-tab-label>Supplemental</md-tab-label>\n" +
    "							<md-tab-body>\n" +
    "								<p><b>Buy-up Options</b></p>\n" +
    "								<p><b>Optional Supplemental Package:</b></p>\n" +
    "								<div class=\"col-xs-9 col-sm-6\">\n" +
    "									<div ng-repeat=\"supplementalValue in selectedPlan.supplementalPlan\">\n" +
    "										<span style=\"word-wrap: break-word;\" ng-if=\"supplementalValue.indexOf('$') === -1\">{{supplementalValue}}</span>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"col-xs-3 col-sm-6 pull-left\">\n" +
    "									<div ng-repeat=\"supplementalValue in selectedPlan.supplementalPlan\">\n" +
    "										<span style=\"word-wrap: break-word;\" ng-if=\"supplementalValue.indexOf('$') > -1\">{{supplementalValue}}&nbsp;&nbsp;&nbsp;&nbsp;</span>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</md-tab-body>\n" +
    "						</md-tab>\n" +
    "						</div>\n" +
    "						<md-tab id=\"tab4\">\n" +
    "							<md-tab-label>Resources</md-tab-label>\n" +
    "							<md-tab-body >\n" +
    "								<div class=\"col-xs-12\">\n" +
    "									<p>Enrollment forms and brochures (click to view or print)</p>\n" +
    "									<ul>\n" +
    "										<li ng-hide=\"selectedPlan.resourceURLs.enrollApp=='N/A'\"><a href=\"{{eaPdfBaseUrl + selectedPlan.resourceURLs.enrollApp}}\" target=\"_blank\">View/Print\n" +
    "											Enrollment\n" +
    "											Application (pdf) (English)</a></li>\n" +
    "										<li ng-hide=\"selectedPlan.resourceURLs.lowIncomeSubsidy=='N/A'\"><a href=\"{{lisPdfBaseUrl + selectedPlan.resourceURLs.lowIncomeSubsidy}}\" target=\"_blank\">Low Income\n" +
    "											Subsidy (LIS) Premium Summary Table for people receiving extra help (pdf)</a>\n" +
    "										</li>\n" +
    "										<li ng-hide=\"selectedPlan.resourceURLs.comparePlans=='N/A'\"><a href=\"{{comparePlansBaseUrl + selectedPlan.resourceURLs.comparePlans}}\" target=\"_blank\">Compare Plans (PDF)</a>\n" +
    "										</li>\n" +
    "										<li ng-hide=\"selectedPlan.starRatingsPDF=='N/A'\"><a href=\"{{starRatingsBaseUrl + selectedPlan.starRatingsPDF}}\" target=\"_blank\">Star Ratings (PDF)</a>\n" +
    "										</li>\n" +
    "										<li ng-hide=\"selectedPlan.resourceURLs.healthyDiscounts=='N/A'\"><a href=\"{{healthyDiscountsBaseUrl + selectedPlan.resourceURLs.healthyDiscounts}}\" target=\"_blank\">healthyDiscounts (PDF)</a>\n" +
    "										</li>\n" +
    "										<li ng-hide=\"languagePDF==''\"><a href=\"{{languagePDF}}\" target=\"_blank\">Language Assistance (PDF)</a>\n" +
    "										</li>\n" +
    "									</ul>\n" +
    "								</div>\n" +
    "							</md-tab-body>\n" +
    "						</md-tab>\n" +
    "					</md-tabs>\n" +
    "				</md-content>\n" +
    "\n" +
    "			</div>\n" +
    "			<div class=\"row\" id=\"bottom-breadcrumb\">\n" +
    "				<div class=\"col-md-8 hidden-xs hidden-sm\">\n" +
    "					<a href=\"#/plans\"><span class=\"glyphicon glyphicon-chevron-left\"></span>Back to Medicare Advantage Plans</a>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"col-xs-12 col-md-4 text-xs-left text-md-right\">\n" +
    "					<a class=\"btn btn-default\" ng-if=\"requestInfo\" href=\"{{requestInfo}}\" target=\"_blank\" >Request Information</a>\n" +
    "					<a class=\"btn btn-warning apply-now\" ng-if=\"!selectedPlan.applyOnline\" ng-disabled=\"true\" uib-popover=\"{{applyOnlineDisabledMsg}}\" popover-trigger=\"'mouseenter'\">Apply Now</a>\n" +
    "					<a class=\"btn btn-warning apply-now\" ng-if=\"selectedPlan.applyOnline\" href=\"{{selectedPlan.applyNowUrl}}\">Apply Now</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<!-- HELP Modal -->\n" +
    "	<div class=\"modal fade\" id=\"helpModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"helpModalLabel\">\n" +
    "		<div class=\"modal-dialog\" role=\"document\">\n" +
    "			<div class=\"modal-content\">\n" +
    "				<div class=\"modal-header\">\n" +
    "					<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "					<h4 class=\"modal-title\" id=\"myModalLabel\">How to use this page</h4>\n" +
    "				</div>\n" +
    "				<div class=\"modal-body\">\n" +
    "					<img src=\"../../../medicareadv/assets/images/{{currentHelpImagedetails}}.png\" data-ratio=\"{{currentImageRatio}}\" id=\"{{currentHelpImagedetails}}\" border=\"0\" class=\"help-img active-help\" />\n" +
    "					<p id=\"block-tester\"></p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<!-- END HELP US Modal -->\n" +
    "</div>");
}]);

angular.module("routes/plans/plans.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("routes/plans/plans.tpl.html",
    "<header></header>\n" +
    "\n" +
    "\n" +
    "<!-- 	START OF PAGE CONTENT -->\n" +
    "<div class=\"container-fluid\">\n" +
    "\n" +
    "    <section id=\"pst-results\" >\n" +
    "        <b class=\"text-danger\">{{message}}</b>\n" +
    "        <div ng-if=\"isLoading\">\n" +
    "            <loading-indicator ng-model=\"isLoading\"></loading-indicator>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"item in userInfo\" ng-model=\"userInfo\">\n" +
    "\n" +
    "            <article class=\"result\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12 col-md-9\">\n" +
    "                        <div class=\"col-xs-12 col-md-9\"><h3><a href=\"#plan-detail/{{item.planId}}\">{{item.planName}}</a></h3>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-12 col-md-4\">\n" +
    "                            <p class=\"coverage-enable\">\n" +
    "                                <span>Medical Coverage</span>\n" +
    "                            </p>\n" +
    "                            <p>\n" +
    "                                Deductible: {{item.medicalCoverage.deductible}}\n" +
    "                            </p>\n" +
    "                            <p>\n" +
    "                                Max out of Pocket: {{item.medicalCoverage.oopMax}}\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-12 col-md-4 right-two-side\">\n" +
    "                            <p ng-class=\"selectPlanCoverageClass(item.prescriptionCoverage)\">\n" +
    "                                Prescription Coverage\n" +
    "                            </p>\n" +
    "                            <p ng-if=\"item.prescriptionCoverage.rxDeductibl\">\n" +
    "                                Deductible: {{item.prescriptionCoverage.rxDeductible}}\n" +
    "                            </p>\n" +
    "                            <p ng-if=\"item.prescriptionCoverage.preferredGenericDrugCopay && !Istrillium\">\n" +
    "                                <span>Preferred Generic Drug Copay:</span>{{item.prescriptionCoverage.preferredGenericDrugCopay}}\n" +
    "                            </p>\n" +
    "                            <p ng-if=\"item.prescriptionCoverage.preferredBrandDrugCopay && Istrillium\">\n" +
    "                                <span>Brand Drugs Copay:</span> {{item.prescriptionCoverage.preferredBrandDrugCopay}}\n" +
    "                            </p>\n" +
    "                            <p ng-if=\"item.prescriptionCoverage.nonPreferredGenericDrugCopay\">\n" +
    "                                Generic drug copay: {{item.prescriptionCoverage.nonPreferredGenericDrugCopay}}\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-12 col-md-4\">\n" +
    "                            <p class=\"supplemental\">\n" +
    "                                <span class=\"glyphicon glyphicon-plus\"></span>Supplemental\n" +
    "                            </p>\n" +
    "                            <div ng-hide=\"!item.supplementalPlan.pkgs\">\n" +
    "                                <div ng-repeat=\"pkg in item.supplementalPlan.pkgs\" class=\"supplementalPackages\">\n" +
    "                                    <p>{{pkg}}</p>\n" +
    "                                </div>\n" +
    "                                <div ng-repeat=\"cost in item.supplementalPlan.costs\" class=\"supplementalCost\">\n" +
    "                                    <p>{{cost}}</p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-hide=\"item.supplementalPlan.pkgs\">\n" +
    "                                <p>There is no optional supplemental coverage for this plan.</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-12 col-md-9\" ng-if=\"userInfo.length > 1\" class=\"select-to-compare checkbox\">\n" +
    "                            <span ng-click=\"productCompare(item, !isPlanSelected(item.planId));\">\n" +
    "                            <i class=\"fa fa-lg\" ng-class=\"{'fa-square-o': !isPlanSelected(item.planId), 'fa-check-square ': isPlanSelected(item.planId) }\"></i></span>\n" +
    "                              &nbsp;&nbsp;Select to compare (up to three plans)\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-12 col-md-3 text-xs-left text-md-right\">\n" +
    "                        <p class=\"monthly-premium-price\">{{item.monthlyPremium}}</p>\n" +
    "                        <p class=\"monthly-premium-text\">monthly premium</p>\n" +
    "                        <p ng-if=\"item.starRatings > 0\">\n" +
    "                            Star Rating: <a href=\"{{starRatingsBaseUrl + item.starRatingsPDF}}\" target=\"_blank\" class=\"star-ratings\">\n" +
    "                            <rate ng-model=\"item.starRatings\" icon-empty = \"fa-star-o\" icon-full = \"fa-star\" icon-half = \"fa-star-half-o\" icon-base = \"fa\" other-class=\"glyphicon-star\" readonly=\"true\"></rate>\n" +
    "                        </a>\n" +
    "                        </p>\n" +
    "                        <p>\n" +
    "                            <a ng-if=\"!item.applyOnline\" ng-disabled=\"true\" uib-popover=\"{{applyOnlineDisabledMsg}}\" popover-trigger=\"'mouseenter'\"  class=\"btn btn-warning apply-now\">Apply Now</a>\n" +
    "                            <a ng-if=\"item.applyOnline\" class=\"btn btn-warning apply-now\" href=\"{{buildApplyNowUrl(item)}}\" target=\"_self\">Apply Now</a>\n" +
    "                        </p>\n" +
    "                        <p>\n" +
    "                            <a class=\"btn btn-default details-btn\" id=\"detailsButton{{$index}}\" href=\"#/plan-detail/{{item.planId}}\">Details</a>\n" +
    "                        </p>\n" +
    "                        <p>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "            </article>\n" +
    "        </div><span id=\"content-top\"></span>\n" +
    "        <div class=\"compareproducts\" ng-hide=\"selectedPlans.length===0\">\n" +
    "\n" +
    "            <div ng-repeat=\"compareItem in selectedPlans\">\n" +
    "                <div class=\"col-xs-4 col-md-3 product\">\n" +
    "                    <a href=\"javascript:void(0);\"\n" +
    "                       ng-click=\"productCompare(compareItem, false)\"\n" +
    "                       type=\"button\" style=\"\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
    "                        <span aria-hidden=\"true\">×</span>\n" +
    "                    </a>\n" +
    "\n" +
    "                    <p class=\"planName\">{{compareItem.planName}}</p>\n" +
    "                    <p class=\"hidden-xs hidden-sm\">{{compareItem.monthlyPremium}}</p>\n" +
    "\n" +
    "                    <a class=\"btn btn-warning apply-now\"\n" +
    "                       ng-if=\"!compareItem.applyOnline\" ng-disabled=\"true\">Apply Now</a>\n" +
    "\n" +
    "                    <a class=\"btn btn-warning apply-now\" ng-if=\"compareItem.applyOnline\"\n" +
    "                       href=\"{{buildApplyNowUrl(compareItem)}}\">Apply Now</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-md-3 compare\" ng-show=\"selectedPlans.length>=2\">\n" +
    "                <a href=\"#/compare-plans\">COMPARE</a>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <!-- HELP Modal -->\n" +
    "    <div class=\"modal fade\" id=\"helpModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"helpModalLabel\">\n" +
    "        <div class=\"modal-dialog\" role=\"document\">\n" +
    "            <div class=\"modal-content\">\n" +
    "                <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "                   <h4 class=\"modal-title\" id=\"myModalLabel\">How to use this page</h4>\n" +
    "                </div>\n" +
    "                <div class=\"modal-body\">\n" +
    "                    <img src=\"../../../assets/images/{{currentHelpImage}}.png\" data-ratio=\"{{currentImageRatio}}\" id=\"{{currentHelpImage}}\" border=\"0\" class=\"help-img active-help\" />\n" +
    "\n" +
    "                    <p id=\"block-tester\"></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <span id=\"content-top\"></span>\n" +
    "    <!-- END HELP US Modal -->\n" +
    "</div>");
}]);

angular.module("routes/selectlanguage/selectlanguage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("routes/selectlanguage/selectlanguage.tpl.html",
    "<!-- LANGUAGE Modal -->\n" +
    "\n" +
    "<div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" ng-click=\"selectLanguageCtrl.close()\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\">Language Assistance</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <p class=\"h4\"><a href=\"#\" title=\"link to switch to Spanish version of the site\">Ver site in Espa&ntilde;ol</a></p>\n" +
    "        <p>&nbsp;</p>\n" +
    "        <p class=\"h4\">Need help in your language?</p>\n" +
    "        <p><a href=\"#\" title=\"link to language assistance PDF for Medicare\">Language assistance information (PDF)</a></p>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" ng-click=\"selectLanguageCtrl.close()\">Close</button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("routes/zipCodeSearch/zipCodeSearch.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("routes/zipCodeSearch/zipCodeSearch.tpl.html",
    "<div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "       <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" ng-click=\"zipCodeSearchCtrl.close()\"><span aria-hidden=\"true\">&times;</span></button>-->\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\"> Welcome To Medicare Online Enrollment</h4>\n" +
    "    </div>\n" +
    "    <form name=\"zipForm\" ng-submit=\"updateResults(zipCode)\" >\n" +
    "        <div class=\"modal-body\">\n" +
    "            <h5>To get started, please enter your zip code in the field below and click 'Go'.</h5>\n" +
    "                <div>\n" +
    "                    <input type=\"text\" keyh maxlength=\"5\" name=\"zip\" placeholder=\"Zip code\" ng-model=\"zipCodeSearchCtrl.zipCode\" autofocus required zipcode-validate/>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                </div>\n" +
    "        </div>\n" +
    "        <div class=\"modal-footer\">\n" +
    "            <button type=\"submit\" class=\"btn btn-warning\" data-dismiss=\"modal\" ng-click=\"zipCodeSearchCtrl.Go()\">Search Zip Code</button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("sidebar/sidebar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sidebar/sidebar.tpl.html",
    "<section id=\"sidebar-wrapper\">\n" +
    "	<ul class=\"sidebar-nav\">\n" +
    "		<li class=\"sidebar-brand\">\n" +
    "\n" +
    "		</li>\n" +
    "		<!--NEW KANGAROO: REAL LINKS AND REAL-ISH PLACEHOLDER LINKS FOR MOE -->\n" +
    "		<li ng-if=\"accessibility === 'Y'\">\n" +
    "			<a href=\"{{accessabilityInfoUrl}}\" target=\"_blank\" title=\"link to accessibility information on the originating health plan site\">Accessibility Information</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<a href=\"{{contactUrl}}\" target=\"_blank\" title=\"Contact Us\">Contact Us</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<a href=\"{{fapUrl}}\" target=\"_blank\" title=\"link to find a doctor / provider search tool on the originating health plan site\">{{fapLabel}}</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<a href ng-click=\"glossaryOfTerms()\">Glossary of Terms</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<a href=\"{{languageAssistanceUrl}}\" target=\"_blank\" title=\"link to language assistance PDF for the selected plan\">Language Assistance (PDF)</a>\n" +
    "		</li>\n" +
    "		<li ng-if=\"needToFinishUrl!=undefined\">\n" +
    "			<a href=\"{{needToFinishUrl}}\" target=\"_blank\" title=\"link to Need to finish the application for the selected plan\">Need to Finish Your Application?</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<a href=\"{{registrationUrl}}\" target=\"_blank\">Register</a>\n" +
    "		</li>\n" +
    "		<li ng-show=\"showSummaryOfBenefits\">\n" +
    "			<a href=\"{{sobPdfBaseUrl + summaryOfBenefitsPdf}}\" target=\"_blank\" title=\"link to summary of benefits PDF for the selected plan\">Summary of Benefits (PDF)</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<a href=\"{{starRatingsUrl}}\" target=\"_blank\" title=\"link to star ratings info PDF for the selected plan\">About Star Ratings</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<a href=\"{{privacyPolicyUrl}}\" target=\"_blank\">Privacy Policy</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<a href=\"{{formsBrochuresUrl}}\" target=\"_blank\">Forms & Brochures</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<p>Need help?<br />\n" +
    "				{{companyName}}<br />\n" +
    "				Call toll-free {{phone1}}<br />\n" +
    "				(Our office hours are 8:00 a.m. to 8:00 p.m., 7 days a week (October 1st - February 14th) and Monday through Friday, 8:00 a.m. to 8:00 p.m. (February 15th - September 30th), excluding holidays.)</p>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</section>");
}]);

angular.module("topNavbar/topNavbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("topNavbar/topNavbar.tpl.html",
    "<md-content class=\"navbar navbar-default navbar-fixed-top pst md-hue-1\" ng-class=\"getHeaderStyle()\"><!--add  reversed-out here for dark headers, add plan name here too-->\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li><a href=\"#\" id=\"menu-toggle\"><span class=\"glyphicon glyphicon-menu-hamburger\" aria-hidden=\"true\"></span><span class=\"glyphicon glyphicon-menu-hamburger\" aria-hidden=\"true\"></span></a></li>\n" +
    "            <li><a href=\"#\" class=\"logo hidden-xs\"><img ng-src=\"{{'assets/images/logos/' + url + '_40.png'}}\" /></a></li>\n" +
    "        </ul>\n" +
    "\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\n" +
    "\n" +
    "            <li>\n" +
    "                <a href=\"#\" data-toggle=\"modal\" data-target=\"#langModal\" id=\"language-header-link\">\n" +
    "                <span class=\"glyphicon glyphicon-triangle-bottom\" aria-hidden=\"true\"></span> English</a>\n" +
    "            </li>\n" +
    "\n" +
    "            <li ng-show=\"userInfo.length>0\">\n" +
    "<!--\n" +
    "                <a uib-popover-template=\"getContactsUrl()\" popover-trigger=\"focus\" popover-append-to-body=\"true\" popover-placement=\"bottom-right\" id=\"contact-header-link\" title=\"View contact information\">\n" +
    "-->\n" +
    "                <a data-toggle=\"modal\" data-target=\"#contactModal\" id=\"contact-header-link\" title=\"View contact information\">\n" +
    "                    <span class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></span></a>\n" +
    "            </li>\n" +
    "\n" +
    "            <li><a href=\"\" data-toggle=\"modal\" data-target=\"#helpModal\" id=\"help-header-link\" title=\"View help information\"><span>?</span></a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</md-content>\n" +
    "\n" +
    "\n" +
    "<div class=\"modal fade clear-right\" id=\"contactModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"contactModalLabel\">\n" +
    "    <div class=\"modal-dialog\" role=\"document\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "                <h4 class=\"modal-title\" id=\"myModalLabel\">Contact Us</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <p class=\"h4\">Medicare Advantage Sales/Enrollment</p>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <p class=\"h5\">February 15–September 30</p>\n" +
    "                        <p>Monday through Friday, 8:00 a.m. to 8:00 p.m.\n" +
    "                            <BR />Excluding holidays</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <p class=\"h5\">October 1–February 14</p>\n" +
    "                        <p>7 days a week, 8:00 a.m. to 8:00 p.m.\n" +
    "                            <BR />Excluding holidays</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <p class=\"h4\">Medicare Advantage Plans</p>\n" +
    "                <p>Call us now at {{phone1}}</p>\n" +
    "                    <!--<p><BR />TTY users should call 711.</p>\n" +
    "                    <p><strong>Mailing Address</strong><br /> Attention: Customer Response Center<br /> Health Net,\n" +
    "                    Inc.<br /> PO Box 10420<br /> Van Nuys, CA 91410-0420</p>-->\n" +
    "          </div>\n" +
    "   <div class=\"modal-footer\">\n" +
    "       <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "   </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>");
}]);

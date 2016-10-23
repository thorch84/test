(function(){
	'use strict';

	angular
		.module('pstApp')
		.factory('plansService', plansService);

    plansService.$inject = ['$http', 'EnvironmentConfig'];

	function plansService($http, EnvironmentConfig) {
	    var serv = this;
        serv.searchData = {
            year:"",
            zipCode:"",
            county:"",
            business:""
        };
        serv.getPlans = getPlans;
        return serv;

        function getPlans(zipCode, year, county, business) {
            var resourceURL = "/productservice/api/v1/products?zipCode=" + zipCode + "&year=" + year + "&county=" + county + "&business=" + business;
            var url = EnvironmentConfig.generateRequestUrl(resourceURL) + "6";
			var headers = EnvironmentConfig.generateHeaders();

            return $http.get(url, headers);
        }
	}
})();
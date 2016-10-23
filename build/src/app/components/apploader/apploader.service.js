(function () {
	angular
		.module('appLoader')
		.factory('appLoader', appLoader);

	appLoader.$inject = ["DataService", "$rootScope", "$q"];
	/* @ngInject */
	function appLoader(DataService, $rootScope, $q) {

		var serv = this;
		serv.appLoaded = false;
		serv.load = load;
		serv.setConfig = setConfig;
		serv.setLabels = setLabels;

		return serv;


		//////////////////////////

		function load() {
			var deferred = $q.defer();

			if (!serv.appLoaded) {
				$q.all([setLabels(), setConfig()]).then(function () {
                    serv.appLoaded = true;
					return deferred.resolve();
				});
			}
			else{
				deferred.resolve();
			}

			return deferred.promise;
		}

        function setConfig() {
            var deferred = $q.defer();
            DataService.getConfigData()
                .then(function(results) {
					$rootScope.config = results.data.results.configMap;
					$rootScope.$broadcast('configUpdate');
                    return deferred.resolve();
				});
            return deferred.promise;
        }

        function setLabels() {
            var deferred = $q.defer();
            DataService.getLabelData("en")
                .then(function(results) {
					$rootScope.labels = results.data.results.labelMap;
                    $rootScope.$broadcast('labelUpdate');
                    return deferred.resolve();
				});
            return deferred.promise;
        }


	}
})();
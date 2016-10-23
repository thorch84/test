(function() {
	'use strict';

	angular
		.module('data')
		.factory('DataService', DataService);

	DataService.$inject = ['$http', 'localStorageService', 'EnvironmentConfig', 'urlaestheticservice'];
	/* @ngInject */
	function DataService($http, localStorageService, EnvironmentConfig, urlaestheticservice) {
		
		var service = {
			setLocalStorage: setLocalStorage,
			getLocalStorage: getLocalStorage,
			getLabelData: getLabelData,
			getConfigData: getConfigData,
			removeLocalStorage: removeLocalStorage
		};

		return service;

		///////////////////////////////////

		function getConfigData() {

			var planId = urlaestheticservice.getPlanId();
			var url = EnvironmentConfig.generateRequestUrl('/rest/api/config/v1/configs/app/productSelectionTool/plan/' + planId);
			var headers = EnvironmentConfig.generateHeaders();
			headers.cache= true;

			return $http.get(url, headers);
		}

		
		function getLabelData(language) {

			var planId = urlaestheticservice.getPlanId();
			var url = EnvironmentConfig.generateRequestUrl('/rest/api/config/v1/labels/app/productSelectionTool/plan/' + planId + '/lang/' + language);
			var headers = EnvironmentConfig.generateHeaders();
			headers.cache= true;

			return $http.get(url, headers);
		}

		//----------------------------------------------------------
		// Sets local storage to the key, value parameters.
		//----------------------------------------------------------
		function setLocalStorage(key, value) {
			//$localStorageService.set(key, value);
			localStorageService.set(key, value);
		}

		//----------------------------------------------------------
		// Returns locally saved data based on key parameter.
		//----------------------------------------------------------
		function getLocalStorage(key) {
			//return $localStorageService.get(key);
			return localStorageService.get(key);
		}

		//----------------------------------------------------------
		// Removes locally saved data based on key parameter.
		// key = 'key name' or key = 'key name 1', 'key name 2', 'etc...'
		//----------------------------------------------------------
		function removeLocalStorage(key) {

			if (typeof key == 'string') {
				//$localStorageService.remove(key);
				localStorageService.remove(key);
			} else {
				//--- Multiple keys.
				//$localStorageService.remove.apply(this, key);
				for (var i = 0; i < key.length; i++) {
					localStorageService.remove(key[i]);
				}

			}
		}
		
	}
})();

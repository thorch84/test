(function () {
	'use strict';

	angular
		.module('pstApp.config')
		.service('EnvironmentConfig', EnvironmentConfig);

	function EnvironmentConfig() {

		var _environments = {
			local: {
				subdomain: 'local-shop',
				// config: {
				// 	apiGatewayUrl: 'http://dev-internal-apps.centene.com/api/public?resource=',
				// 	apiEnvironmentIdentifier: "dev",
				// 	apiAccessKey: "64b3d536-ddd2-4ee8-b581-f900ceb85537",
				// 	appId: 1
				// }
//        			config: {
//        				apiGatewayUrl: 'http://localhost:8080',
///**            			apiEnvironmentIdentifier: "",**/
////        				apiAccessKey: "45748a52-ef5c-4be8-b760-2adc1305482a",
//        				appId: 1
//        			}
					config: {
						apiGatewayUrl: 'https://test-api-gateway.centene.com/api/public?resource=',
						apiEnvironmentIdentifier: "test",
						apiAccessKey: "64b3d536-ddd2-4ee8-b581-f900ceb85537",
						appId: 1
					}
			},
			dev: {
				subdomain: 'dev-shop',
				config: {
					apiGatewayUrl: 'https://test-api-gateway.centene.com/api/public?resource=',
					apiEnvironmentIdentifier: "dev",
					apiAccessKey: "64b3d536-ddd2-4ee8-b581-f900ceb85537",
					appId: 1
				}
			},
			test: {
				subdomain: 'test-shop',
				config: {
					apiGatewayUrl: 'https://test-api-gateway.centene.com/api/public?resource=',
					apiEnvironmentIdentifier: "test",
					apiAccessKey: "64b3d536-ddd2-4ee8-b581-f900ceb85537",
					appId: 1
				}
			},
			prod: {
				subdomain: 'shop',
				config: {
					apiGatewayUrl: 'https://api-gateway.centene.com/api/public?resource=',
					apiEnvironmentIdentifier: "prod",
					apiAccessKey: "bd884336-ec06-4c43-a9c6-7a09a69acd23",
					appId: 1
				}
			}
		};


		return {
			getEnvironment: function () {
				var host = window.location.host;
				//window.location.host is subdomain.domain.com

				var parts = host.split('.');
				var sub = parts[0];
				var domain = parts[1];
				var type = parts[2];

				if (_environments) {
					for (var environment in _environments) {
						if (_environments[environment].subdomain == sub) {
							return _environments[environment];
						}
					}
					return _environments.local;
				}
			},

			generateRequestUrl: function ($resourceUri) {

				var service = this;

				var environment = service.getEnvironment();

				//console.log(environment);

				var hostname = environment["config"].apiGatewayUrl;
				var env = environment["config"].apiEnvironmentIdentifier;
				var apiKey = environment["config"].apiAccessKey;

				var headers = {
					headers: {
						'Content-Type': 'application/json;charset=UTF-8',
						'apiKey': apiKey,
						'Accept': 'application/json;charset=UTF-8'
					},
					timeout: 5000
				};

				var fullURl = hostname;

				if (env != null) {
					fullURl = fullURl + encodeURIComponent($resourceUri) + '&env=' + env;
				}
				else {
					fullURl = fullURl + $resourceUri;
				}

				return fullURl;
			},

			generateHeaders: function () {

				var service = this;

				var environment = service.getEnvironment();

				//console.log(environment);

				var hostname = environment["config"].apiGatewayUrl;
				var env = environment["config"].apiEnvironmentIdentifier;
				var apiKey = environment["config"].apiAccessKey;

				var headers = {
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
						'apiKey': apiKey
					}
				};

				return headers;

			},

			getApplicationId: function () {

				var service = this;

				var environment = service.getEnvironment();

				//console.log(environment);

				return environment["config"].appId;
			}
		};

	}
})();
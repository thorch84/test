(function () {
	'use strict';

	angular.module('urlAestheticServiceApp')
		.factory('urlaestheticservice', urlaestheticservice);

	urlaestheticservice.$inject = ['$location'];
	/* @ngInject */
	function urlaestheticservice($location) {

		var siteAesthetic = {};
		var dataFactory = {};


		siteAesthetic.url = $location.host();

		if (siteAesthetic.url.lastIndexOf('.') >= 0) {
			siteAesthetic.url = siteAesthetic.url.slice(siteAesthetic.url.indexOf('.') + 1, siteAesthetic.url.lastIndexOf('.'));
		} else {
			siteAesthetic.url = siteAesthetic.url.slice(siteAesthetic.url.indexOf('.') + 1);
		}


		switch (siteAesthetic.url) {
			case 'pshpgeorgia':
				siteAesthetic.color = 'orange';
				siteAesthetic.planId = 38;
				break;
			case 'magnoliahealthplan':
				siteAesthetic.color = 'orange';
				siteAesthetic.planId = 32;
				break;
			case 'mhswi':
				siteAesthetic.color = 'raspberry';
				siteAesthetic.planId = 19;
				break;
			case 'sunshinehealth':
				siteAesthetic.color = 'orange';
				siteAesthetic.planId = 50;
				break;
			case 'superiorhealthplan':
				siteAesthetic.color = 'raspberry';
				siteAesthetic.planId = 20;
				break;
			case 'bridgewayhs':
				siteAesthetic.color = 'green';
				siteAesthetic.planId = 21;
				break;
			case 'buckeyehealthplan':
				siteAesthetic.color = 'green';
				siteAesthetic.planId = 22;
				break;				
			case 'trilliumadvantage':
				siteAesthetic.color = 'green';
				siteAesthetic.planId = 83;
				break;
			case 'healthnet':
				siteAesthetic.color = 'cyan';
				siteAesthetic.planId = 106;
				break;			
			default:
				siteAesthetic.color = 'cyan';
				siteAesthetic.planId = 106;
				break;
		}


		dataFactory.getUrl = function () {
			return siteAesthetic.url;
		};

		dataFactory.getColor = function () {
			return siteAesthetic.color;
		};

		dataFactory.getPlanId = function () {
			return siteAesthetic.planId;
		};

		return dataFactory;
	}
})();
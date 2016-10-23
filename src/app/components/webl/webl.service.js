(function(){
	'use strict';

	angular
		.module('webl')
		.factory('weblService', weblService);

	function weblService() {

		var serv = this;

		serv.returnLabel = function (valueName, obj) {
			if (obj === null || obj === undefined) {
				return null;
			}
			var arr = valueName.split(".");
			if (arr.length < 1) {
				return null;
			} else if (arr.length === 1) {
				if (obj.hasOwnProperty(arr[0])) {
					return obj[arr[0]].value;
				}
			} else {
				if (obj.hasOwnProperty(arr[0])) {
					obj = obj[arr[0]];
					arr.shift();
					return serv.returnLabel(arr.join("."), obj);
				} else {
					//console.log("Labels do not have a " + valueName + " property");
				}
			}
		};

		return serv;
	}

})();
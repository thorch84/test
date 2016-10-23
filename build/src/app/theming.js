(function() {
	'use strict';


	angular
		.module('pstApp')
		.config(config);

	config.$inject = ['$mdThemingProvider', 'urlaestheticserviceProvider'];

	function config ($mdThemingProvider, urlaestheticserviceProvider) {

		$mdThemingProvider.definePalette('appPrimary', {
			// '50': '#feefe3',
			'50': 'ffffff',
			'100': 'ff0000',
			'200': 'ff0000',
			'300': 'ff0000',
			'400': 'ff0000',
			'500': '000000', //Standard Text
			'600': '000000', //Selected Text
			'700': 'ff0000',
			'800': 'ff0000',
			'900': 'ff0000',
			'A100': 'ff0000',
			'A200': 'f58220',
			'A400': 'ff0000',
			'A700': 'ff0000',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
			'contrastLightColors': ['100']
		});

		$mdThemingProvider.definePalette('appAccent', {
			'50': 'ffffff',
			'100': '333333', //(DARK GREY)
			'200': 'ffffff',
			'300': '9cd889',
			'400': '83ce6b',
			'500': '69c44c', //(GREEN)
			'600': '55ae39',
			'700': '468f2f',
			'800': '377125',
			// '900': '28521b',
			'900': '333333',
			'A100': 'ffffff',
			'A200': '69c44c', // Buttons
			'A400': 'ff0000',
			'A700': 'ff0000',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
			'contrastLightColors': undefined
		});

		$mdThemingProvider.definePalette('appWarn', {
			'50': 'ff0000',
			'100': 'ff0000',
			'200': 'ff0000',
			'300': 'cccccc',
			'400': 'ff0000',
			'500': 'cccccc', //(GRAY)
			'600': 'ff0000',
			'700': 'cccccc',//hover
			'800': 'ff0000',
			'900': 'ff0000',
			'A100': 'ff0000',
			'A200': 'cccccc',
			'A400': 'ff0000',
			'A700': 'ff0000',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
			'contrastLightColors': undefined
		});

		$mdThemingProvider.definePalette('appBackground', {
			'50': 'ffffff',
			'100': '000000',
			'200': 'ffffff',
			'300': 'ffffff',
			'400': 'ffffff',
			'500': 'ffffff', //(WHITE)
			'600': 'ff0000',
			'700': '00ff00',//hover
			'800': 'ffffff',
			'900': 'ffffff',
			'A100': 'ffffff',
			'A200': 'ffffff',
			'A400': 'ffffff',
			'A700': 'ffffff',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
			'contrastLightColors': undefined
		});

		var locationPrimaryMap, locationAccentMap, locationWarnMap, locationBackgroundMap;

		//--- Set maps to default palettes.
		locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {});
		locationAccentMap = $mdThemingProvider.extendPalette('appAccent', {});
		locationWarnMap = $mdThemingProvider.extendPalette('appWarn', {});
		locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {});
		var domain = urlaestheticserviceProvider.$get().getUrl();

		//--- Get URL and apply the appropriate theme.
		switch (domain) {
			case 'louisianahealthconnect':
				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'f58220', //Primary Color
					'600': 'f58220' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'f58220' //--- Primary Background Accent Color
				});

				break;

			case 'coordinatedcarehealth':
				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': '73A533', //Primary Color
					'600': '73A533' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': '73A533' //--- Primary Background Accent Color
				});

				break;

			// HOME STATE HEALTH
			case 'homestatehealth':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'f58220', //Primary Color
					'600': 'f58220' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'f58220' //--- Primary Background Accent Color
				});

				break;

			case 'absolutetotalcare':
				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'b20837', //Primary Color
					'600': 'b20837' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'b20837' //--- Primary Background Accent Color
				});

				break;

			case 'kentuckyspirithealth':

				break;

			case 'magnoliahealthplan':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'f58220', //Primary Color
					'600': 'f58220' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'f8f8f8' //--- Primary Background Accent Color
				});

				break;

			case 'illinicare':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'ab035c', //Primary Color
					'600': 'ab035c' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'ab035c' //--- Primary Background Accent Color
				});

				break;

			case 'mhswi':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'CB177D', //Primary Color
					'600': 'CB177D' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'CB177D' //--- Primary Background Accent Color
				});

				break;

			case 'pshpgeorgia':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'f58220', //Primary Color
					'600': 'f58220' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'f8f8f8' //--- Primary Background Accent Color
				});

				break;

			case 'mhsindiana':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': '8c3589', //Primary Color
					'600': '8c3589' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': '8c3589' //--- Primary Background Accent Color
				});

				break;

			case 'sunshinehealth':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'f58220', //Primary Color
					'600': 'f58220', //Selected Text
					'100': 'ff0000'
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'f8f8f8' //--- Primary Background Accent Color
				});

				break;

			case 'granitestatehealthplan':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': '389dd8', //Primary Color
					'600': '389dd8' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': '389dd8' //--- Primary Background Accent Color
				});

				break;

			case 'sunflowerhealth':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'f58220', //Primary Color
					'600': 'f58220' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'f58220' //--- Primary Background Accent Color
				});

				break;

			case 'cenpaticoaz':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': '649735', //Primary Color
					'600': '649735' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': '649735' //--- Primary Background Accent Color
				});

				break;

			case 'celticarehealthplan':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'f58220', //Primary Color
					'600': 'f58220' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'f58220' //--- Primary Background Accent Color
				});

				break;

			case 'superiorhealthplan':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'CB177D', //Primary Color
					'600': 'CB177D' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'CB177D' //--- Primary Background Accent Color
				});

				break;
				
			case 'sunflowerstatehealth':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'f58220', //Primary Color
					'600': 'f58220' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'f58220' //--- Primary Background Accent Color
				});

				break;

			case 'bchpohio':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': '99C832', //Primary Color
					'600': '99C832' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': '99C832' //--- Primary Background Accent Color
				});

				break;

			case 'cenpatico':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': '649735', //Primary Color
					'600': '649735' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': '649735' //--- Primary Background Accent Color
				});

				break;

			case 'ambetterhealth':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'CB177D', //Primary Color
					'600': 'CB177D' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'CB177D' //--- Primary Background Accent Color
				});

				break;

			case 'cahealthwellness':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': '014681', //Primary Color
					'600': '014681' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': '014681' //--- Primary Background Accent Color
				});

				break;

			case 'nhhealthyfamilies':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': '389dd8', //Primary Color
					'600': '389dd8' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': '389dd8' //--- Primary Background Accent Color
				});

				break;

			case 'bridgewayhs':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'ab035c', //Primary Color
					'600': 'ab035c' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'CB177D' //--- Primary Background Accent Color
				});

				break;

			case 'local-provider.ambetterofarkansas':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'CB177D', //Primary Color
					'600': 'CB177D' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'CB177D' //--- Primary Background Accent Color
				});

				break;

			case 'centenemedicare':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': '13527d', //Primary Color
					'600': '13527d' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': '13527d' //--- Primary Background Accent Color
				});

				break;

			case 'buckeyehealthplan':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': '73A533', //Primary Color
					'600': '73A533' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'f8f8f8' //--- Primary Background Accent Color
				});

				break;


			case 'fidelissecurelife':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': '0d5c91', //Primary Color
					'600': '73A533' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': '0d5c91' //--- Primary Background Accent Color
				});

				break;
				
			case 'fostercaretx':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': 'CB177D', //Primary Color
					'600': 'CB177D' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'CB177D' //--- Primary Background Accent Color
				});

				break;

			case 'trilliumadvantage':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': '73A533', //Primary Color
					'600': '73A533' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': 'f8f8f8' //--- Primary Background Accent Color
				});

				break;

			case 'cenpaticointegratedcareaz':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': '222D66', //Primary Color
					'600': '222D66' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': '222D66' //--- Primary Background Accent Color
				});

				break;

			case 'healthnet':

				locationPrimaryMap = $mdThemingProvider.extendPalette('appPrimary', {
					'500': '007e7a', //Primary Color
					'600': '007e7a' //Selected Text
				});

				locationBackgroundMap = $mdThemingProvider.extendPalette('appBackground', {
					'100': '007e7a' //--- Primary Background Accent Color
				});

				break;
				
			default:
		}

		$mdThemingProvider.definePalette('locationPrimaryTheme', locationPrimaryMap);
		$mdThemingProvider.definePalette('locationAccentTheme', locationAccentMap);
		$mdThemingProvider.definePalette('locationWarnTheme', locationWarnMap);
		$mdThemingProvider.definePalette('locationBackgroundTheme', locationBackgroundMap);


		$mdThemingProvider.theme('default')
			.primaryPalette('locationPrimaryTheme', {
				'default': '500',
				'hue-1': '100',
				'hue-2': '200'
			})
			.accentPalette('locationAccentTheme', {
				'default': '500',
				'hue-1': '100',
				'hue-2': '200'
			})
			.warnPalette('locationWarnTheme', {
				'default': '500',
				'hue-1': '100',
				'hue-2': '200',
				'hue-3': '300'
			})
			.backgroundPalette('locationBackgroundTheme', {
				'default': '500',
				'hue-1': '100',
				'hue-2': '200'
			});
	}
})();
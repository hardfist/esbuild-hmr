System.register(['./answer.js', './lib.js'], (function () {
	'use strict';
	var answer, lib;
	return {
		setters: [function (module) {
			answer = module.answer;
		}, function (module) {
			lib = module.lib;
		}],
		execute: (function () {

			console.log('answer:',answer,lib);

		})
	};
}));

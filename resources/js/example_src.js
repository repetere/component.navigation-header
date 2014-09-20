'use strict';

var navigationHeader = require('../../index'),
	periodicalNavigation;

var navEvents = function () {
	periodicalNavigation.on('navigationInitialized', function () {
		console.log('nav loaded');
	});
	periodicalNavigation.on('navigationShowEvent', function () {
		// console.log('nav shown');
	});
	periodicalNavigation.on('navigationSubNavShowEvent', function () {
		console.log('nav sub nav shown');
	});
	periodicalNavigation.on('navigationHideNavShowEvent', function () {
		console.log('nav hide sub nav');
	});

	window.addEventListener('scroll', function () {
		var sections = document.querySelectorAll('section');

		if (window.scrollY <= sections[0].offsetTop) {
			window.periodicalNavigation.showNav(5);
		}
		else if (window.scrollY > sections[0].offsetTop && window.scrollY <= sections[1].offsetTop) {
			window.periodicalNavigation.showNav(1);
		}
		else if (window.scrollY > sections[1].offsetTop && window.scrollY <= sections[2].offsetTop) {
			window.periodicalNavigation.showNav(3);
		}

		else if (window.scrollY > sections[2].offsetTop && window.scrollY <= sections[3].offsetTop) {
			window.periodicalNavigation.showNav(8);
		}
		else if (window.scrollY > sections[3].offsetTop && window.scrollY <= sections[4].offsetTop) {
			window.periodicalNavigation.showNav(9);
		}

		else if (window.scrollY > sections[4].offsetTop && window.scrollY <= sections[5].offsetTop) {
			window.periodicalNavigation.showNav(2);
		}

		else if (window.scrollY > sections[5].offsetTop) {
			window.periodicalNavigation.showNav(10);
		}
	});

};

window.addEventListener('load', function () {
	periodicalNavigation = new navigationHeader({
		idSelector: 'ha-header'
	});
	navEvents();
	window.periodicalNavigation = periodicalNavigation;
}, false);

'use strict';

var argscheck = require('cordova/argscheck'),
	exec = require('cordova/exec');

var drminfoExport = {
	getVersion: function (successCallback, errorCallback) {
		argscheck.checkArgs('fF', 'drminfo.getVersion', arguments);
		errorCallback = errorCallback || function () {};

		var args = [];
		exec(successCallback, errorCallback, 'toast.drminfo', 'getVersion', args);
	},
	getEsn: function (compName, successCallback, errorCallback) {
		argscheck.checkArgs('sfF', 'drminfo.getEsn', arguments);
		errorCallback = errorCallback || function () {};

		var args = [compName];
		exec(successCallback, errorCallback, 'toast.drminfo', 'getEsn', args);
	},
	getSdiId: function (successCallback, errorCallback) {
		argscheck.checkArgs('fF', 'drminfo.getSdiId', arguments);
		errorCallback = errorCallback || function () {};

		var args = [];
		exec(successCallback, errorCallback, 'toast.drminfo', 'getSdiId', args);
	}
};

module.exports = drminfoExport;

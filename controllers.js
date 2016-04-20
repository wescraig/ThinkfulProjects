'use strict';

angular.module('madLibApp', [])

.controller('madLibCtrl', function(){
	
	this.maleName = "";
	this.maleNameOutput = "________________";

	this.applyWords = function(){
		this.maleNameOutput = this.maleName;
	}

});
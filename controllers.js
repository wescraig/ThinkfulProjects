'use strict';

angular.module('madLibApp', [])

.controller('madLibCtrl', function(){
	
	this.maleName = "";
	this.maleNameOutput = "________________";

	this.jobTitle = "";
	this.jobTitleOutput = "________________";

	this.tedTask = "";
	this.tedTaskOutput = "________________";

	this.dirtyTask = "";
	this.dirtyTaskOutput = "________________";

	this.celeb = "";
	this.celebOutput = "________________";

	this.uselessSkill = "";
	this.uselessSkillOutput = "________________";

	this.obCeleb = "";
	this.obCelebOutput = "________________";

	this.hugeNum = "";
	this.hugeNumOutput = "________________";

	this.adj = "";
	this.adjOutput = "________________";	

	this.applyWords = function(){
		this.maleNameOutput = this.maleName;
		this.jobTitleOutput = this.jobTitle;
		this.tedTaskOutput = this.tedTask;
		this.dirtyTaskOutput = this.dirtyTask;
		this.celebOutput = this.celeb
		this.uselessSkillOutput = this.uselessSkill;
		this.obCelebOutput = this.obCeleb;
		this.hugeNumOutput = this.hugeNum;
		this.adjOutput = this.adj;
	}

});
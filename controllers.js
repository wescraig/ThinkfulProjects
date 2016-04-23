'use strict';

angular.module('madLibApp', ['ngMessages'])

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

	this.isFormValid = true;
	this.errorClass = "";	

	this.applyWords = function(form){
		this.maleNameOutput = this.maleName;
		this.jobTitleOutput = this.jobTitle;
		this.tedTaskOutput = this.tedTask;
		this.dirtyTaskOutput = this.dirtyTask;
		this.celebOutput = this.celeb
		this.uselessSkillOutput = this.uselessSkill;
		this.obCelebOutput = this.obCeleb;
		this.hugeNumOutput = this.hugeNum;
		this.adjOutput = this.adj;
		this.isFormValid = form.$submitted && form.$valid;
	}

	this.resetForm = function(form){
		this.maleName = "";
		this.jobTitle = "";
		this.tedTask = "";
		this.dirtyTask = "";
		this.celeb = "";
		this.uselessSkill = "";
		this.obCeleb = "";
		this.hugeNum = "";
		this.adj = "";
		this.isFormValid = true;
		this.errorClass = ""
		form.$setPristine();
	}

	this.interacted = function(form, field){
		if(!form.$valid && form.$submitted){
			this.errorClass = 'isNotValid';

		}else if(form.$valid){
			this.errorClass = '';
		}
		return form.$submitted && !field.$valid;
	}

	this.submit = function(form){
		this.isFormValid = !form.$valid;
	}

	this.setMinNum = function(){
		if(this.hugeNum < 0 || !this.hugeNum){
			this.hugeNum = 10;
		}
	}

});
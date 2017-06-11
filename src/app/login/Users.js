(function(app) {

	app.Users=function(username, password, category, valid){
		this.username=username;
		this.password=password;
		this.category=category;
		this.valid=valid;
	}

})(window.app || (window.app = {}));
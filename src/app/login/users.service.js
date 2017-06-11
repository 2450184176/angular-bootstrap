(function(app) {

	app.UsersService = ng.core.Class({
		constructor: [ng.http.Http, function(http) {
			this.http = http;
			this.userUrl = 'app/USERS';
			this.headers = new ng.http.Headers({
				'content-type': 'application/json'
			})	
		}],
		handleException: function(error) {
			console.info(error);
			Promise.reject("请求错误: " + error.message);
		},
		login: function(user) {
			return new Promise((resolve) => {
				return this.http.get(this.userUrl)
				.toPromise()
				.then(response => {
					var users = response.json().data;
					var res;
					for(var i = 0; i < users.length; i++) {
						var u = users[i];
						if(u.username == user.username && u.password == user.password && u.valid== true) {
							res = u;
							break;
						}
					}
					resolve(res);
				}).catch(this.handleException);	
			});
		},
		listAdmin: function() {
			return this.http.get(this.userUrl)
				.toPromise()
				.then(response => {
					var users = response.json().data;
					var admin = [];
					for(var i = 0; i < users.length; i++) {
						if(users[i].category == 'admin') {
							admin.push(users[i]);
						}
					}
					return admin;
				}).catch(this.handleException);

		},
		listStu: function() {
			return this.http.get(this.userUrl)
				.toPromise()
				.then(response => {
					var users = response.json().data;
					var stu = [];
					for(var i = 0; i < users.length; i++) {
						if(users[i].category == 'stu') {
							stu.push(users[i]);
						}
					}
					return stu;
				}).catch(this.handleException);

		},
		list: function() {
			return this.http.get(this.userUrl)
				.toPromise()
				.then(response => {
					return response.json().data;					
				}).catch(this.handleException);
		},
		add: function(user) {
			return this.http.post(this.userUrl, JSON.stringify(user), {
					headers: this.headers
				})
				.toPromise()
				.then(r => r.json().data)
				.catch(this.handleException);
		},
	});

})(window.app || (window.app = {}));
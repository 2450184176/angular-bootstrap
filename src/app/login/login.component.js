(function(app) {

	app.LoginComponent = ng.core.Component({
		templateUrl: '/app/login/login.component.html',
		viewProviders:[app.UsersService]		
	}).Class({
		constructor: [app.UsersService, ng.router.Router, function(usersService, router) {
			this.usersService = usersService;
			this.router = router;
		}],
		ngOnInit: function() {
			this.user = new app.Users();
			this.failure = true;
		},
		onLogin: function() {
			
			this.usersService.login(this.user).then(res => {
				if(res) {
					// 登录成功
					this.failure = true;
					app.USER = res; // 存储全局的用户信息
					this.router.navigate(['/dashboard/bookmanagement']);
				} else {
					// 登录失败
					this.failure = false;
				}

			});

		}
	});

})(window.app || (window.app = {}));
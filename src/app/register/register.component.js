(function(app) {

	app.RegisterComponent=ng.core.Component({	
		selector:'register-app',
		templateUrl:'/app/register/register.component.html',
		providers: [app.UsersService]
	}).Class({
		constructor:[app.UsersService,ng.router.Router,function(usersService,router) {
			this.usersService=usersService;		
			this.router=router;
		}],
		ngOnInit: function() {
			this.addUser = new app.Users();
		},
		onAdd: function() {
			var user = new app.Users(
				this.addUser.username,
				this.addUser.password, 
				this.addUser.category, 
				true);
				console.info(user);
			this.usersService.add(user)
				.then(data => {
					this.router.navigate(['/login']);
				});
		}
	});

})(window.app || (window.app = {}));
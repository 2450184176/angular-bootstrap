(function(app) {

	app.AdminComponent=ng.core.Component({		
		templateUrl:'/app/dashboard/admin/admin.component.html',
		viewProviders: [app.UsersService]		
	}).Class({
		constructor:[app.UsersService,function(userService){
			this.userService=userService;
		}],
		ngOnInit: function() {	
			this.users = [];
			this.userService.listAdmin().then(users => {
				this.users = users;			
			});
		}		
	});

})(window.app || (window.app = {}));
(function(app) {

	app.StuComponent=ng.core.Component({		
		templateUrl:'/app/dashboard/stu/stu.component.html',
		viewProviders: [app.UsersService]		
	}).Class({
		constructor:[app.UsersService,function(userService){
			this.userService=userService;
		}],
		ngOnInit: function() {
			this.users = [];
			this.userService.listStu().then(users => {
				this.users = users;				
			});
		}		
		
	});

})(window.app || (window.app = {}));
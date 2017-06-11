(function(app) {


	var routes=[
		{
			path:"dashboard", component:app.DashBoardComponent,
			canActivate: [app.AuthGuard],
			canActivateChild: [app.AuthGuard],
			canDeactivate: [app.AuthGuard],
			children:[
				{
					path:"bookmanagement", component: app.BookManagementComponent
				},
				{
					path:"details", component: app.DetailsComponent
				},
				{
					path:"admin", component: app.AdminComponent									
				},
				{
					path:"stu", component: app.StuComponent
				}
			]
		}
	]
	

	app.DashBoardRoutingModule = ng.router.RouterModule.forChild(routes);

})(window.app || (window.app = {}));
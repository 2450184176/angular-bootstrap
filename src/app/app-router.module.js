(function(app) {

	var routes=[
		{
			path:"", redirectTo:"login",pathMatch:'full'
		},
		{
			path:"login", component:app.LoginComponent
		},		
		{
			path:"register", component:app.RegisterComponent
		},
		{
			path:"dashboard", component:app.DashBoardComponent
		},
		{
			path:"**", component:app.PageNotFoundComponent
		}	
	]
	
	app.AppRoutingModule = ng.router.RouterModule.forRoot(routes);	

})(window.app || (window.app = {}));
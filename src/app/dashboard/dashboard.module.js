(function(app) {

	app.DashBoardModule = ng.core.NgModule({
		imports: [
			ng.platformBrowser.BrowserModule,
			ng.forms.FormsModule,
			app.DashBoardRoutingModule
		], // 使用的其他 Angular 模块
		declarations: [			
			app.DashBoardComponent,
			app.BookManagementComponent,
			app.DetailsComponent,
			app.AdminComponent,
			app.StuComponent
//			app.BookSearchComponent
		],// 导入自定义的 AppComponent 组件
		providers: [app.BookService,app.UsersService, app.AuthGuard]
	}).Class({
		constructor: function() {}
	});

})(window.app || (window.app = {}));
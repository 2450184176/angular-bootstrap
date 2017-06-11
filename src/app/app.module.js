(function(app) {

	app.AppModule = ng.core.NgModule({
		imports: [
			ng.platformBrowser.BrowserModule,
			ng.forms.FormsModule,
			ng.http.HttpModule,
			ng.inMemoryWebApi.InMemoryWebApiModule.forRoot(app.InMemoryWebAPIDataTest),
			app.AppRoutingModule,
			app.DashBoardModule
		], // 使用的其他 Angular 模块
		declarations: [
			app.AppComponent,
//			app.DashBoardComponent,			
			app.RegisterComponent,
			app.PageNotFoundComponent,
			app.LoginComponent
		], // 导入自定义的 AppComponent 组件
		providers: [app.UsersService],
		bootstrap: [app.AppComponent] // 根组件
	}).Class({
		constructor: function() {}
	});

})(window.app || (window.app = {}));
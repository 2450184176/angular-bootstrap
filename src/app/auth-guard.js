(function(app) {
	var AuthGuard = function() {}	
	
	// 要求认证才能进入某路由
	AuthGuard.prototype.canActivate 
	= function(activatedRouteSnapshot,routerStateSnapshot) {
//		console.log('AuthGuard#canActivate called'+activatedRouteSnapshot.url);
		console.info(routerStateSnapshot.url)
		console.info(app.USER);
		if(app.USER){			
			return true;
		}else{
			return false;			
		}
	};
	// 在每个子路由被激活之前运行
	AuthGuard.prototype.canActivateChild 
	= function(activatedRouteSnapshot,routerStateSnapshot) {
//		console.log('AuthGuard#canActivateChild called'+activatedRouteSnapshot.url);
		console.info(routerStateSnapshot.url)
		
		if(app.USER.category=='admin'){
			return true;
		}else if(app.USER.category=='stu'){	
			return routerStateSnapshot.url=='/dashboard/admin'||routerStateSnapshot.url=='/dashboard/stu'||routerStateSnapshot.url=='/dashboard/bookmanagement';
		}
	};
	// 用CanDeactivate 阻止离开当前路由的导航
	AuthGuard.prototype.canDeactivate = function() {
		console.log('AuthGuard#canDeactivate called');
		return true;
	};
	
	app.AuthGuard = AuthGuard;
	
})(window.app || (window.app = {}));
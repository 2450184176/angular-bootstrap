(function(app) {

	app.PageNotFoundComponent=ng.core.Component({
		template:`
		<div class="alert alert-warning" role="alert">您访问的页面不存在!</div>
		`
	}).Class({
		constructor:function(){
			
		}
	});

})(window.app || (window.app = {}));
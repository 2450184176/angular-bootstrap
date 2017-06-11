(function(app) {
	
  document.addEventListener('DOMContentLoaded', function() {
     ng.platformBrowserDynamic.platformBrowserDynamic()
      .bootstrapModule(app.AppModule); // 启动 AppModule，渲染DOM
  });
  ng.core.enableProdMode();  

})(window.app || (window.app = {}));

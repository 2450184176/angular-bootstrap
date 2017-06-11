(function(app) {

	app.BookService=ng.core.Class({
		constructor:[ng.http.Http,function(http){
			this.http=http;
			this.bookUrl = 'app/BOOKS';
		}],
		handleException: function(error) {
			console.info(error);
			Promise.reject("请求错误: " + error.message);
		},
		list:function(){			
			return this.http.get(this.bookUrl)
				.map(res => {
					return res.json().data								
				}).catch(this.handleException);
		},		
		search: function(id,name) {
//			console.info(id,name);
			if (id && name) {
				var url="app/BOOKS/?id="+id+"&name="+name;
			} else if(id){
				var url="app/BOOKS/?id="+id;				
			} else {
				var url="app/BOOKS/?id="+name;
			}			
			return this.http.get(url)
				.map(r => {
					return r.json().data
				});
		}	
	});

})(window.app || (window.app = {}));

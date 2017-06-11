(function(app) {

	app.BookManagementComponent=ng.core.Component({		
		templateUrl:'/app/dashboard/bookManagement/bookmanagement.component.html',
		viewProviders: [app.BookService]		
	}).Class({
		constructor:[app.BookService,ng.router.Router, function(bookService,router){
			this.bookService=bookService;
			this.router=router;
			this.subject = new Rx.Subject();	
			this.flag=true;
		}],
		ngOnInit: function() {				
			this.Books = this.bookService.list();			
			var _this = this;
			this.Books2 = this.subject
				.debounceTime(300)
				.distinctUntilChanged()
				.switchMap(function(terms) {
					var id=terms.split("#")[0];
					var name=terms.split("#")[1];
					return id+name ? _this.bookService.search(id,name) : _this.bookService.list();
				}).catch(function(error) {
					return Rx.Observable.of([]);
				});	
		},
		onSearch: function(id,name) {
			if (id||name) {
				this.subject.next(id+"#"+name);				
				this.flag=false;				
			}else{
				this.Books = this.bookService.list();								
				this.flag=true;
			}
		}
	});

})(window.app || (window.app = {}));
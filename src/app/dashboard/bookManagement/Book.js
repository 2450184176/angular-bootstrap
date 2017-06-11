(function(app) {

	app.Books=function(id, name, author, price, pages, upTime){
		this.id=id;
		this.name=name;
		this.author=author;
		this.price=price;
		this.pages=pages;
		this.upTime=upTime	
	}

})(window.app || (window.app = {}));
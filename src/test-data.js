(function(app) {

	app.USERS = [
		new app.Users('admin', '123', 'admin', true),
		new app.Users('guest', '123', 'admin', true),
		new app.Users('test', '123', 'stu', true),
		new app.Users('jay', '123', 'stu', true)
	];
	app.BOOKS=[
		new app.Books('0596806027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596806028','HTML5','Matthew MacDonald','USD 29.99','224','2010-8-24'),
		new app.Books('0596806047','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596806037','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596806020','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0592846027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596836027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596456027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596236027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596806020','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0592846027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596836027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596456027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596236027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596806020','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0592846027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596836027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596456027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596236027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596806020','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0592846027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596836027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596456027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24'),
		new app.Books('0596236027','HTML5','Mark Pilgrim','USD 29.99','224','2010-8-24')
	]

})(window.app || (window.app = {}));
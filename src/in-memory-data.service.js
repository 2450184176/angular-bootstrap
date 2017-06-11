(function(app) {

	app.InMemoryWebAPIDataTest = ng.core.Class({
		constructor: function() {},
		createDb: function() {

			var USERS = [
				new app.Users('admin', '123', 'admin', true),
				new app.Users('guest', '123', 'admin', true),
				new app.Users('test', '123', 'stu', true),
				new app.Users('jay', '123', 'stu', true)
			];

			var BOOKS = [
				new app.Books('0596806027', 'HTML5', 'Mark Pilgrim', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596806028', 'HTML5', 'Matthew MacDonald', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596806047', 'HTML5', 'Mark Pilgrim2', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596806037', 'HTML4', 'Mark Pilgrim', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596806020', 'HTML6', 'Mark Pilgrim4', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0592846027', 'HTML5', 'Mark Pilgrim', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596836027', 'css', 'Mark Pilgrim6', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596456027', 'HTML5', 'Mark Pilgrim7', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596236027', 'HTML5', 'Mark Pilgrim8', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596806020', 'css', 'Mark Pilgrim9', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0592846027', 'HTML5', 'Mark Pilgrim10', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596836027', 'HTML5', 'Mark Pilgrim', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596456027', 'css', 'Mark Pilgrim12', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596236027', 'HTML5', 'Mark Pilgrim', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596806020', 'css', 'Mark Pilgrim14', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0592846027', 'HTML5', 'Mark Pilgrim', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596836027', 'css', 'Mark Pilgrim16', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596456027', 'HTML5', 'Mark Pilgrim', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596236027', 'js', 'Mark Pilgrim', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596806020', 'js', 'Mark Pilgrim34', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0592846027', 'HTML5', 'Mark Pilgrim23', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596836027', 'HTML5', 'Mark Pilgrim', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596456027', 'HTML5', 'Mark Pilgrim56', 'USD 29.99', '224', '2010-8-24'),
				new app.Books('0596236027', 'HTML5', 'Mark Pilgrim', 'USD 29.99', '224', '2010-8-24')
			]
			return {
				"USERS": USERS,
				"BOOKS": BOOKS
			};
		}
	});

})(window.app || (window.app = {}));
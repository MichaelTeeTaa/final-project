const db = require('../db.js');
module.exports = {
	getHomePage: async function(request, response) {
		let result = await db.getPlayersList();
		let renderData = new Object();
		renderData.players = result;
		response.render('index', renderData);
	},
	clearAll: async function(request, response) {
		await db.clearAll();
		response.redirect('/');
	}
 
};
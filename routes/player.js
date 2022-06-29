const db = require('../db.js');

module.exports = {
  addPlayerPage: function (request, response) {
		let renderData = new Object();
		renderData.player = new Object();
			renderData.add = true;
    response.render('edit-player', renderData);
  },
  getDeals: async function(request, response) {
		 let playerId = request.params.id;
		 let playerObj = await db.getPlayerById(playerId);
    		let renderData = new Object();
    renderData.player = playerObj;
			renderData.add = false;
		 response.render('deals', renderData);
	},

  addPlayer: async function (request, response) {
    await db.addPlayer(request.body);
    response.redirect('/');
  },
	 editPlayerPage: async function (request, response) {
		 let playerId = request.params.id;
		 let playerObj = await db.getPlayerById(playerId);
		 let renderData = new Object();
		 renderData.player = playerObj;
			renderData.add = false;
		 response.render('edit-player', renderData);
 }, 
	editPlayer: async function (request, response) {
    let playerId = request.params.id;
    await db.editPlayerById(playerId, request.body);

    response.redirect('/');
}, 
	 deletePlayer: function (request, response) {
     console.log(request.params.id);
     response.redirect('/');
 },
	deletePlayer: async function (request, response) {
    let playerId = request.params.id;
    await db.deletePlayerById(playerId);

    response.redirect('/');
}
}
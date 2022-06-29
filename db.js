const Database = require("@replit/database");
const uuid = require("uuid");
let db = new Database();

module.exports = {
    addPlayer: async function(playerObj) {
        let newId = "player_" + uuid.v4();
        await db.set(newId, playerObj);
    },
	getPlayersList: async function() {
    let playerKeys = await db.list("player_");
    let players = [];

    for (let i = 0; i < playerKeys.length; i++) {
        let currentKey = playerKeys[i];
        let currentPlayer = await db.get(currentKey);
        currentPlayer["id"] = currentKey;

        players.push(currentPlayer);
    }

    return players;
}, 
	getPlayerById: async function(playerId) {
    let player = await db.get(playerId);
    player["id"] = playerId;

    return player;
},
	editPlayerById: async function(playerId, newPlayerObj) {
    await db.set(playerId, newPlayerObj);
}, 
	deletePlayerById: async function(playerId) {
    await db.delete(playerId);
},
  clearAll: async function() {
		db.empty();
	}
}
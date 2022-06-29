 const index = require('./routes/index');
const player = require('./routes/player');

// Imports
const express = require('express');
 const ejs = require("ejs");
 
// Set hosting information
const hostname = '0.0.0.0';
const port = 8080;

// Initialize app
let app = express();

// Route function


// Set routes
app.get('/', index.getHomePage);
app.get('/add', player.addPlayerPage);
app.get('/edit/:id', player.editPlayerPage);
app.get('/delete/:id', player.deletePlayer);
app.get('/deals/:id', player.getDeals);
app.get('/clear', index.clearAll);
app.set('view engine', 'ejs');

 app.use(express.urlencoded({ extended: false }));
 app.use(express.json());
 app.post('/add', player.addPlayer);
 app.post('/edit/:id', player.editPlayer);


function listenCallback() {
    console.log('Server Running');
}

app.listen(port, hostname, listenCallback);
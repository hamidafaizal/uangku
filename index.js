// index.js
require('dotenv').config(); // load .env
console.log('ENV BOT_TOKEN =', process.env.BOT_TOKEN); // DEBUG
require('./bot'); // langsung arahkan ke bot/index.js

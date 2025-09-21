const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config(); // Ini opsional, sebenarnya sudah dibaca di index.js

console.log('[DEBUG] BOT_TOKEN in bot/index.js:', process.env.BOT_TOKEN); // DEBUG
const { setupHandlers } = require('./handlers');
require('dotenv').config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
setupHandlers(bot);

console.log('🤖 Bot is running...');

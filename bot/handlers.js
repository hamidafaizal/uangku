const { mainKeyboard } = require('./keyboards');
const pemasukan = require('./tombol_langsung/pemasukan');
const pengeluaran = require('./tombol_langsung/pengeluaran');
const pengaturanMenu = require('./menu/pengaturan');

function setupHandlers(bot) {
  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    switch (text) {
      case '/start':
        bot.sendMessage(chatId, 'Selamat datang di bot UangKu! Gunakan tombol di bawah untuk mulai.', mainKeyboard);
        break;

      case '📥 Pemasukan':
         return pemasukan(bot, chatId);

      case '📤 Pengeluaran':
         return pengeluaran(bot, chatId);

      case '⚙️ Pengaturan':
         return pengaturanMenu(bot, chatId);   

      default:
        bot.sendMessage(chatId, 'Perintah tidak dikenali. Gunakan tombol yang tersedia.', mainKeyboard);
    }
  });
}

module.exports = { setupHandlers };

const { pengaturanKeyboard } = require('../../keyboards');

function showPengaturan(bot, chatId) {
  bot.sendMessage(chatId, 'Silakan pilih pengaturan yang ingin kamu ubah:', pengaturanKeyboard);
}

module.exports = showPengaturan;

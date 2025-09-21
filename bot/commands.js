function setupCommands(bot) {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    const welcomeMessage = `
Halo ${msg.from.first_name || 'teman'}! 👋

Selamat datang di *Uangku Bot*, asisten keuangan pribadimu.  
Bot ini membantu kamu mencatat pemasukan, pengeluaran, dan mengelola uang secara otomatis atau manual.

Ketik atau pilih menu untuk memulai.
    `;

    bot.sendMessage(chatId, welcomeMessage, {
      parse_mode: 'Markdown',
    });
  });

  // Kamu bisa tambah /help, /about, dll di sini
}

module.exports = { setupCommands };

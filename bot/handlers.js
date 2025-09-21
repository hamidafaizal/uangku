const { mainKeyboard, pengaturanKeyboard, modelPenghitunganKeyboard, alokasiOtomatisKeyboard } = require('./keyboards');
const pemasukan = require('./tombol_langsung/pemasukan');
const pengeluaran = require('./tombol_langsung/pengeluaran');
const pengaturanMenu = require('./menu/pengaturan');
const { handleAlokasiOtomatis, handleDefault, handleBuatKantong, handleInput } = require('./menu/pengaturan/model_penghitungan/alokasiOtomatis'); // Import handler yang sudah diupdate
const { getState, setState, clearState } = require('./stateManager');

function setupHandlers(bot) {
  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    console.log(`[DEBUG] Menerima pesan: ${text} dari chatId: ${chatId}`); // Tambahkan log untuk debug

    // Cek apakah pengguna sedang dalam alur percakapan yang aktif
    const isHandlingInput = handleInput(bot, msg, getState, setState, clearState, mainKeyboard);
    if (isHandlingInput) {
      console.log(`[DEBUG] Pesan ditangani oleh handleInput untuk chatId: ${chatId}`); // Log
      return;
    }

    switch (text) {
      case '/start':
        bot.sendMessage(chatId, 'Selamat datang di bot UangKu! Gunakan tombol di bawah untuk mulai.', mainKeyboard);
        break;

      case '📥 Pemasukan':
         return pemasukan(bot, chatId);

      case '📤 Pengeluaran':
         return pengeluaran(bot, chatId);

      case '⚙️ Pengaturan':
         // Menampilkan menu pengaturan
         bot.sendMessage(chatId, 'Silakan pilih pengaturan yang ingin kamu ubah:', pengaturanKeyboard);
         break;
      
      case '💰 Kantong':
         bot.sendMessage(chatId, 'Anda memilih menu Kantong. Ini adalah halaman untuk mengelola kantong uang Anda.');
         console.log(`[DEBUG] Memilih menu Kantong untuk chatId: ${chatId}`); // Log
         break;
      
      case '🏷️ Kategori Pengeluaran':
         bot.sendMessage(chatId, 'Anda memilih menu Kategori Pengeluaran. Ini adalah halaman untuk mengelola kategori pengeluaran Anda.');
         console.log(`[DEBUG] Memilih menu Kategori Pengeluaran untuk chatId: ${chatId}`); // Log
         break;

      case 'Alokasi Otomatis':
        return handleAlokasiOtomatis(bot, chatId);
      
      case 'Default':
        return handleDefault(bot, chatId);

      // Menambahkan case untuk tombol "Buat Kantong"
      case 'Buat Kantong':
        return handleBuatKantong(bot, chatId, setState);
         
      case '⬅️ Kembali':
        // Logika untuk kembali ke menu sebelumnya
        // Sementara ini, kembali ke main keyboard
        bot.sendMessage(chatId, 'Kembali ke menu utama.', mainKeyboard);
        break;

      default:
        bot.sendMessage(chatId, 'Perintah tidak dikenali. Gunakan tombol yang tersedia.', mainKeyboard);
    }
  });
}

module.exports = { setupHandlers };

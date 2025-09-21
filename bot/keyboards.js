// keyboards.js
// File ini berisi konfigurasi keyboard untuk bot Telegram.

const mainKeyboard = {
  reply_markup: {
    keyboard: [
      ['📥 Pemasukan', '📤 Pengeluaran'],
      ['⚙️ Pengaturan']
    ],
    resize_keyboard: true
  }
};

const pengaturanKeyboard = {
  reply_markup: {
    keyboard: [
      ['📊 Model Penghitungan'],
      ['💰 Kantong'], // Menambahkan tombol Kantong
      ['🏷️ Kategori Pengeluaran'], // Menambahkan tombol Kategori Pengeluaran
      ['⬅️ Kembali']
    ],
    resize_keyboard: true
  }
};

const modelPenghitunganKeyboard = {
  reply_markup: {
    keyboard: [
      ['Alokasi Otomatis'],
      ['Catat Pengeluaran'],
      ['Gabungan'],
      ['⬅️ Kembali']
    ],
    resize_keyboard: true
  }
};

// Keyboard baru untuk "Alokasi Otomatis"
const alokasiOtomatisKeyboard = {
  reply_markup: {
    keyboard: [
      ['Default'],
      ['Buat Kantong'],
      ['⬅️ Kembali']
    ],
    resize_keyboard: true
  }
};

// Keyboard kosong untuk menyembunyikan keyboard sebelumnya
const removeKeyboard = {
  reply_markup: {
    remove_keyboard: true
  }
};

module.exports = {
  mainKeyboard,
  pengaturanKeyboard,
  modelPenghitunganKeyboard,
  alokasiOtomatisKeyboard,
  removeKeyboard
};

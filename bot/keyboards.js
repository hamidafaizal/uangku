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

module.exports = {
  mainKeyboard,
  pengaturanKeyboard,
  modelPenghitunganKeyboard
};

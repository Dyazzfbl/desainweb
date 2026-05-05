let orderData = {};

function mulaiPemesanan() {
    const nama = document.getElementById('nama').value;
    const jumlah = document.getElementById('jumlah').value;
    const tanggal = document.getElementById('tanggal').value;

    if (!nama || !jumlah || !tanggal) {
        alert("Silakan lengkapi data pemesanan!");
        return;
    }

    orderData = { nama, jumlah, tanggal, total: jumlah * 80000 };

    // Tampilkan Loading Bar Panjang (5 Detik)
    document.getElementById('loading-screen').classList.remove('hidden-completely');

    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden-completely');
        document.getElementById('booking-section').classList.add('hidden');
        
        const resArea = document.getElementById('result-area');
        resArea.classList.remove('hidden');
        
        // Tampilan Instruksi Sederhana
        resArea.innerHTML = `
            <div style="text-align:center; padding: 10px;">
                <h2 style="color:#00796b;">Hampir Selesai!</h2>
                <p>Klik tombol di bawah untuk mengirim detail pesanan dan <strong>lampirkan foto bukti transfer</strong> di WhatsApp admin.</p>
                
                <div style="background:#f0fbfc; padding:20px; border-radius:15px; border:1px solid #00acc1; margin:20px 0; text-align:left;">
                    <p><strong>Total:</strong> Rp ${orderData.total.toLocaleString()}</p>
                    <p><strong>Tujuan:</strong> DANA/BCA (0881010880323)</p>
                </div>

                <button onclick="kirimWhatsApp()" style="background:#25D366; color:white; padding:18px; width:100%; border:none; border-radius:15px; font-weight:bold; font-size:1.1rem; cursor:pointer; box-shadow: 0 10px 20px rgba(37, 211, 102, 0.2);">
                    💬 Kirim Pesanan & Bukti Transfer
                </button>
            </div>
        `;
    }, 5000);
}

function kirimWhatsApp() {
    // GANTI NOMOR INI DENGAN NOMOR WA KAMU (Wajib diawali 62)
    const nomorWA = "62881010880323"; 

    const teksPesan = `Halo Admin Pantai Kyoko,%0A%0A` +
        `Saya ingin memesan tiket dengan detail berikut:%0A` +
        `- *Nama:* ${orderData.nama}%0A` +
        `- *Jumlah:* ${orderData.jumlah} Tiket%0A` +
        `- *Tanggal:* ${orderData.tanggal}%0A` +
        `- *Total Bayar:* Rp ${orderData.total.toLocaleString()}%0A%0A` +
        `Berikut saya lampirkan bukti transfernya:`;

    const urlWA = `https://wa.me/${nomorWA}?text=${teksPesan}`;

    // Membuka jendela WhatsApp baru
    window.open(urlWA, '_blank');
}
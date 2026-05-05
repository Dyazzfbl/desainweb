// Atur tanggal minimal hari ini
const today = new Date().toISOString().split('T')[0];
document.getElementById('tanggal').setAttribute('min', today);

function prosesPesanan() {
    const nama = document.getElementById('nama').value;
    const jumlah = document.getElementById('jumlah').value;
    const tanggal = document.getElementById('tanggal').value;
    
    if (nama.trim() === "" || jumlah <= 0 || tanggal === "") {
        alert("Mohon isi semua data dengan benar!");
        return;
    }

    // Tampilkan Loading
    const loader = document.getElementById('loading-screen');
    loader.classList.remove('hidden-completely');

    // Proses data (hitung total)
    const total = jumlah * 25000;

    // Simulasi loading 2.5 detik
    setTimeout(() => {
        loader.classList.add('hidden-completely');
        
        // Isi data ke struk
        document.getElementById('resNama').innerText = nama;
        document.getElementById('resJumlah').innerText = jumlah;
        document.getElementById('resTanggal').innerText = formatTgl(tanggal);
        document.getElementById('resTotal').innerText = total.toLocaleString('id-ID');

        // Tampilkan struk
        document.getElementById('receipt').classList.remove('hidden');
        window.scrollTo(0, document.body.scrollHeight);
    }, 2500);
}

function formatTgl(str) {
    const opsi = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(str).toLocaleDateString('id-ID', opsi);
}
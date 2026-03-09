// ==========================================
// ARSITEKTUR MVP: LOGIKA BISNIS & UI (Sesi 3)
// ==========================================

// 1. DATABASE SEMENTARA (Update untuk LaperKilat)
const dataProduk = [
    { id: 1, nama: "Paket Catering Sultan (50 Pax)", harga: 2500000, icon: "fa-utensils" },
    { id: 2, nama: "Nasi Tumpeng Raksasa Premium", harga: 1200000, icon: "fa-bowl-food" },
    { id: 3, nama: "Buffet Kantor Lengkap (100 Pax)", harga: 4500000, icon: "fa-plate-wheat" }
];

// STATE APLIKASI
let totalKeranjang = 0;
let jumlahItem = 0;

// MENANGKAP ELEMEN HTML
const btnTampilkan = document.getElementById('btn-tampilkan-produk');
const katalogContainer = document.getElementById('katalog-container');
const displayTotal = document.getElementById('display-total');
const badgeKeranjang = document.getElementById('cart-badge');
const btnCheckout = document.getElementById('btn-checkout');
const promoAlert = document.getElementById('promo-alert');


// ==========================================
// TUGAS 1: LOOPS (Otomatisasi Tampilan LaperKilat)
// ==========================================
btnTampilkan.addEventListener('click', function() {
    katalogContainer.innerHTML = ''; 

    // Menggunakan loop untuk menampilkan menu LaperKilat
    for (let i = 0; i < dataProduk.length; i++) {
        let produkCard = `
            <div class="col-md-4 mb-4">
                <div class="card product-card h-100 p-3 text-center border-primary border-opacity-25 shadow-sm">
                    <i class="fa-solid ${dataProduk[i].icon} fa-3x text-danger mb-3 mt-2"></i>
                    <h5 class="card-title fw-bold">${dataProduk[i].nama}</h5>
                    <p class="card-text text-muted">Rp ${dataProduk[i].harga.toLocaleString('id-ID')}</p>
                    <button class="btn btn-danger w-100" onclick="tambahKeKeranjang(${dataProduk[i].harga})">
                        + Tambah ke Pesanan
                    </button>
                </div>
            </div>
        `;
        katalogContainer.innerHTML += produkCard;
    }

    btnTampilkan.disabled = true;
    btnTampilkan.innerHTML = '<i class="fa-solid fa-check"></i> Menu Dimuat';
});


// ==========================================
// TUGAS 2: LOGIKA TRANSAKSI (Fungsi Beli)
// ==========================================
function tambahKeKeranjang(hargaProduk) {
    totalKeranjang += hargaProduk;
    jumlahItem += 1;

    badgeKeranjang.textContent = jumlahItem;
    displayTotal.textContent = 'Rp ' + totalKeranjang.toLocaleString('id-ID');
    
    btnCheckout.classList.remove('disabled');

    // Cek promo setiap kali ada item baru
    cekPromoOtomatis();
}


// ==========================================
// TUGAS 3: CONDITIONALS (Logika Promo 5 Juta)
// ==========================================
function cekPromoOtomatis() {
    const teksPromo = document.getElementById('promo-text');
    const batasMinimalPromo = 5000000; // Sesuai Instruksi Tugas 3
    
    if (totalKeranjang > batasMinimalPromo) {
        // Jika belanja lebih dari 5 juta
        promoAlert.classList.remove('d-none');
        promoAlert.classList.replace('alert-info', 'alert-success');
        teksPromo.textContent = "Selamat! LaperKilat memberikan Diskon 10% untuk pesanan besar Anda.";
    } else {
        // Jika belanja belum mencapai 5 juta
        promoAlert.classList.remove('d-none');
        promoAlert.classList.replace('alert-success', 'alert-info');
        let kurangnya = batasMinimalPromo - totalKeranjang;
        teksPromo.textContent = `Tambah Rp ${kurangnya.toLocaleString('id-ID')} lagi untuk dapat Diskon 10% dari LaperKilat!`;
    }
}


// ==========================================
// TUGAS 4: EVENT LISTENER (Checkout)
// ==========================================
btnCheckout.addEventListener('click', function() {
    btnCheckout.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Menyiapkan Pesanan...';
    btnCheckout.classList.replace('btn-primary', 'btn-success');
    
    setTimeout(() => {
        alert(`Pesanan LaperKilat Berhasil!\nTotal Pembayaran: Rp ${totalKeranjang.toLocaleString('id-ID')}\nKurir kami akan segera meluncur!`);
        location.reload(); 
    }, 1500);
});
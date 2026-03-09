// ==========================================
// ARSITEKTUR MVP: LOGIKA BISNIS & UI (Sesi 3)
// ==========================================

// 1. DATABASE SEMENTARA (LaperKilat)
const dataProduk = [
    { id: 1, nama: "Paket Catering Sultan", harga: 2500000, icon: "fa-utensils" },
    { id: 2, nama: "Tumpeng Mega Premium", harga: 1500000, icon: "fa-bowl-food" },
    { id: 3, nama: "Buffet Kantor Lengkap", harga: 4500000, icon: "fa-plate-wheat" }
];

let totalKeranjang = 0; // Ini total asli (sebelum diskon)
let jumlahItem = 0;

// MENANGKAP ELEMEN
const btnTampilkan = document.getElementById('btn-tampilkan-produk');
const katalogContainer = document.getElementById('katalog-container');
const displayTotal = document.getElementById('display-total');
const badgeKeranjang = document.getElementById('cart-badge');
const btnCheckout = document.getElementById('btn-checkout');
const promoAlert = document.getElementById('promo-alert');
const teksPromo = document.getElementById('promo-text');

// TUGAS 1: LOOPS
btnTampilkan.addEventListener('click', function() {
    katalogContainer.innerHTML = ''; 
    for (let i = 0; i < dataProduk.length; i++) {
        let produkCard = `
            <div class="col-md-4 mb-4">
                <div class="card product-card h-100 p-3 text-center border-primary border-opacity-25 shadow-sm">
                    <i class="fa-solid ${dataProduk[i].icon} fa-3x text-primary mb-3 mt-2"></i>
                    <h5 class="card-title fw-bold">${dataProduk[i].nama}</h5>
                    <p class="card-text text-muted">Rp ${dataProduk[i].harga.toLocaleString('id-ID')}</p>
                    <button class="btn btn-outline-primary w-100" onclick="tambahKeKeranjang(${dataProduk[i].harga})">
                        + Tambah
                    </button>
                </div>
            </div>
        `;
        katalogContainer.innerHTML += produkCard;
    }
    btnTampilkan.disabled = true;
    btnTampilkan.innerHTML = '<i class="fa-solid fa-check"></i> Menu LaperKilat Dimuat';
});

// TUGAS 2: TRANSAKSI
function tambahKeKeranjang(hargaProduk) {
    totalKeranjang += hargaProduk;
    jumlahItem += 1;
    badgeKeranjang.textContent = jumlahItem;
    
    // Aktifkan tombol checkout
    btnCheckout.classList.remove('disabled');

    // Panggil fungsi promo untuk update tampilan total (apakah pakai diskon atau tidak)
    cekPromoOtomatis();
}

// TUGAS 3: CONDITIONALS (DI SINI PERBAIKANNYA!)
function cekPromoOtomatis() {
    const batasMinimalPromo = 5000000;
    let totalAkhir = totalKeranjang; // Defaultnya sama dengan total asli
    
    promoAlert.classList.remove('d-none');

    if (totalKeranjang > batasMinimalPromo) {
        // PROMO AKTIF (Diskon 10%)
        let diskon = totalKeranjang * 0.1; 
        totalAkhir = totalKeranjang - diskon; // Harga dipotong 10%

        promoAlert.classList.replace('alert-info', 'alert-success');
        teksPromo.innerHTML = `<strong>Selamat!</strong> Anda dapat diskon 10% (Hemat Rp ${diskon.toLocaleString('id-ID')})`;
        
        // Update tampilan total di layar dengan harga diskon
        displayTotal.innerHTML = `<del class="text-muted small">Rp ${totalKeranjang.toLocaleString('id-ID')}</del> <br> Rp ${totalAkhir.toLocaleString('id-ID')}`;
    } else {
        // PROMO BELUM AKTIF
        let kurangnya = batasMinimalPromo - totalKeranjang;
        promoAlert.classList.replace('alert-success', 'alert-info');
        teksPromo.textContent = `Tambah Rp ${kurangnya.toLocaleString('id-ID')} lagi untuk dapat Diskon 10%!`;
        
        // Tampilkan harga normal
        displayTotal.textContent = 'Rp ' + totalKeranjang.toLocaleString('id-ID');
    }
}

// TUGAS 4: CHECKOUT
btnCheckout.addEventListener('click', function() {
    btnCheckout.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Memproses...';
    setTimeout(() => {
        alert(`Pesanan LaperKilat Berhasil!\nTotal yang dibayar: ${displayTotal.innerText}`);
        location.reload(); 
    }, 1500);
});
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sesi 3 | Logika Bisnis Interaktif</title>
    <!-- Bootstrap & Fonts -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8f9fa; }
        h1, h2, h3 { font-family: 'Poppins', sans-serif; }
        .product-card { transition: transform 0.2s; cursor: pointer; }
        .product-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
    </style>
</head>
<body>

    <!-- NAVBAR dengan Badge Keranjang Dinamis -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#"><i class="fa-solid fa-store text-warning"></i> LaperKilat</a>
            <div class="d-flex align-items-center">
                <!-- Elemen ini akan diubah isinya oleh JavaScript -->
                <button class="btn btn-outline-warning position-relative me-3">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span id="cart-badge" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        0
                    </span>
                </button>
            </div>
        </div>
    </nav>

    <!-- HEADER / HERO -->
    <header class="bg-primary text-white text-center py-5">
        <div class="container py-4">
            <h1 class="display-4 fw-bold">Menu Unggulan LaperKilat</h1>
            <p class="lead">Pilih Menu Catering Sultan & Hitung Total Pesanan Seketika.</p>
        </div>
    </header>

    <main class="container my-5">
        
        <!-- BAGIAN 1: RENDER PRODUK MENGGUNAKAN LOOP JS -->
        <section class="mb-5">
            <div class="d-flex justify-content-between align-items-end mb-4">
                <h2>Daftar Menu LaperKilat</h2>
                <button id="btn-tampilkan-produk" class="btn btn-success">
                    <i class="fa-solid fa-bolt"></i> Lihat Menu
                </button>
            </div>
            
            <!-- JavaScript akan menyuntikkan HTML produk ke dalam elemen div ini -->
            <div id="katalog-container" class="row g-4">
                <div class="col-12 text-center text-muted py-5" id="pesan-kosong">
                    <i class="fa-solid fa-box-open fa-3x mb-3"></i>
                    <p>Klik tombol di atas untuk melihat pilihan menu lezat kami!</p>
                </div>
            </div>
        </section>

        <!-- BAGIAN 2: LOGIKA TRANSAKSI & DOM MANIPULATION -->
        <section class="bg-white p-4 rounded shadow-sm border mb-5">
            <h2 class="mb-4">Ringkasan Pesanan</h2>
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h4 class="text-muted">Total Belanja: <span id="display-total" class="fw-bold text-dark">Rp 0</span></h4>
                    
                    <!-- Area notifikasi diskon dinamis -->
                    <div id="promo-alert" class="alert alert-info d-none mt-3" role="alert">
                        <i class="fa-solid fa-tag"></i> <span id="promo-text">...</span>
                    </div>
                </div>
                
                <div class="col-md-6 text-end">
                    <div class="input-group mb-3">
                        <input type="text" id="input-voucher" class="form-control" placeholder="Punya kode voucher? (Coba: DISKON10)">
                        <button class="btn btn-outline-secondary" type="button" id="btn-klaim-voucher">Klaim</button>
                    </div>
                    <!-- Tombol Konversi Utama -->
                    <button id="btn-checkout" class="btn btn-primary btn-lg w-100 fw-bold disabled">
                        Bayar Sekarang <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>

    </main>

    <!-- Menghubungkan file logika bisnis (Harus ditaruh paling bawah sebelum tutup body) -->
    <script src="<?= base_url('js/script.js') ?>"></script>
</body>
</html>
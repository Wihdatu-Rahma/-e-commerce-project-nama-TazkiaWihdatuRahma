let cartCount = 0;
const cartItems = [];

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

function tambahKeKeranjang(namaProduct, harga) {
    cartCount++;
    cartItems.push({ nama: namaProduct, harga: harga });
    document.querySelector('.cart-count').textContent = cartCount;
    
    // Animasi counter
    const counter = document.querySelector('.cart-count');
    counter.style.transform = 'scale(1.3)';
    setTimeout(() => {
        counter.style.transform = 'scale(1)';
    }, 200);
    
    alert(`${namaProduct} berhasil ditambahkan ke keranjang!`);
}

function beliSekarang(namaProduct) {
    alert(`Pembelian ${namaProduct} sedang diproses. Anda akan diarahkan ke halaman pembayaran.`);
}

function filterKategori(kategori) {
    alert(`Menampilkan produk kategori: ${kategori.toUpperCase()}`);
}

// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Tutup menu mobile setelah klik
        document.getElementById('navMenu').classList.remove('active');
    });
});

// Tutup menu mobile saat klik di luar
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// Scroll animation untuk header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(207, 198, 225, 0.95) 0%, rgba(155, 138, 196, 0.95) 100%)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, rgb(207, 198, 225) 0%, #9b8ac4 100%)';
        header.style.backdropFilter = 'none';
    }
});
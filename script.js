let slideIndex = 0;
// Jalankan fungsi pertama kali saat halaman dimuat
showAppSlides(slideIndex);

// Fungsi untuk tombol panah kanan/kiri
function changeAppSlide(direction) {
    showAppSlides(slideIndex += direction);
}

// Fungsi untuk klik titik indikator di bawah
function goToAppSlide(index) {
    showAppSlides(slideIndex = index);
}

function showAppSlides(index) {
    const slides = document.getElementsByClassName("app-slide");
    const dots = document.getElementsByClassName("indicator-dot");
    
    if (slides.length === 0) return; // Proteksi jika elemen tidak ditemukan

    // Jika melebihi slide terakhir, kembali ke awal
    if (index >= slides.length) {
        slideIndex = 0;
    }
    // Jika kurang dari slide pertama, lompat ke paling akhir
    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    // Sembunyikan seluruh slide dengan menghapus class active
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // Matikan semua indikator dot yang aktif
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Tampilkan slide yang sedang dipilih dan aktifkan dot-nya
    slides[slideIndex].classList.add("active");
    if (dots[slideIndex]) {
        dots[slideIndex].classList.add("active");
    }
}

// Opsional: Jika ingin otomatis berpindah setiap 5 detik
setInterval(function() {
    changeAppSlide(1);
}, 5000);

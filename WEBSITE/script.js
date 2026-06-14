let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Reset index jika melebihi jumlah slide atau kurang dari 0
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;

    // Hapus kelas 'active' dari semua slide dan dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Tambahkan kelas 'active' pada slide dan dot yang dituju
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Fungsi untuk tombol Next dan Prev
function changeSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
}

// Fungsi untuk klik langsung di indikator titik (dots)
function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

// Menjalankan slide otomatis setiap 5 detik
setInterval(() => {
    changeSlide(1);
}, 5000);
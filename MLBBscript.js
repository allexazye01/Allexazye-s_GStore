// Mengatur interaktivitas pilihan gambar
const paymentOptions = document.querySelectorAll('.payment-option');

paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Menghapus kelas "selected" dari semua pilihan
        paymentOptions.forEach(option => option.classList.remove('selected'));
        
        // Menambahkan kelas "selected" pada yang dipilih
        option.classList.add('selected');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const diamondItems = document.querySelectorAll(".diamond-item");

    diamondItems.forEach(item => {
        item.addEventListener("click", () => {
            // Reset pilihan sebelumnya
            diamondItems.forEach(i => i.classList.remove("selected"));

            // Tambahkan efek terpilih
            item.classList.add("selected");

            // Pilih radio button secara otomatis
            const radioInput = item.querySelector("input[type='radio']");
            radioInput.checked = true;
        });
    });
});

let currentIndex = 0;
const slides = document.querySelectorAll('.banner-slider .banner-img');
const totalSlides = slides.length;

function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Kembali ke slide pertama
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    const slider = document.querySelector('.banner-slider');
    const slideWidth = slides[0].clientWidth; // Mengambil lebar slide
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Geser gambar
}

// Jalankan fungsi moveToNextSlide setiap 3 detik (3000ms)
setInterval(moveToNextSlide, 3000);
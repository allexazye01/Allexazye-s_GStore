document.addEventListener('DOMContentLoaded', function() {
    // Pastikan elemen sudah ada sebelum menambahkan event listeners

    // Efek hover untuk CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });

        ctaButton.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Modal logic: tampilkan modal saat halaman dimuat
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.style.display = 'block'; // Tampilkan modal
    }

    // Menutup modal ketika tombol X diklik
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (loginModal) {
                loginModal.style.display = 'none'; // Menutup modal
            }
        });
    }

    // Menampilkan modal saat tombol Log-in di navbar diklik
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            if (loginModal) {
                loginModal.style.display = 'block'; // Tampilkan modal saat klik Log-in
            }
        });
    }
});


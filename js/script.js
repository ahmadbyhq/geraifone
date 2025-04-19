(() => {
    'use strict';

    // FUNGSI LOGIN
    const form = document.getElementById('loginForm');
    if (form) {
        const emailInput = document.getElementById('loginEmail');
        const passwordInput = document.getElementById('loginPassword');
        const errorBox = document.getElementById('loginError');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            form.classList.add('was-validated');
            errorBox.classList.add('d-none');

            if (!form.checkValidity()) return;

            const email = emailInput.value.trim();
            const password = passwordInput.value;

            const validEmail = "admingeraifone@outlook.com";
            const validPassword = "admin123";

            if (email === validEmail && password === validPassword) {
                alert("Login berhasil!");
                window.location.href = "dashboard.html";
            } else {
                errorBox.classList.remove('d-none');
            }
        });
    }


    // FUNGSI LOAD LAPORAN
    function loadLaporan() {
        const tbody = document.getElementById("laporanTableBody");
        if (!tbody) return;

        const laporan = JSON.parse(localStorage.getItem("laporanData")) || [];
        tbody.innerHTML = "";
        laporan.forEach((item, index) => {
            const row = `<tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.message}</td>
            </tr>`;
            tbody.innerHTML += row;
        });
    }

    // Jalankan loadLaporan saat halaman terbuka
    window.addEventListener("DOMContentLoaded", loadLaporan);
})();
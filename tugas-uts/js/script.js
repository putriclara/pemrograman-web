/* ==========================================================
   Claire.Archive - JavaScript murni (tanpa library)
   Fitur:
   1. Menu hamburger (classList.toggle)
   2. Validasi formulir kontak dengan pesan di bawah kolom
   3. Katalog dinamis: cari nama + filter kategori (array objek -> DOM)
   Catatan: tanpa JavaScript, semua halaman tetap berfungsi penuh.
   ========================================================== */

// Tandai bahwa JavaScript aktif, agar CSS menampilkan hamburger & filter
document.documentElement.classList.add("js");

/* ---------- 1. Menu hamburger ---------- */
function initMenu() {
  var tombol = document.getElementById("menuToggle");
  var menu = document.getElementById("menuUtama");
  if (!tombol || !menu) return;

  tombol.addEventListener("click", function () {
    var terbuka = menu.classList.toggle("terbuka");
    tombol.setAttribute("aria-expanded", terbuka ? "true" : "false");
    tombol.setAttribute("aria-label", terbuka ? "Tutup menu navigasi" : "Buka menu navigasi");
  });
}

/* ---------- 2. Validasi formulir kontak ---------- */
function initForm() {
  var form = document.getElementById("formKontak");
  if (!form) return;

  // Matikan bubble validasi bawaan browser, kita tampilkan pesan sendiri
  form.noValidate = true;

  var pesanSukses = document.getElementById("pesanSukses");

  // Aturan tiap kolom: mengembalikan teks error, atau "" bila valid
  var aturan = {
    nama: function (nilai) {
      if (nilai === "") return "Nama wajib diisi.";
      if (nilai.length < 3) return "Nama minimal 3 karakter.";
      return "";
    },
    email: function (nilai) {
      if (nilai === "") return "Email wajib diisi.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nilai)) return "Format email tidak valid, contoh: nama@email.com.";
      return "";
    },
    hp: function (nilai) {
      if (nilai === "") return "Nomor HP wajib diisi.";
      if (!/^[0-9]{10,13}$/.test(nilai)) return "Nomor HP harus berupa 10 sampai 13 digit angka.";
      return "";
    },
    layanan: function (nilai) {
      if (nilai === "") return "Silakan pilih jenis layanan.";
      return "";
    },
    pesan: function (nilai) {
      if (nilai === "") return "Pesan wajib diisi.";
      if (nilai.length < 10) return "Pesan minimal 10 karakter (saat ini " + nilai.length + ").";
      if (nilai.length > 500) return "Pesan maksimal 500 karakter.";
      return "";
    }
  };

  function validasiKolom(id) {
    var kolom = document.getElementById(id);
    var tempatError = document.getElementById("error-" + id);
    var grup = kolom.closest(".form-grup");
    var pesan = aturan[id](kolom.value.trim());

    tempatError.textContent = pesan;
    grup.classList.toggle("ada-error", pesan !== "");
    kolom.setAttribute("aria-invalid", pesan !== "" ? "true" : "false");
    return pesan === "";
  }

  var daftarId = Object.keys(aturan);

  // Validasi langsung saat pengguna meninggalkan / mengubah kolom
  daftarId.forEach(function (id) {
    var kolom = document.getElementById(id);
    kolom.addEventListener("blur", function () {
      validasiKolom(id);
    });
    kolom.addEventListener("input", function () {
      pesanSukses.classList.remove("tampil");
      if (kolom.closest(".form-grup").classList.contains("ada-error")) {
        validasiKolom(id);
      }
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var semuaValid = true;
    var kolomPertamaError = null;

    daftarId.forEach(function (id) {
      var valid = validasiKolom(id);
      if (!valid) {
        semuaValid = false;
        if (!kolomPertamaError) kolomPertamaError = document.getElementById(id);
      }
    });

       if (!semuaValid) {
      pesanSukses.classList.remove("tampil");
      kolomPertamaError.focus();
      return;
    }

    // Kirim ke WhatsApp
    var teks = "Halo Claire.Archive,%0A" +
      "Nama: " + encodeURIComponent(document.getElementById("nama").value) + "%0A" +
      "Email: " + encodeURIComponent(document.getElementById("email").value) + "%0A" +
      "HP: " + encodeURIComponent(document.getElementById("hp").value) + "%0A" +
      "Layanan: " + encodeURIComponent(document.getElementById("layanan").selectedOptions[0].text) + "%0A" +
      "Pesan: " + encodeURIComponent(document.getElementById("pesan").value);

    window.open("https://wa.me/6281379553795?text=" + teks, "_blank");

    // Semua valid: tampilkan pesan sukses lalu kosongkan formulir
    form.reset();
  });
}

/* ---------- 3. Katalog dinamis ---------- */
// Data layanan berupa array objek (sinkron dengan kartu statis di katalog.html)
var dataLayanan = [
  {
    nama: "Paket Wisuda Solo",
    kategori: "Wisuda",
    deskripsi: "Sesi 45 menit di lokasi kampus, 20 foto hasil edit, dan 1 cetak 10R.",
    harga: 350000,
    gambar: "img/wisuda.jpeg",
    alt: "Wisudawati berpose memegang buket bunga di depan gedung kampus"
  },
  {
    nama: "Paket Wisuda Grup",
    kategori: "Wisuda",
    deskripsi: "Untuk 5 orang, durasi 90 menit, foto bersama dan foto individu, 40 foto hasil edit.",
    harga: 750000,
    gambar: "img/wisudagrup.jpeg",
    alt: "Lima sahabat mengenakan toga melempar topi bersama"
  },
  {
    nama: "Prewedding Outdoor",
    kategori: "Prewedding",
    deskripsi: "Sesi 3 jam di satu lokasi, 2 pergantian busana, 50 foto hasil edit, dan album mini.",
    harga: 2500000,
    gambar: "img/prewed.jpeg",
    alt: "Pasangan prewedding berjalan bergandengan tangan di tepi pantai saat matahari terbenam"
  },
  {
    nama: "Akad & Resepsi Half Day",
    kategori: "Pernikahan",
    deskripsi: "Dokumentasi 5 jam oleh 2 fotografer, 150 foto hasil edit, dan galeri online.",
    harga: 3500000,
    gambar: "img/resepsi.jpeg",
    alt: "Pengantin saling bertukar cincin saat prosesi akad"
  },
  {
    nama: "Foto Keluarga Studio",
    kategori: "Keluarga",
    deskripsi: "Sesi 1 jam di studio untuk maksimal 6 orang, 15 foto hasil edit, dan 1 cetak 12R berbingkai.",
    harga: 450000,
    gambar: "img/family.jpeg",
    alt: "Keluarga beranggotakan empat orang tersenyum di studio berlatar krem"
  },
  {
    nama: "Foto Produk UMKM",
    kategori: "Produk",
    deskripsi: "Foto 10 produk dengan latar bersih dan 2 sudut tiap produk, siap unggah ke marketplace.",
    harga: 400000,
    gambar: "img/produk.jpeg",
    alt: "Produk kerajinan tangan ditata rapi di atas meja dengan pencahayaan lembut"
  },
  {
    nama: "Liputan Event & Seminar",
    kategori: "Event",
    deskripsi: "Dokumentasi acara selama 3 jam, minimal 80 foto hasil edit, diserahkan dalam 3 hari.",
    harga: 900000,
    gambar: "img/event.jpeg",
    alt: "Pembicara berdiri di panggung seminar di hadapan peserta"
  },
  {
    nama: "Foto Profil Profesional",
    kategori: "Portrait",
    deskripsi: "Pas foto dan foto profil untuk CV atau LinkedIn, 3 foto hasil edit, selesai di hari yang sama.",
    harga: 150000,
    gambar: "img/profil.jpeg",
    alt: "Potret profesional seorang pria berkemeja rapi dengan latar polos"
  }
];

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

// Membuat satu elemen kartu dari satu objek data (memakai textContent agar aman)
function buatKartu(item) {
  var kartu = document.createElement("article");
  kartu.className = "card";
  kartu.dataset.kategori = item.kategori;

  var gambar = document.createElement("img");
  gambar.src = item.gambar;
  gambar.alt = item.alt;
  gambar.width = 800;
  gambar.height = 600;

  var isi = document.createElement("div");
  isi.className = "card-isi";

  var badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = item.kategori;

  var judul = document.createElement("h3");
  judul.textContent = item.nama;

  var deskripsi = document.createElement("p");
  deskripsi.textContent = item.deskripsi;

  var harga = document.createElement("p");
  harga.className = "harga";
  harga.textContent = formatRupiah(item.harga);

  isi.appendChild(badge);
  isi.appendChild(judul);
  isi.appendChild(deskripsi);
  isi.appendChild(harga);
  kartu.appendChild(gambar);
  kartu.appendChild(isi);
  return kartu;
}

function initKatalog() {
  var grid = document.getElementById("katalogGrid");
  var inputCari = document.getElementById("cariNama");
  var pilihKategori = document.getElementById("filterKategori");
  var pesanKosong = document.getElementById("pesanKosong");
  if (!grid || !inputCari || !pilihKategori) return;

  // Isi pilihan kategori dari data (tanpa duplikat)
  var kategoriUnik = [];
  dataLayanan.forEach(function (item) {
    if (kategoriUnik.indexOf(item.kategori) === -1) kategoriUnik.push(item.kategori);
  });
  kategoriUnik.forEach(function (kategori) {
    var opsi = document.createElement("option");
    opsi.value = kategori;
    opsi.textContent = kategori;
    pilihKategori.appendChild(opsi);
  });

  // Render ulang kartu sesuai kata kunci dan kategori
  function render() {
    var kataKunci = inputCari.value.trim().toLowerCase();
    var kategori = pilihKategori.value;

    var hasil = dataLayanan.filter(function (item) {
      var cocokNama = item.nama.toLowerCase().indexOf(kataKunci) !== -1;
      var cocokKategori = kategori === "semua" || item.kategori === kategori;
      return cocokNama && cocokKategori;
    });

    grid.innerHTML = "";
    hasil.forEach(function (item) {
      grid.appendChild(buatKartu(item));
    });
    pesanKosong.hidden = hasil.length !== 0;
  }

  inputCari.addEventListener("input", render);
  pilihKategori.addEventListener("change", render);

  render();
}

/* ---------- Jalankan semua fitur ---------- */
document.addEventListener("DOMContentLoaded", function () {
  initMenu();
  initForm();
  initKatalog();
});

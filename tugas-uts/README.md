# Claire.Archive - Website Profil Jasa Fotografi

Proyek UTS Pemrograman Web Dasar (Semester 3)

## Identitas

- **Nama:** [ISI NAMA LENGKAP]
- **NIM:** [ISI NIM]
- **Dosen:** Ditra liandaputra., S.Kom., M.Kom
- **Tema:** A. Profil UMKM
- **Objek:** Claire.Archive, usaha jasa fotografi (wisuda, prewedding, pernikahan, keluarga, produk, event)

## Daftar Fitur

### HTML
- 4 halaman saling terhubung: `index.html`, `tentang.html`, `katalog.html`, `kontak.html`
- Elemen semantik: `header`, `nav`, `main`, `section`, `article`, `footer`
- `title` berbeda di setiap halaman, `meta charset`, dan `meta viewport`
- Tabel data dengan `thead` dan `tbody` (daftar harga paket dan jam operasional)
- Seluruh gambar memiliki atribut `alt`
- Formulir kontak dengan `label` terhubung (`for`/`id`), `required`, `type="email"`, `type="tel"` dengan `pattern="[0-9]{10,13}"`, `select`, dan `textarea` ber-`minlength`/`maxlength`

### CSS
- Satu file eksternal `css/style.css` (tanpa style inline dan tanpa tag `<style>`)
- Flexbox untuk navigasi, CSS Grid untuk katalog
- Media query HP (`max-width: 600px`) dan desktop (`min-width: 992px`)
- Variabel CSS di `:root` (warna, radius, bayangan, font)
- Efek interaksi: `:hover`, `transition`, dan `@keyframes munculNaik`

### JavaScript (bonus)
- Menu hamburger dengan `classList.toggle` (3 poin)
- Validasi formulir dengan pesan error di bawah kolom dan pesan sukses (3 poin)
- Katalog dinamis: pencarian nama dan filter kategori dari array objek yang dirender ke DOM (4 poin)
- Tanpa JavaScript, seluruh halaman tetap berfungsi penuh

## Struktur Folder

```
nim-nama/
├── index.html
├── tentang.html
├── katalog.html
├── kontak.html
├── css/style.css
├── js/script.js
├── img/
├── bukti/        (tangkapan layar validasi W3C)
└── README.md
```

## Sumber Gambar

- [ISI: sumber gambar, misalnya foto sendiri atau Unsplash/Pexels beserta nama fotografer dan tautan]
- Font: sistem (Georgia, Segoe UI), tanpa Google Fonts

## Kendala dan Cara Mengatasinya

| Kendala | Cara mengatasi |
|---------|----------------|
| [ISI, misalnya: menu HP terpotong] | [ISI, misalnya: memakai flex-wrap dan lebar nav 100%] |
| [ISI] | [ISI] |

## Tautan

- Repositori: [ISI tautan GitHub]
- GitHub Pages / Netlify (opsional): [ISI tautan]

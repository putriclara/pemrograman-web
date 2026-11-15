# Claire.Archive - Website Profil Jasa Fotografi

Proyek UTS Pemrograman Web Dasar (Semester 3)

## Identitas

- **Nama:** Putri Clara
- **NIM:** 2559201014
- **Dosen:** Ditra Liandraputra, S.T., M.Kom.
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

### JavaScript
- Menu hamburger dengan `classList.toggle`
- Validasi formulir dengan pesan error di bawah kolom dan pesan sukses
- Katalog dinamis: pencarian nama dan filter kategori dari array objek yang dirender ke DOM
- Tanpa JavaScript, seluruh halaman tetap berfungsi penuh

## Struktur Folder

```
claire-archive/
├── index.html
├── tentang.html
├── katalog.html
├── kontak.html
├── css/style.css
├── js/script.js
├── img/
│   ├── claire.jpeg
│   ├── clara.jpeg
│   ├── diky.jpeg
│   ├── event.jpeg
│   ├── family.jpeg
│   ├── prewed.jpeg
│   ├── produk.jpeg
│   ├── profil.jpeg
│   ├── resepsi.jpeg
│   ├── salsa.jpeg
│   ├── studio.jpeg
│   ├── wisuda.jpeg
│   └── wisudagrup.jpeg
├── bukti/
└── README.md
```

## Bukti Validasi W3C

Seluruh halaman HTML divalidasi menggunakan Nu Html Checker dari W3C ([validator.w3.org/nu](https://validator.w3.org/nu/)) pada 15 November 2026.

| No | File | Validator | Hasil |
|----|------|-----------|-------|
| 1 | index.html | Nu Html Checker | Lolos, tanpa error dan warning |
| 2 | tentang.html | Nu Html Checker | Lolos, tanpa error dan warning |
| 3 | katalog.html | Nu Html Checker | Lolos, tanpa error dan warning |
| 4 | kontak.html | Nu Html Checker | Lolos, tanpa error dan warning |

Screenshot hasil validasi dapat dilihat di Google Drive berikut:

[Bukti Validasi W3C (Google Drive)](https://drive.google.com/drive/folders/1xDWB4eiCeMpN4QkbKIxYvYntrPzRSFg1)

## Sumber Gambar

- Seluruh 13 gambar di folder `img/` diambil dari Pinterest ([pinterest.com](https://www.pinterest.com/)) dan digunakan hanya sebagai materi ilustrasi untuk keperluan tugas kuliah (non-komersial). Hak cipta gambar tetap dimiliki oleh pemilik aslinya.
- Font: sistem (Georgia, Segoe UI), tanpa Google Fonts

## Kendala dan Cara Mengatasinya

| Kendala | Cara mengatasi |
|---------|----------------|
| Menu navigasi menumpuk dan terpotong di layar HP | Pakai `flex-wrap` di header, `flex-basis: 100%` di nav, dan `flex-direction: column` di `.nav-list` pada media query 600px |
| Halaman bisa digeser ke samping gara-gara tabel lima kolom | Tabel dibungkus `.tabel-wrap` dengan `overflow-x: auto` |
| Ukuran foto beda-beda jadi kartu katalog tidak rata | Pakai `aspect-ratio: 4 / 3` dan `object-fit: cover`, plus atribut `width` dan `height` di gambar |

## Tautan

- Repositori: https://github.com/putriclara/pemrograman-web
- Folder proyek: https://github.com/putriclara/pemrograman-web/tree/main/tugas-uts
- Bukti W3C: https://drive.google.com/drive/folders/1xDWB4eiCeMpN4QkbKIxYvYntrPzRSFg1
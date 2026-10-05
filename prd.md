# PRD Website Maklon Kosmetik ID

**Domain:** `https://maklonkosmetik.id`  
**Versi:** 1.1 — struktur Layanan, Produk, Blog dan konversi WhatsApp  
**Tanggal:** 5 Oktober 2026  
**Jenis website:** website layanan B2B maklon kosmetik/skincare  
**Frontend:** HTML statis, Bootstrap, CSS, dan JavaScript seperlunya  
**Warna brand:** hijau  
**Strategi pengembangan:** bertahap selama 12 bulan, dimulai dari fondasi 90 hari  
**Istilah:** “AEOI” pada permintaan diterapkan sebagai AEO, yaitu optimasi informasi untuk menjawab pertanyaan pengguna.

**Update 1.1:** tiga halaman induk wajib adalah `/layanan/`, `/produk/`, dan `/blog/`. Semua detail berada di folder induk masing-masing. Seluruh CTA konversi mengarah langsung ke WhatsApp **088989643555**, dengan URL `https://wa.me/6288989643555`. Email merupakan kontak tambahan setelah alamatnya dikonfirmasi. Tautan navigasi tetap menuju halaman website.

Dokumen ini menentukan kebutuhan produk, struktur halaman, desain, implementasi teknis, pengukuran, dan kriteria penerimaan website. Developer, desainer, penulis, SEO, dan sales menggunakan dokumen yang sama sebagai acuan pekerjaan.

Data lengkap audit kompetitor belum tersedia kembali dalam konteks saat ini. PRD mengikuti roadmap yang sudah disusun dan prinsip Modul 4–8, tanpa menetapkan angka trafik atau kelemahan spesifik kompetitor sebagai fakta.

---

## 1. Keputusan arsitektur deployment

GitHub Pages dan Cloudflare Pages merupakan dua layanan hosting berbeda. Custom domain tidak menjadikan keduanya satu layanan hosting.

### Arsitektur yang direkomendasikan

| Komponen | Pilihan |
|---|---|
| Repository kode | GitHub |
| Review perubahan | Pull request GitHub |
| Hosting produksi | Cloudflare Pages |
| Integrasi deployment | GitHub → Cloudflare Pages |
| DNS domain | Cloudflare |
| Domain utama | `maklonkosmetik.id` |
| Backend formulir | Cloudflare Pages Functions, opsional jika formulir penyimpanan lead diaktifkan |
| Penyimpanan lead awal | Pencatatan sales/CRM untuk percakapan WhatsApp; Cloudflare D1 atau penyimpanan terkelola jika backend formulir diaktifkan |
| Notifikasi sales | WhatsApp sebagai kanal utama; email transaksional hanya jika backend formulir diaktifkan |
| Preview | Preview deployment Cloudflare Pages |

**Status keputusan:** asumsi arsitektur untuk PRD ini. GitHub tetap menjadi pusat kode dan perubahan; Cloudflare Pages menjadi hosting produksi.

GitHub Pages memiliki pembatasan untuk penggunaan sebagai hosting bisnis daring atau website yang terutama memfasilitasi transaksi komersial. Karena website ini bertujuan menghasilkan peluang proyek bisnis, Cloudflare Pages menjadi pilihan yang direkomendasikan. [Rujukan 1](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

Cloudflare Pages mendukung HTML statis dan Functions untuk kebutuhan server seperti pengiriman formulir. Penggunaan Functions tidak mengubah halaman layanan menjadi aplikasi yang bergantung pada JavaScript. [Rujukan 2](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) [Rujukan 3](https://developers.cloudflare.com/pages/functions/)

### Jika GitHub Pages tetap dipilih

PRD teknis perlu direvisi karena:

- Backend formulir harus memakai layanan terpisah.
- Konfigurasi `_headers` dan Functions Cloudflare Pages tidak berlaku.
- Redirect, header keamanan, dan preview membutuhkan pendekatan berbeda.
- Kesesuaian penggunaan dengan ketentuan GitHub Pages harus dipastikan.

Seluruh kebutuhan selanjutnya menggunakan **GitHub repository + Cloudflare Pages**.

---

## 2. Masalah yang harus diselesaikan

Calon pelanggan perlu memahami layanan, kecocokan proyek, persiapan, biaya, MOQ, proses, dan kemampuan penyedia sebelum memulai konsultasi.

Website harus menyelesaikan kebutuhan berikut:

| ID | Masalah | Kebutuhan produk |
|---|---|---|
| BUS-01 | Pengunjung belum memahami cakupan layanan | Penjelasan layanan dan batasannya |
| BUS-02 | Pengunjung belum menentukan kategori produk | Pengarahan menuju kategori yang tersedia |
| BUS-03 | Pengunjung sulit menilai kelayakan proyek | Informasi biaya, MOQ, dan jadwal |
| BUS-04 | Identitas serta pelaksana produksi belum jelas | Hubungan merek, badan usaha, dan fasilitas |
| BUS-05 | Pengunjung belum mengetahui persiapan konsultasi | Panduan brief dan konsultasi WhatsApp |
| BUS-06 | Sales menerima kebutuhan yang terlalu umum | Pesan awal WhatsApp berkonteks produk atau layanan |
| BUS-07 | Aktivitas website belum terhubung dengan hasil bisnis | Tracking dan pencatatan lead |
| BUS-08 | Website baru memiliki kapasitas konten terbatas | Template dan pengembangan bertahap |

---

## 3. Tujuan dan indikator keberhasilan

### Tujuan utama

**Menghasilkan permintaan konsultasi yang sesuai dengan kemampuan Maklon Kosmetik ID dan dapat ditindaklanjuti menjadi peluang proyek.**

### Tujuan pendukung

1. Membuat layanan mudah ditemukan.
2. Menjawab pertanyaan pelanggan dengan jelas.
3. Menampilkan kemampuan berdasarkan bukti.
4. Memudahkan konsultasi melalui WhatsApp sebagai kanal utama dan email sebagai kontak tambahan.
5. Menyediakan pengalaman mobile yang cepat.
6. Membangun fondasi SEO, AEO, dan GEO.
7. Memudahkan pembaruan konten tanpa perubahan arsitektur besar.

### Indikator

| Kelompok | Indikator | Sumber |
|---|---|---|
| Fungsi | CTA membuka WhatsApp dengan nomor dan konteks yang benar | Pengujian tautan; backend jika formulir tambahan aktif |
| Penjualan | Lead sesuai, penawaran, proyek | CRM |
| SEO | Kueri relevan, impresi, klik, halaman ditemukan | Search Console |
| Penggunaan | Jalur menuju WhatsApp dan hambatan konsultasi | Analytics dan pengujian pengguna |
| AEO | Kelengkapan serta ketepatan jawaban | Review konten dan log pengujian |
| GEO | Penyebutan, kutipan, akurasi, referral | Log pengujian dan analytics |
| Performa | Lighthouse, GTmetrix, Core Web Vitals | Laporan pengujian dan data lapangan |

Target jumlah lead dan trafik ditetapkan setelah baseline tersedia. PRD menetapkan target kualitas implementasi yang dapat diperiksa sejak peluncuran.

---

## 4. Target pengguna

| Segmen | Kebutuhan | Jalur utama |
|---|---|---|
| Calon pemilik brand pertama | Memahami langkah memulai | Homepage → proses → blog → WhatsApp |
| Pemilik brand berjalan | Menambah produk atau mengevaluasi produksi | Produk → detail produk → WhatsApp |
| Distributor/reseller | Menilai produk dengan brand sendiri | Layanan → biaya/MOQ → WhatsApp |
| Bisnis yang membandingkan penyedia | Memeriksa kecocokan mitra | Layanan → perusahaan → bukti → WhatsApp |

Segmentasi ini merupakan hipotesis awal yang perlu diperiksa melalui sales dan riset keyword.

### User stories

| ID | Kebutuhan pengguna | Kriteria penerimaan |
|---|---|---|
| US-01 | Sebagai pemula, saya ingin memahami proses maklon | Proses mudah ditemukan dari homepage |
| US-02 | Saya ingin mengetahui apakah produk saya dapat dibahas | Kategori dan cakupan tersedia pada halaman layanan |
| US-03 | Saya ingin memahami faktor biaya | Halaman biaya menjelaskan komponen serta kebutuhan penawaran |
| US-04 | Saya ingin mengetahui ketentuan jumlah produksi | Halaman MOQ menjelaskan satuan dan kondisi |
| US-05 | Saya ingin memeriksa perusahaan | Identitas serta hubungan fasilitas dijelaskan |
| US-06 | Saya ingin mengirim kebutuhan dari ponsel | CTA langsung membuka WhatsApp 088989643555 dengan konteks halaman |
| US-07 | Saya ingin mengetahui apakah permintaan diterima | Klik WhatsApp tidak disebut sebagai pesan terkirim; sales mencatat percakapan yang benar-benar masuk |
| US-08 | Saya belum mengetahui spesifikasi lengkap | Tetap dapat membuka WhatsApp tanpa mengisi formulir wajib |

---

## 5. Ruang lingkup

### Wajib pada peluncuran

- Homepage.
- Halaman induk Layanan di `/layanan (sejajar dengan index)`.
- Halaman detail layanan di `/layanan/{slug}/`.
- Halaman induk Produk di `/produk (sejajar dengan index)`.
- Detail produk yang sudah siap di `/produk/{slug}/`.
- Halaman induk Blog di `/blog.html (sejajar dengan index)`.
- Artikel di `/blog/{slug}/`.
- Dua kategori produk yang sudah siap.
- Proses maklon.
- Biaya maklon.
- MOQ maklon.
- Tentang kami.
- Kemampuan dan fasilitas.
- Konsultasi.
- Kontak.
- Blog dengan artikel panduan yang tersedia.
- Kebijakan privasi.
- Ketentuan penggunaan.
- Halaman terima kasih jika formulir backend tambahan diaktifkan.
- Halaman 404.
- CTA WhatsApp langsung di seluruh halaman utama.
- Kontak email tambahan jika alamat resmi telah dikonfirmasi.
- Tracking dasar.
- Sitemap, robots, canonical, dan structured data.
- Deployment dan custom domain.
- Pemeriksaan performa, mobile, dan aksesibilitas.

### Pengembangan berikutnya

- Kategori tambahan.
- Studi kasus.
- Profil tim dan reviewer.
- Template brief.
- Sumber daya.
- Integrasi CRM lanjutan.
- Formulir backend tambahan, penyimpanan lead, dan notifikasi sesuai kebutuhan; tidak menggantikan CTA WhatsApp.
- Pencarian internal ketika jumlah konten membutuhkannya.

### Di luar cakupan awal

- Checkout dan pembayaran.
- Akun pelanggan.
- Portal produksi.
- Kalkulator harga otomatis tanpa model biaya yang disetujui.
- Chatbot generatif.
- Katalog kategori yang belum tersedia.
- Halaman kota massal.
- Dashboard admin khusus.

---

## 6. Prioritas requirement

| Prioritas | Arti |
|---|---|
| P0 | Wajib benar agar website dapat diluncurkan |
| P1 | Fondasi layanan, keputusan pelanggan, dan pencarian |
| P2 | Pengembangan setelah fondasi stabil |

Pekerjaan P0 mencakup fakta perusahaan, fungsi CTA WhatsApp, keamanan dasar, akses website, dan integritas data. Fungsi formulir termasuk P0 hanya jika fitur backend diaktifkan.

Pekerjaan P1 mencakup halaman inti, navigasi, SEO, performa, dan konten keputusan pelanggan.

---

## 7. Arsitektur informasi dan URL

Gunakan domain `https://maklonkosmetik.id`, slug huruf kecil dan tanda hubung. URL canonical memakai trailing slash. Contoh `/produk/skincare-a` diarahkan permanen ke `/produk/skincare-a/` dan menghasilkan satu halaman yang sama.

| ID | Halaman | URL canonical | Prioritas |
|---|---|---|---|
| PAGE-01 | Homepage | `/` | P1 |
| PAGE-02 | Induk Layanan | `/layanan` | P1 |
| PAGE-03 | Detail layanan maklon skincare | `/layanan/maklon-skincare/` | P1, jika tersedia |
| PAGE-04 | Detail layanan maklon kosmetik | `/layanan/maklon-kosmetik/` | P1, jika tersedia |
| PAGE-05 | Induk Produk | `/produk` | P1 |
| PAGE-06 | Detail Skincare A | `/produk/skincare-a/` | P1, contoh; terbit setelah data tersedia |
| PAGE-07 | Detail Skincare B | `/produk/skincare-b/` | P1, contoh; terbit setelah data tersedia |
| PAGE-08 | Detail Serum A | `/produk/serum-a/` | P1, contoh; terbit setelah data tersedia |
| PAGE-09 | Induk Blog | `/blog` | P1 |
| PAGE-10 | Artikel persiapan konsultasi | `/blog/persiapan-konsultasi-maklon/` | P1 |
| PAGE-11 | Artikel brief skincare | `/blog/cara-menyusun-brief-skincare/` | P1 |
| PAGE-12 | Artikel membandingkan penawaran | `/blog/cara-membandingkan-penawaran-maklon/` | P1 |
| PAGE-13 | Artikel sampling | `/blog/sampling-dan-persetujuan-produk/` | P1 |
| PAGE-14 | Proses maklon | `/proses-maklon (sejajar dengan index)` | P1 |
| PAGE-15 | Biaya maklon | `/biaya-maklon (sejajar dengan index)` | P1 |
| PAGE-16 | MOQ maklon | `/moq-maklon/` | P1 |
| PAGE-17 | Tentang kami | `/tentang-kami (sejajar dengan index)` | P1 |
| PAGE-18 | Kemampuan dan fasilitas | `/kemampuan-dan-fasilitas/` | P1 |
| PAGE-19 | Persiapan konsultasi dan kontak WhatsApp | `/konsultasi/` | P1; halaman informasi, bukan tujuan CTA utama |
| PAGE-20 | Kontak | `/kontak/` | P0 |
| PAGE-21 | Kebijakan privasi | `/kebijakan-privasi (sejajar dengan index)` | P0 |
| PAGE-22 | Ketentuan penggunaan | `/ketentuan-penggunaan/` | P1 |
| PAGE-23 | Terima kasih | `/terima-kasih (sejajar dengan index)` | Opsional, noindex; hanya jika formulir backend aktif |
| PAGE-24 | Halaman tidak ditemukan | `/404.html` | P0 |

Skincare A, Skincare B, dan Serum A adalah contoh penamaan struktur, bukan data produk siap tayang. Nama produk, kategori, spesifikasi, foto, dan kemampuan produksi harus dikonfirmasi sebelum publikasi.

### Aturan URL dan folder

- Detail layanan selalu berada di `/layanan/{slug}/`.
- Detail produk selalu berada di `/produk/{slug}/`.
- Artikel selalu berada di `/blog/{slug}/`.
- Detail produk tidak ditempatkan di folder layanan, dan artikel tidak ditempatkan di folder produk.
- Canonical memakai domain produksi dan URL halaman itu sendiri.
- Parameter kampanye dan filter tidak menjadi canonical terpisah.
- Perubahan URL membutuhkan register redirect; jangan membuat rantai redirect.
- Halaman kosong dan contoh produk yang belum terverifikasi tidak diterbitkan.
- Filter kategori produk pada tahap awal tetap berada di halaman induk; tidak membuat halaman tipis untuk setiap variasi.

### Migrasi URL rancangan lama

| URL lama | Tujuan baru | Ketentuan |
|---|---|---|
| `/maklon-skincare/` | `/layanan/maklon-skincare/` | Redirect permanen jika URL lama sudah pernah diterbitkan |
| `/maklon-skincare/serum/` | `/layanan/maklon-serum/` | Hanya jika konten memang layanan maklon serum dan layanan tersedia |
| `/maklon-skincare/facial-wash/` | `/layanan/maklon-facial-wash/` | Hanya jika konten memang layanan maklon facial wash dan layanan tersedia |
| `/panduan/` | `/blog` | Redirect permanen jika pernah diterbitkan |
| `/panduan/{slug}/` | `/blog/{slug}/` | Mapping satu per satu ke artikel yang sama |

Layanan maklon serum menjelaskan jasa pengembangan/produksi; produk Serum A menjelaskan satu produk atau konsep produk tertentu. Keduanya boleh mempunyai halaman berbeda jika isi dan tujuannya berbeda. Jangan mengarahkan semua URL layanan lama ke satu produk yang tidak setara.

Cloudflare Pages harus mempunyai `404.html` di root agar URL yang tidak ada tidak jatuh ke homepage sebagai perilaku SPA. Rujukan implementasi: https://developers.cloudflare.com/pages/configuration/serving-pages/

---

## 8. Navigasi

### Header

1. Layanan → `/layanan`.
2. Produk → `/produk`.
3. Proses → `/proses-maklon`.
4. Biaya & MOQ → halaman pendukung terkait.
5. Tentang Kami → `/tentang-kami`.
6. Blog → `/blog`.
7. CTA **Konsultasi via WhatsApp** → `https://wa.me/6288989643555`.

Logo mengarah ke homepage. Menu navigasi, breadcrumb, pagination, dan tautan “Lihat detail” tetap menuju halaman internal yang relevan. Seluruh tombol ajakan konsultasi, penawaran, tanya produk, dan mulai proyek langsung menuju WhatsApp.

### Dropdown

| Menu | Isi |
|---|---|
| Layanan | Semua layanan dan detail layanan yang sudah terbit |
| Produk | Semua produk, filter kategori tersedia, dan detail produk |
| Biaya & MOQ | Biaya dan MOQ |
| Tentang Kami | Perusahaan, kemampuan, kontak |
| Blog | Semua artikel dan topik editorial yang tersedia |

### Requirement navigasi

| ID | Requirement | Penerimaan |
|---|---|---|
| NAV-01 | Menu dapat digunakan dengan keyboard | Fokus terlihat dan urutan logis |
| NAV-02 | Menu mobile dapat dibuka serta ditutup | Berfungsi pada perangkat uji |
| NAV-03 | Tombol menu memiliki nama aksesibel | Status terbuka/tertutup diperbarui |
| NAV-04 | Tidak ada tautan kosong | Tidak memakai `href="#"` sebagai tujuan final |
| NAV-05 | Halaman aktif dapat dikenali | Indikator tidak hanya berdasarkan warna |
| NAV-06 | Halaman penting mudah dicapai | Maksimal tiga interaksi navigasi dari homepage |
| NAV-07 | CTA tidak menutupi isi | Tidak menghalangi field, tombol, atau footer |

### Footer

Memuat layanan, perencanaan proyek, perusahaan, produk, blog, WhatsApp 088989643555, email resmi jika tersedia, kontak resmi, identitas badan usaha, privasi, dan ketentuan penggunaan.

---

## 9. Sistem desain brand hijau

### Karakter visual

Website harus terlihat sebagai bisnis yang jelas, rapi, dan dapat diperiksa. Gunakan ruang kosong, tipografi, dokumentasi asli, dan hierarki informasi.

### Palet awal

| Token | Warna | Penggunaan |
|---|---|---|
| `brand-primary` | `#166534` | CTA utama dan elemen brand |
| `brand-primary-hover` | `#14532D` | Hover CTA |
| `brand-dark` | `#052E16` | Penekanan terbatas |
| `brand-soft` | `#F0FDF4` | Latar section |
| `brand-border` | `#BBF7D0` | Aksen ringan |
| `text-primary` | `#17221B` | Teks utama |
| `text-secondary` | `#4B5B50` | Teks pendukung |
| `surface` | `#FFFFFF` | Latar utama |
| `border-neutral` | `#DCE5DE` | Garis tabel dan formulir |
| `error` | `#B42318` | Pesan error |

Palet merupakan rancangan awal. Semua kombinasi teks, tombol, hover, dan focus harus diperiksa kontrasnya.

### Tipografi

- Gunakan system font pada versi awal.
- Body mobile minimal 16 px.
- Line-height body sekitar 1,5–1,7.
- Panjang baris artikel dikendalikan.
- Heading mengikuti hierarki, bukan ukuran visual semata.
- Hindari teks tipis di atas foto.

### Komponen

- Header.
- Breadcrumb.
- Hero.
- Kartu kategori.
- Ringkasan proses.
- Tabel ketentuan.
- Galeri bukti.
- FAQ.
- CTA.
- Formulir.
- Pesan error dan sukses.
- Kartu panduan.
- Footer.

Komponen yang sama harus memiliki perilaku serta styling yang konsisten.

---

## 10. Requirement Bootstrap dan HTML

| ID | Requirement |
|---|---|
| FE-01 | Gunakan Bootstrap 5.3.x, pin versi patch yang dipilih |
| FE-02 | Simpan dependency dan lockfile |
| FE-03 | CSS produksi diminifikasi |
| FE-04 | Gunakan komponen JavaScript yang diperlukan saja |
| FE-05 | Tidak memasang jQuery untuk Bootstrap 5 |
| FE-06 | Halaman dan konten utama berupa HTML yang sudah dihasilkan |
| FE-07 | Header, footer, serta konten utama tidak diambil melalui fetch setelah halaman terbuka |
| FE-08 | Gunakan template saat build untuk menghindari duplikasi |
| FE-09 | Output akhir tetap berupa HTML statis |
| FE-10 | Script interaktif menggunakan `defer` atau strategi pemuatan yang sesuai |

Dokumentasi Bootstrap yang diperiksa menyediakan versi 5.3.8. Versi final harus dicatat pada lockfile dan diuji sebelum pembaruan. [Rujukan 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

### Pendekatan build

Direkomendasikan:

- Template HTML dengan partial.
- Data situs terpusat.
- Sass Bootstrap yang dipilih sesuai kebutuhan.
- Build menghasilkan folder `dist`.
- Halaman dapat dibuka tanpa framework frontend.
- Jika diaktifkan, backend formulir diletakkan terpisah dari aset statis.

Tools build membantu produksi file, bukan menjadi ketergantungan browser.

---

## 11. Requirement homepage

**Tujuan:** mengenalkan bisnis, mengarahkan pengunjung, dan membantu evaluasi proyek.

| ID | Section | Isi wajib |
|---|---|---|
| HOME-01 | Hero | H1, penjelasan layanan, CTA utama, CTA sekunder |
| HOME-02 | Ringkasan penting | Kategori, model layanan, ketentuan awal |
| HOME-03 | Untuk siapa | Pemula, brand berjalan, pembanding penyedia |
| HOME-04 | Produk | Produk tersedia dengan tautan `/produk/{slug}/` dan tautan induk `/produk/` |
| HOME-05 | Layanan | Tersedia, bersyarat, mitra, di luar cakupan; tautan `/layanan/{slug}/` |
| HOME-06 | Proses | Tahapan ringkas dan tautan detail |
| HOME-07 | Biaya/MOQ/waktu | Penjelasan faktor dan tautan |
| HOME-08 | Kemampuan | Bukti dengan konteks |
| HOME-09 | Proyek | Studi kasus jika sudah siap |
| HOME-10 | Blog | Artikel persiapan konsultasi dari `/blog/{slug}/` |
| HOME-11 | FAQ | Pertanyaan utama pelanggan |
| HOME-12 | CTA akhir | Konsultasi WhatsApp dengan konteks homepage |

### Hero

- Satu H1 utama sebagai konvensi proyek.
- Teks utama tersedia dalam HTML.
- Foto memiliki ukuran eksplisit.
- Gambar LCP tidak menggunakan lazy loading.
- Tidak menggunakan carousel atau video autoplay.
- CTA utama **Konsultasi via WhatsApp** menuju `https://wa.me/6288989643555` dengan pesan awal homepage.
- CTA sekunder **Tanya Kebutuhan Produk** juga menuju WhatsApp dengan konteks berbeda.
- Tautan informasi **Pelajari Proses Maklon** menuju `/proses-maklon/` sebagai navigasi biasa.

### Metadata awal

**Title:**

> Maklon Kosmetik & Skincare untuk Brand Anda | Maklon Kosmetik ID

**H1:**

> Layanan Maklon Kosmetik dan Skincare untuk Pengembangan Brand Anda

Redaksi final mengikuti cakupan layanan yang disetujui.

---

## 12. Requirement halaman induk dan detail layanan

### Halaman induk Layanan `/layanan/`

Menampilkan pembuka, daftar layanan terkonfirmasi, kartu dengan tautan detail internal, perbedaan cakupan layanan, proses ringkas, bukti, FAQ, dan CTA WhatsApp. Tidak menampilkan layanan yang belum tersedia.

### Detail layanan `/layanan/{slug}/`

Wajib memuat:

1. Pembuka layanan.
2. Siapa yang dibantu.
3. Cakupan.
4. Kategori produk.
5. Pilihan pengembangan.
6. Persiapan brief.
7. Proses.
8. MOQ.
9. Faktor biaya.
10. Ketergantungan jadwal.
11. Bukti kemampuan.
12. FAQ.
13. Konsultasi.

### Detail layanan menurut kategori

Setiap kategori wajib mempunyai informasi khusus:

| ID | Requirement |
|---|---|
| SERV-01 | Cakupan produk terkonfirmasi |
| SERV-02 | Informasi brief khusus kategori |
| SERV-03 | Model pengembangan yang tersedia |
| SERV-04 | Sampling dan titik persetujuan |
| SERV-05 | Kemasan serta kondisi terkait |
| SERV-06 | Ketentuan MOQ yang relevan |
| SERV-07 | Faktor biaya dan jadwal |
| SERV-08 | Bukti yang mendukung kategori |
| SERV-09 | FAQ khusus |
| SERV-10 | CTA konsultasi dengan konteks kategori |

Halaman serum dan facial wash tidak boleh menjadi salinan dengan pergantian nama produk.

---

## 13. Requirement proses, biaya, dan MOQ

### Proses maklon

Setiap tahap menjelaskan:

- Input.
- Pelaksana.
- Output.
- Persetujuan pelanggan.
- Ketergantungan.
- Tahap berikutnya.

### Biaya

Wajib menjelaskan:

- Faktor pembentuk penawaran.
- Cakupan pengembangan.
- Produksi.
- Kemasan.
- Variasi.
- Biaya yang perlu dikonfirmasi.
- Informasi untuk meminta penawaran.

Angka harga hanya diterbitkan dengan spesifikasi, jumlah, cakupan, pengecualian, dan periode berlaku.

### MOQ

Wajib menjelaskan:

- Satuan perhitungan.
- Per formula, varian, atau SKU.
- Hubungan dengan kemasan.
- Ketentuan kategori.
- Pemesanan pertama dan ulang jika berbeda.
- Cara mengevaluasi kebutuhan.

**Penerimaan:** seluruh ketentuan telah diperiksa operasional dan konsisten dengan penawaran sales.

---

## 14. Requirement identitas, kemampuan, dan bukti

### Identitas perusahaan

Wajib tersedia:

- Nama brand.
- Badan usaha.
- Hubungan keduanya.
- Peran perusahaan.
- Pelaksana pengembangan dan produksi.
- Kontak.
- Lokasi serta fungsinya.

### Bukti

| ID | Requirement |
|---|---|
| TRUST-01 | Foto mempunyai konteks |
| TRUST-02 | Kepemilikan fasilitas dinyatakan benar |
| TRUST-03 | Kemampuan mitra mempunyai penjelasan |
| TRUST-04 | Dokumen menyebut pemegang serta ruang lingkup |
| TRUST-05 | Studi kasus memiliki bukti dan izin |
| TRUST-06 | Testimoni berasal dari pengalaman nyata |
| TRUST-07 | Klaim mempunyai reviewer |
| TRUST-08 | Informasi mempunyai pemilik pembaruan |

Tidak boleh menerbitkan angka pengalaman, kapasitas, sertifikasi, atau hasil pelanggan yang belum dapat diperiksa.

---

## 15. Requirement Blog dan pengelolaan konten

### Artikel awal

1. Persiapan konsultasi maklon.
2. Cara menyusun brief skincare.
3. Cara membandingkan penawaran.
4. Sampling dan persetujuan produk.

Terbitkan sesuai kapasitas. Halaman `/blog/` menampilkan artikel yang tersedia: judul, ringkasan, tanggal, penulis, foto bila relevan, dan tautan detail `/blog/{slug}/`. Gunakan pagination HTML jika diperlukan; jangan bergantung pada infinite scroll. Artikel tidak ditempatkan di root domain atau folder layanan/produk.

### Template artikel

- Breadcrumb.
- H1.
- Ringkasan kebutuhan.
- Isi dengan H2/H3.
- Tabel atau daftar jika membantu.
- Contoh dengan konteks.
- Sumber bila relevan.
- Penulis/reviewer sesuai tanggung jawab.
- Tanggal publikasi dan perubahan nyata.
- Tautan layanan terkait.
- CTA WhatsApp dengan konteks judul artikel.
- Tautan produk dan layanan terkait sesuai isi artikel.

### Model data konten

| Field | Fungsi |
|---|---|
| `id` | Identitas konten |
| `slug` | URL |
| `title` | Judul |
| `meta_title` | Title pencarian |
| `meta_description` | Deskripsi |
| `page_type` | Jenis template |
| `status` | Draft/review/published |
| `owner` | Pemilik |
| `reviewer` | Pemeriksa |
| `published_at` | Publikasi |
| `updated_at` | Perubahan substansial |
| `related_pages` | Internal link |
| `evidence_refs` | Register bukti |
| `indexable` | Keputusan indexing |

Build harus menolak konten publik yang masih mempunyai placeholder wajib.

---

## 16. Requirement formulir konsultasi tambahan (opsional)

**Status versi 1.1:** seluruh CTA utama langsung ke WhatsApp. Formulir backend pada bagian ini adalah pengembangan opsional; requirement server, penyimpanan, antispam, dan notifikasi berlaku hanya jika fitur tersebut diaktifkan. Formulir tidak boleh menjadi langkah wajib sebelum WhatsApp terbuka. Tombol submit formulir merupakan kontrol pengiriman data, bukan CTA konversi utama. Untuk peluncuran WhatsApp saja, fitur formulir dan dependensinya tidak menjadi syarat go-live.

### Field

| Field | Ketentuan |
|---|---|
| Nama | Wajib |
| Kanal kontak | Wajib |
| Nomor WhatsApp/email | Validasi sesuai kanal |
| Kategori | Wajib, tersedia “Belum menentukan” |
| Tahap bisnis | Pilihan sederhana |
| Ringkasan kebutuhan | Opsional |
| Jumlah produksi | Opsional, tersedia “Belum tahu” |
| Target waktu | Opsional |
| Anggaran | Opsional |

### Perilaku

| ID | Requirement |
|---|---|
| FORM-01 | Label terlihat dan terhubung dengan input |
| FORM-02 | Validasi client dan server |
| FORM-03 | Error menjelaskan perbaikan |
| FORM-04 | Input tidak hilang saat error |
| FORM-05 | Tombol mencegah pengiriman berulang selama proses |
| FORM-06 | Backend memberikan ID permintaan |
| FORM-07 | Sukses hanya setelah penyimpanan berhasil |
| FORM-08 | Notifikasi tidak menjadi satu-satunya penyimpanan |
| FORM-09 | Pengunjung mempunyai alternatif WhatsApp |
| FORM-10 | Formulir dapat digunakan dengan keyboard |

### Kontrak endpoint

**Endpoint:** `POST /api/konsultasi`

| Kondisi | Respons yang diharapkan |
|---|---|
| Permintaan diterima dan tersimpan | Respons sukses dengan ID |
| Field tidak valid | Error validasi terstruktur |
| Verifikasi antispam gagal | Error verifikasi |
| Terlalu banyak permintaan | Status 429 |
| Penyimpanan tidak tersedia | Error layanan; tidak menyatakan sukses |
| Permintaan yang sama diulang | Mengembalikan hasil yang sama tanpa lead ganda |

Implementasikan idempotency untuk menangani retry dan double submit.

### Antispam

- Turnstile.
- Honeypot.
- Validasi server.
- Batas ukuran payload.
- Pembatasan permintaan.
- Pemeriksaan origin yang sesuai.

Turnstile wajib divalidasi pada server. Token bersifat sekali pakai dan memiliki waktu berlaku terbatas; client harus menangani token kedaluwarsa sebelum retry. [Rujukan 6](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)

### Notifikasi gagal

Jika data sudah tersimpan tetapi email gagal:

- Permintaan tetap tercatat.
- Sales dapat menemukan lead.
- Kegagalan notifikasi dicatat.
- Retry terkontrol tersedia.
- Tidak membuat lead baru pada retry.

---

## 17. Requirement WhatsApp dan tracking lead

### WhatsApp

- Nomor tampilan: **088989643555**.
- Nomor internasional untuk tautan: **6288989643555**.
- URL dasar: `https://wa.me/6288989643555`.
- Seluruh CTA konversi menggunakan URL tersebut atau URL yang sama dengan parameter `text`.
- Nomor berasal dari konfigurasi terpusat.
- Format tautan sesuai nomor internasional.
- Pesan awal membawa konteks layanan, produk, atau judul artikel jika tersedia.
- Parameter `text` dihasilkan dengan `encodeURIComponent`; jangan memasukkan nama, nomor, email pengguna, atau isi formulir ke analytics.
- Tautan berfungsi tanpa JavaScript; tracking tidak menunda atau memblokir pembukaan WhatsApp.
- Email kontak bersifat tambahan dengan tautan `mailto:` setelah alamat dikonfirmasi; jangan menebak alamat email.
- Klik WhatsApp tidak membuktikan pesan dikirim, percakapan diterima, atau lead terqualified.
- Tombol mempunyai label jelas.
- Ikon dekoratif tidak dibaca sebagai label ganda.
- Tidak memakai widget chat berat pada tahap awal.

### Tracking

| Event | Pemicu |
|---|---|
| `click_consultation` | Label lama; tidak dipakai sebagai konversi kedua untuk klik WhatsApp yang sama |
| `click_whatsapp` | Satu event per klik CTA WhatsApp; catat `page_type`, `page_path`, `cta_position`, dan `content_id` tanpa data pribadi |
| `form_start` | Pengguna mulai mengisi |
| `form_submit_success` | Backend mengonfirmasi data tersimpan |
| `download_brief` | Aset diunduh |

`click_whatsapp` dilaporkan sebagai intent konsultasi. Lead masuk dan lead qualified dicatat sales/CRM dari percakapan nyata. `form_start` dan `form_submit_success` hanya diaktifkan jika formulir backend tersedia. Satu klik atau pengiriman tidak boleh menjadi dua konversi.

### Pencatatan lead

- ID.
- Waktu.
- Kanal.
- Kategori.
- Tahap bisnis.
- Status.
- Pemilik tindak lanjut.
- Sumber yang diketahui.
- Tingkat kepastian sumber.
- Alasan sesuai/tidak sesuai.
- Penawaran.
- Hasil proyek.

Nama, nomor telepon, email, dan isi kebutuhan tidak dikirim ke analytics.

---

## 18. Requirement SEO

| ID | Requirement | Kriteria penerimaan |
|---|---|---|
| SEO-01 | Title sesuai halaman | Seluruh halaman publik memiliki title relevan |
| SEO-02 | Deskripsi | Tidak memakai deskripsi generik yang sama |
| SEO-03 | H1 | Menjelaskan tujuan halaman |
| SEO-04 | Canonical | Mengarah ke URL produksi yang benar |
| SEO-05 | HTML | Isi utama tersedia pada hasil build |
| SEO-06 | Internal link | Tidak ada halaman penting yatim |
| SEO-07 | Breadcrumb | Sesuai hierarki |
| SEO-08 | Sitemap | Hanya URL utama yang layak diindeks |
| SEO-09 | Robots | Tidak memblokir aset atau halaman penting tanpa alasan |
| SEO-10 | Status HTTP | Halaman hilang benar-benar 404 |
| SEO-11 | Redirect | Tujuan relevan, tidak berulang |
| SEO-12 | Gambar | Alt sesuai fungsi |
| SEO-13 | Social preview | Open Graph dan gambar tersedia |
| SEO-14 | Search Console | Properti domain terverifikasi |
| SEO-15 | Preview | Tidak diindeks sebagai produksi |

### Keputusan indexing

| Jenis | Keputusan |
|---|---|
| Homepage, induk Layanan/Produk/Blog, detail layanan/produk, dan artikel lengkap | Indexable |
| Panduan yang sudah ditinjau | Indexable |
| Terima kasih | `noindex` |
| Hasil pencarian internal | `noindex` |
| Draft/preview | Akses terbatas dan `noindex` |
| API | Tidak menjadi halaman pencarian |
| 404 | Status 404 |
| Halaman kosong | Tidak diterbitkan |

`robots.txt` bukan mekanisme perlindungan data dan tidak menggantikan autentikasi.

---

## 19. Requirement AEO dan GEO

### AEO

| ID | Requirement |
|---|---|
| AEO-01 | Pertanyaan penting dijawab pada halaman yang tepat |
| AEO-02 | Jawaban menyebut kondisi |
| AEO-03 | Tabel memiliki header dan konteks |
| AEO-04 | Istilah teknis dijelaskan |
| AEO-05 | FAQ tersedia dalam HTML |
| AEO-06 | FAQ dapat diakses tanpa kegagalan JavaScript |
| AEO-07 | Jawaban mengikuti fakta operasional |
| AEO-08 | Tidak membuat halaman untuk setiap variasi pertanyaan |

FAQ membantu pembaca; pekerjaan ini tidak menggunakan FAQ rich result sebagai target.

### GEO

| ID | Requirement |
|---|---|
| GEO-01 | Identitas merek konsisten |
| GEO-02 | Badan usaha dan pelaksana jelas |
| GEO-03 | Kemampuan mempunyai bukti |
| GEO-04 | Sumber dan reviewer tersedia ketika relevan |
| GEO-05 | Halaman dapat dipahami secara mandiri |
| GEO-06 | Konten memuat informasi asli perusahaan |
| GEO-07 | Pengamatan AI dicatat sebagai sampel |
| GEO-08 | Penyebutan, kutipan, referral, dan lead dipisahkan |

Google menyatakan bahwa fondasi SEO tetap relevan untuk fitur generatif, tanpa kewajiban schema khusus atau file `llms.txt`. Persyaratan platform lain harus diperiksa tersendiri. [Rujukan 7](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

### Structured data

- `Organization`.
- `WebSite`.
- `BreadcrumbList`.
- `Article`/`BlogPosting`.
- `Person` jika profil nyata.
- `Service` jika sesuai isi.

Markup harus cocok dengan informasi terlihat. Jangan membuat rating, profil, atau kemampuan fiktif.

---

## 20. Target PageSpeed dan GTmetrix

Target berikut merupakan **kriteria proyek**, bukan jaminan skor tetap pada setiap pengujian.

### Lighthouse/PageSpeed Insights

| Metrik | Target penerimaan | Target optimasi |
|---|---|---|
| Performance mobile | ≥ 90 | ≥ 95 |
| Performance desktop | ≥ 95 | Mendekati 100 |
| Accessibility | ≥ 95 | 100 untuk audit otomatis yang relevan |
| Best Practices | ≥ 95 | 100 |
| SEO | ≥ 95 | 100 |

Skor accessibility tinggi tetap membutuhkan pemeriksaan manual. Skor SEO tinggi tidak membuktikan peringkat pencarian.

### GTmetrix

| Metrik | Target |
|---|---|
| Grade | A |
| Performance | ≥ 90 |
| Structure | ≥ 95 |
| LCP laboratorium | ≤ 2,5 detik |
| CLS laboratorium | ≤ 0,1 |
| TBT laboratorium | ≤ 200 ms |

GTmetrix memisahkan Performance dan Structure. Keduanya dinilai serta dilaporkan, bukan hanya huruf grade. [Rujukan 8](https://gtmetrix.com/blog/welcome-to-the-new-gtmetrix-powered-by-lighthouse/)

### Data lapangan

Target Core Web Vitals:

- LCP ≤ 2,5 detik.
- INP ≤ 200 ms.
- CLS ≤ 0,1.
- Penilaian persentil ke-75.
- Mobile dan desktop diperiksa terpisah.

TBT laboratorium tidak menggantikan INP lapangan. Website baru yang belum memiliki sampel cukup tidak dinyatakan gagal hanya karena data lapangan belum tersedia.

---

## 21. Performance budget

Budget berikut diterapkan pada template inti dan diperiksa pada kondisi produksi.

| Komponen | Budget awal |
|---|---|
| Transfer awal homepage | ≤ 1 MB |
| Transfer awal halaman layanan | ≤ 1 MB |
| Transfer awal artikel | ≤ 750 KB |
| CSS first-party terkompresi | ≤ 60 KB |
| JavaScript first-party terkompresi | ≤ 60 KB |
| Gambar hero mobile terpilih | ≤ 150 KB |
| Gambar hero desktop terpilih | ≤ 250 KB |
| Request sebelum interaksi | Target ≤ 30 |
| TTFB laboratorium | Target ≤ 800 ms pada lokasi uji yang ditetapkan |

Budget first-party dan total dilaporkan terpisah. Script pihak ketiga tetap masuk penilaian total pengalaman pengguna.

### Gambar

- Gunakan AVIF/WebP dengan fallback yang diperlukan.
- `srcset` dan `sizes`.
- Lebar serta tinggi eksplisit.
- Hero tidak lazy-load.
- Gambar di bawah fold lazy-load.
- Jangan memuat foto resolusi penuh untuk thumbnail.
- Dokumentasi video dimuat setelah interaksi atau saat dibutuhkan.

### CSS/JavaScript

- Bootstrap yang diperlukan saja.
- Hindari dua library untuk fungsi sama.
- Tidak memasang slider hanya untuk estetika.
- Tidak menggunakan icon font besar untuk beberapa ikon.
- Gunakan SVG yang sesuai.
- Hindari long task.
- Hindari listener scroll berat.
- Jangan menambahkan preloading untuk seluruh aset.

### Integrasi eksternal

- Analytics diuji dalam konfigurasi final.
- Peta menggunakan tautan atau pemuatan setelah interaksi.
- Video menggunakan poster dan pemuatan sesuai kebutuhan.
- Turnstile dimuat pada halaman/formulir yang membutuhkan.
- Tidak menunda konten atau analytics secara tidak wajar hanya untuk menaikkan skor.

---

## 22. Protokol pengujian performa

### Halaman yang diuji

1. Homepage.
2. Induk Layanan dan satu detail layanan.
3. Induk Produk dan minimal dua detail produk.
4. Induk Blog dan satu artikel.
5. Biaya.
6. MOQ.
7. Proses.
8. Kontak dan halaman persiapan konsultasi.

### Prosedur

- Gunakan domain produksi atau preview dengan konfigurasi setara.
- Analytics dan integrasi final aktif.
- Jalankan minimal tiga pengujian sebanding.
- Gunakan median.
- Simpan laporan, waktu, URL, commit, dan konfigurasi.
- Pisahkan hasil mobile dan desktop.
- Catat lokasi GTmetrix, browser, perangkat, dan koneksi.
- Gunakan lokasi yang relevan terhadap pengguna Indonesia jika tersedia.
- Jangan membandingkan skor lintas konfigurasi sebagai hasil setara.

### Regresi

Penurunan Performance lebih dari lima poin dari baseline memicu pemeriksaan. Pelanggaran budget atau kegagalan fungsi harus diperbaiki sebelum release.

---

## 23. Cloudflare, custom domain, dan caching

### Domain

- Domain apex menjadi canonical.
- `www` diarahkan permanen ke apex.
- HTTP diarahkan ke HTTPS.
- Path dan query yang diperlukan dipertahankan.
- Domain didaftarkan melalui fitur Custom Domains pada project.
- HTTPS diverifikasi.
- DNS lama yang berkonflik ditangani.

Cloudflare mendokumentasikan kebutuhan nameserver Cloudflare untuk custom apex domain pada Pages. [Rujukan 9](https://developers.cloudflare.com/pages/configuration/custom-domains/)

### Domain bawaan dan preview

- Host produksi `pages.dev` tidak menjadi canonical kedua.
- Aturan redirect produksi tidak diterapkan secara membabi buta pada semua preview.
- Preview dibatasi untuk kebutuhan review.
- Pastikan `noindex` benar-benar hadir.
- Jangan membawa `noindex` preview ke produksi.

Preview Cloudflare Pages secara default memiliki header `X-Robots-Tag: noindex`, tetapi konfigurasi aktual tetap harus diuji. [Rujukan 10](https://developers.cloudflare.com/pages/configuration/preview-deployments/)

### Caching

- Gunakan default Pages sebagai dasar.
- Jangan memasang “cache everything” untuk seluruh situs.
- Aset dengan hash boleh memakai browser cache panjang dan `immutable`.
- HTML harus dapat diperbarui saat deploy.
- Respons API formulir memakai `no-store`.
- Data pengguna tidak masuk cache publik.
- Redirect dan Functions diperiksa setelah perubahan cache.

Cloudflare memperingatkan bahwa custom caching yang tidak tepat dapat menghasilkan aset usang serta mengganggu redirect dan Functions. [Rujukan 4](https://developers.cloudflare.com/pages/configuration/serving-pages/)

---

## 24. Keamanan dan privasi

| ID | Requirement |
|---|---|
| SEC-01 | Secret tidak berada pada repository atau JavaScript browser |
| SEC-02 | Secret produksi dan preview dipisahkan |
| SEC-03 | Backend memvalidasi input |
| SEC-04 | Data lead tidak disimpan pada file publik |
| SEC-05 | Respons lead tidak memantulkan data pribadi yang tidak diperlukan |
| SEC-06 | Log tidak merekam payload pribadi secara penuh |
| SEC-07 | Akses data dibatasi sesuai peran |
| SEC-08 | Dependency dipin dan diperiksa |
| SEC-09 | Backup serta pemulihan diuji |
| SEC-10 | Kebijakan retensi dan penghapusan ditetapkan sebelum peluncuran |

### Header keamanan

Konfigurasi mencakup:

- `Content-Security-Policy`.
- `X-Content-Type-Options`.
- `Referrer-Policy`.
- `Permissions-Policy`.
- Perlindungan framing.
- HSTS setelah domain dan HTTPS stabil.

CSP dimulai dalam mode pemeriksaan bila diperlukan, lalu diberlakukan setelah Bootstrap, analytics, Turnstile, formulir, dan JSON-LD teruji.

Header dari `_headers` berlaku untuk aset statis sesuai mekanisme Pages. Respons Functions perlu menetapkan header yang diperlukan melalui kode backend.

---

## 25. Aksesibilitas dan responsive

### Target proyek

WCAG 2.2 AA digunakan sebagai acuan pemeriksaan.

### Penerimaan

- Kontras teks normal minimal 4,5:1.
- Fokus terlihat.
- Semua fungsi utama dapat digunakan dengan keyboard.
- Skip link tersedia.
- Landmark HTML jelas.
- Heading berurutan.
- Formulir memiliki label serta error aksesibel.
- Pesan sukses diumumkan kepada teknologi bantu.
- FAQ memiliki status terbuka/tertutup.
- Zoom 200% tidak menghilangkan fungsi.
- Tidak ada scroll horizontal seluruh halaman pada lebar 320 px.
- Tabel mempunyai area scroll lokal jika diperlukan.
- Target sentuh utama ditargetkan sekitar 44 × 44 px.
- Animasi menghormati `prefers-reduced-motion`.

### Matriks perangkat

- Chrome Android.
- Safari iOS.
- Chrome desktop.
- Firefox desktop.
- Safari desktop jika tersedia pada cakupan QA.

---

## 26. Build, repository, dan deployment

### Struktur proyek

| Lokasi | Isi |
|---|---|
| `src/pages/` | Halaman sumber |
| `src/partials/` | Header, footer, komponen |
| `src/content/` | Panduan dan konten terstruktur |
| `src/data/` | Identitas, navigasi, metadata |
| `src/styles/` | Sass dan CSS |
| `src/scripts/` | JavaScript browser |
| `src/assets/` | Gambar dan ikon |
| `functions/` | Backend konsultasi opsional jika formulir diaktifkan |
| `scripts/` | Build dan validasi |
| `dist/` | Output statis |
| `tests/` | Pengujian yang diperlukan |
| `docs/` | Handover dan register keputusan |

### Alur perubahan

1. Branch pekerjaan.
2. Implementasi.
3. Pemeriksaan otomatis.
4. Pull request.
5. Preview.
6. Review konten dan fungsi.
7. Merge ke branch produksi.
8. Deployment.
9. Smoke test.
10. Catatan release.

### Pemeriksaan otomatis

- Build.
- Link internal.
- URL sitemap.
- Metadata wajib.
- Placeholder.
- File gambar yang hilang.
- JSON-LD valid secara sintaks.
- Budget aset.
- Fungsi formulir jika diaktifkan; seluruh CTA WhatsApp selalu diuji.
- Pemeriksaan aksesibilitas otomatis.
- Lighthouse pada template representatif.

### Rollback

- Simpan deployment terakhir yang lulus.
- Tetapkan pemilik rollback.
- Dokumentasikan kondisi pemicu.
- Rollback frontend tidak dianggap memulihkan database.
- Migrasi data memiliki prosedur tersendiri.

---

## 27. Roadmap implementasi

| Fase | Periode | Output |
|---|---|---|
| Fakta dan keputusan | Hari 1–7 | Identitas, model bisnis, layanan, arsitektur |
| Arsitektur dan brief | Hari 8–14 | URL, navigasi, requirement halaman |
| Desain dan bahan | Hari 15–21 | Wireframe, sistem hijau, dokumentasi |
| Template dan konversi | Hari 22–30 | Build, Bootstrap, konfigurasi WhatsApp; backend dan storage jika diaktifkan |
| Halaman inti | Hari 31–40 | Homepage, induk Layanan/Produk/Blog, detail layanan/produk, artikel awal, proses |
| Kelengkapan | Hari 41–50 | Biaya, MOQ, perusahaan, kontak, legal |
| QA dan peluncuran | Hari 51–60 | Website teruji pada custom domain |
| Pengamatan | Hari 61–90 | Perbaikan, blog awal, baseline |
| Penguatan | Bulan 4–6 | Bukti, konten, kategori terpilih |
| Perluasan | Bulan 7–9 | Kategori berdasarkan kebutuhan |
| Konsolidasi | Bulan 10–12 | Pembaruan dan keputusan siklus berikutnya |

Hari pertama dimulai ketika akses, pemilik pekerjaan, dan kapasitas tersedia.

---

## 28. Pembagian tanggung jawab

| Peran | Tanggung jawab |
|---|---|
| Pemilik bisnis | Identitas, layanan, keputusan, persetujuan fakta |
| Operasional | Kemampuan, MOQ, proses, dokumentasi |
| Sales | Pertanyaan pelanggan, formulir, kualifikasi, tindak lanjut |
| SEO/content | Intent, metadata, konten, internal link |
| Desainer | Wireframe, sistem hijau, responsive |
| Developer | Bootstrap, build, backend, deployment |
| QA | Fungsi, mobile, aksesibilitas, performa |
| Analytics | Event, rekonsiliasi, dashboard |
| Reviewer terkait | Klaim teknis dan informasi yang memerlukan kompetensi khusus |

Satu orang dapat menjalankan beberapa peran. Tanggung jawab tetap harus tercatat.

---

## 29. Data yang harus tersedia sebelum finalisasi

| Data | Dampak |
|---|---|
| Nama badan usaha | Halaman perusahaan dan identitas |
| Model kepemilikan fasilitas | Redaksi kemampuan |
| Daftar layanan | Halaman layanan |
| Dua kategori prioritas | Cakupan peluncuran |
| Ketentuan MOQ | Halaman kelayakan |
| Faktor biaya | Halaman penawaran |
| Ketentuan sampling | Proses |
| Kontak resmi | Formulir dan WhatsApp |
| Alamat dan jam layanan | Kontak |
| Foto serta hak penggunaan | Bukti visual |
| Studi kasus dan izin | Halaman proyek |
| Pemilik data lead | Backend dan CRM |
| Retensi data | Privasi dan pengelolaan lead |
| Penyedia email | Hanya untuk notifikasi jika formulir backend diaktifkan |
| Data audit kompetitor | Prioritas keyword dan peluang |

Informasi yang belum tersedia menjadi dependensi pekerjaan. Placeholder boleh berada di draft internal, tetapi tidak pada website produksi.

---

## 30. Matriks penerimaan akhir

| Area | Syarat lulus |
|---|---|
| Bisnis | Cakupan sesuai kemampuan |
| Konten | Fakta disetujui, tidak ada placeholder |
| Struktur | URL dan navigasi konsisten |
| Identitas | Merek, badan usaha, fasilitas jelas |
| Formulir tambahan | Jika diaktifkan: data tersimpan dan mempunyai ID; bukan syarat peluncuran WhatsApp saja |
| Notifikasi | Jika backend diaktifkan: terkirim atau kegagalannya dapat ditangani |
| WhatsApp | Semua CTA konversi langsung menuju 6288989643555, konteks benar, tanpa gate formulir |
| SEO | Metadata, canonical, sitemap, status benar |
| AEO | Pertanyaan utama terjawab dengan kondisi |
| GEO | Identitas serta bukti konsisten |
| Performa | Target pengujian dipenuhi atau temuan diselesaikan |
| Mobile | Jalur utama dapat digunakan |
| Aksesibilitas | Audit otomatis dan pemeriksaan manual selesai |
| Keamanan | Secret, akses, header, dan backend diperiksa |
| Deployment | Domain, HTTPS, preview, dan rollback teruji |
| Pengukuran | Event tidak ganda dan tidak membawa data pribadi |

---

## 31. Deliverable dan handover

Tim pengembang harus menyerahkan:

1. Repository lengkap milik bisnis.
2. Kode sumber dan output HTML.
3. Lockfile dan instruksi build.
4. Sistem desain hijau.
5. Template halaman.
6. Seluruh halaman dalam cakupan peluncuran.
7. Konfigurasi terpusat WhatsApp dan semua CTA; backend formulir jika diaktifkan.
8. Panduan pencatatan lead WhatsApp; penyimpanan serta alur notifikasi jika backend diaktifkan.
9. Konfigurasi Cloudflare Pages.
10. Konfigurasi custom domain.
11. Metadata dan peta URL.
12. Sitemap serta robots.
13. Structured data.
14. Tracking plan.
15. Laporan PageSpeed dan GTmetrix.
16. Laporan fungsi, mobile, dan aksesibilitas.
17. Panduan pembaruan konten.
18. Panduan deployment dan rollback.
19. Panduan pengelolaan lead.
20. Register masalah yang masih terbuka.

Akun GitHub, Cloudflare, analytics, domain, dan layanan notifikasi menggunakan kepemilikan perusahaan.

---

## 32. Checklist kelulusan proyek

- [ ] Arsitektur hosting ditetapkan.
- [ ] Repository dimiliki bisnis.
- [ ] Model bisnis dan hubungan fasilitas disetujui.
- [ ] Dua kategori awal terkonfirmasi.
- [ ] Palet hijau dan kontras diperiksa.
- [ ] Bootstrap dipin dan aset diminifikasi.
- [ ] Konten utama tersedia dalam HTML.
- [ ] Semua halaman inti selesai.
- [ ] Tidak ada klaim tanpa bukti.
- [ ] Tidak ada placeholder produksi.
- [ ] Navigasi desktop dan mobile berfungsi.
- [ ] Jika formulir backend diaktifkan: formulir berhasil menyimpan data.
- [ ] Jika formulir backend diaktifkan: retry tidak membuat lead ganda.
- [ ] Jika formulir backend diaktifkan: antispam divalidasi server.
- [ ] Jika formulir backend diaktifkan: notifikasi dan penanganan kegagalan teruji.
- [ ] Seluruh CTA konversi menuju `https://wa.me/6288989643555` dengan pesan sesuai konteks.
- [ ] Induk Layanan, Produk, dan Blog tersedia.
- [ ] Detail layanan berada di `/layanan/{slug}/`.
- [ ] Detail produk berada di `/produk/{slug}/`.
- [ ] Artikel berada di `/blog/{slug}/`.
- [ ] Email hanya tampil jika alamat resmi sudah dikonfirmasi.
- [ ] Redirect URL lama diuji jika pernah dipublikasikan.
- [ ] Analytics tidak membawa data pribadi.
- [ ] Canonical memakai domain produksi.
- [ ] Sitemap hanya memuat URL yang tepat.
- [ ] Halaman hilang mengembalikan 404.
- [ ] Preview tidak menjadi halaman pencarian.
- [ ] Domain alternatif diarahkan konsisten.
- [ ] HTTPS berfungsi.
- [ ] PageSpeed memenuhi target.
- [ ] GTmetrix memenuhi target.
- [ ] Performance budget diperiksa.
- [ ] Integrasi produksi aktif saat pengujian.
- [ ] Keyboard, zoom, dan aksesibilitas diperiksa.
- [ ] Backup dan rollback teruji.
- [ ] Seluruh akses dan panduan diserahkan.
- [ ] Pemilik pemeliharaan ditetapkan.

**Website dinyatakan selesai setelah informasi, fungsi, pengukuran, performa, dan deployment lulus pemeriksaan. Peringkat pencarian, jumlah lead, dan kutipan AI dievaluasi setelah peluncuran melalui roadmap yang berkelanjutan.**


---

## 33. Requirement halaman Produk

### Induk Produk `/produk/`

| ID | Requirement | Penerimaan |
|---|---|---|
| PROD-01 | H1 dan pembuka katalog | Menjelaskan produk/konsep produk yang dapat dibahas untuk maklon |
| PROD-02 | Kartu produk | Nama, foto relevan, kategori, ringkasan, dan tautan detail |
| PROD-03 | Filter ringan | Filter berdasarkan kategori terkonfirmasi; semua produk tetap tersedia dalam HTML |
| PROD-04 | Ketersediaan jujur | Tidak mengartikan contoh konsep sebagai barang stok atau formula siap produksi |
| PROD-05 | Navigasi detail | Skincare A menuju `/produk/skincare-a/`, Skincare B menuju `/produk/skincare-b/`, Serum A menuju `/produk/serum-a/` |
| PROD-06 | CTA WhatsApp | Konsultasi produk langsung menuju nomor resmi |

### Detail Produk `/produk/{slug}/`

Wajib memuat breadcrumb `Homepage → Produk → Nama Produk`, H1 nama produk, ringkasan jawaban, foto dengan alt dan dimensi eksplisit, kategori, deskripsi, spesifikasi terverifikasi, opsi pengembangan, kemasan, ketentuan MOQ yang diketahui, faktor biaya, proses sampling, informasi yang perlu dikonfirmasi, FAQ produk, layanan terkait, produk terkait, serta CTA WhatsApp berkonteks nama produk.

| Informasi | Aturan publikasi |
|---|---|
| Nama dan kategori | Sesuai data pemilik bisnis |
| Formula, bahan, klaim manfaat | Hanya jika terverifikasi dan sesuai konteks; tidak mengarang klaim |
| Ukuran dan kemasan | Bedakan opsi konsep dengan opsi yang telah tersedia |
| MOQ dan harga | Jelaskan kondisi; gunakan “Konfirmasi melalui WhatsApp” jika belum ditetapkan |
| Foto | Foto asli atau visual yang dilabeli sebagai ilustrasi; jangan menampilkan ilustrasi sebagai dokumentasi produksi |
| Ketersediaan | Jelaskan apakah contoh konsep, opsi pengembangan, atau produk yang telah siap dibahas |
| Legalitas | Tidak menyatakan nomor notifikasi atau sertifikasi yang belum dibuktikan |

Halaman produk adalah katalog B2B untuk konsultasi maklon, tanpa checkout. Produk berbeda harus memiliki informasi berbeda yang membantu keputusan, bukan penggantian nama pada teks yang sama.

## 34. SEO, AEO, GEO dan struktur build untuk tiga folder

### Pemetaan template dan structured data

| Template | Breadcrumb | Structured data yang sesuai |
|---|---|---|
| Induk Layanan | Homepage → Layanan | `CollectionPage`, `BreadcrumbList`; daftar layanan sesuai isi |
| Detail Layanan | Homepage → Layanan → Nama Layanan | `Service`, `BreadcrumbList` dengan penyedia yang benar |
| Induk Produk | Homepage → Produk | `CollectionPage`, `ItemList`, `BreadcrumbList` sesuai daftar terlihat |
| Detail Produk | Homepage → Produk → Nama Produk | `Product` hanya jika memang merepresentasikan produk teridentifikasi; jika konsep gunakan `WebPage`; `BreadcrumbList` |
| Induk Blog | Homepage → Blog | `Blog` atau `CollectionPage`, `BreadcrumbList` |
| Artikel | Homepage → Blog → Judul Artikel | `BlogPosting`/`Article`, `BreadcrumbList`, penulis nyata |

Jangan mengarang `Offer`, harga, stok, rating, review, atau sertifikasi demi schema. Markup tidak menjamin rich result atau kutipan AI. Organization tetap konsisten untuk Maklon Kosmetik ID dan kontak resmi.

Setiap halaman memiliki title, meta description, canonical, H1, Open Graph, dan isi unik. Detail menautkan kembali ke induknya; artikel menautkan layanan dan produk relevan; produk menautkan layanan yang mendukungnya. Hindari target kata kunci yang sama tanpa membedakan intent halaman.

Untuk AEO, letakkan jawaban ringkas tentang layanan/produk atau pertanyaan artikel pada awal isi, lalu uraikan syarat, bukti, tabel, dan FAQ yang relevan. Untuk GEO, jaga konsistensi identitas, sumber, penulis/reviewer, fakta produk, dan tanggal pembaruan nyata. Semua isi tersedia sebagai HTML statis.

### Folder sumber dan output

| Jenis | Contoh sumber | Output build |
|---|---|---|
| Induk Layanan | `src/pages/layanan/index.html` | `dist/layanan/index.html` |
| Detail Layanan | `src/content/layanan/maklon-skincare.md` | `dist/layanan/maklon-skincare/index.html` |
| Induk Produk | `src/pages/produk/index.html` | `dist/produk/index.html` |
| Detail Produk | `src/content/produk/skincare-a.md` | `dist/produk/skincare-a/index.html` |
| Induk Blog | `src/pages/blog/index.html` | `dist/blog/index.html` |
| Artikel | `src/content/blog/persiapan-konsultasi-maklon.md` | `dist/blog/persiapan-konsultasi-maklon/index.html` |
| Konfigurasi kontak | `src/data/site.json` | Dipakai saat build untuk seluruh CTA, footer, dan schema |

Field konten tambahan: `content_type` (`layanan`, `produk`, `blog`), `category`, `parent_path`, `related_services`, `related_products`, `related_articles`, `whatsapp_context`. Build menolak slug ganda pada folder yang sama, URL di folder salah, tautan detail rusak, dan nomor CTA berbeda dari konfigurasi.

Listing dan filter tidak menambah library berat. Tetap gunakan budget performa bagian 20–22; uji ketiga induk, detail, artikel, dan CTA di perangkat mobile maupun desktop.

## 35. Spesifikasi CTA WhatsApp dan penerimaan update

### Konfigurasi tunggal

```json
{
  "brand": "Maklon Kosmetik ID",
  "domain": "https://maklonkosmetik.id",
  "whatsapp_display": "088989643555",
  "whatsapp_number": "6288989643555",
  "whatsapp_base_url": "https://wa.me/6288989643555",
  "contact_email": null
}
```

`contact_email: null` berarti email tidak ditampilkan. Isi setelah pemilik bisnis memberikan alamat resmi.

### Pesan awal per konteks

| Halaman | Label CTA | Contoh pesan awal |
|---|---|---|
| Homepage | Konsultasi via WhatsApp | Halo Maklon Kosmetik ID, saya ingin konsultasi maklon kosmetik/skincare untuk brand saya. |
| Induk Layanan | Tanya Layanan via WhatsApp | Halo Maklon Kosmetik ID, saya ingin mengetahui layanan maklon yang sesuai kebutuhan saya. |
| Detail layanan | Konsultasi Layanan Ini | Halo Maklon Kosmetik ID, saya ingin konsultasi layanan Maklon Skincare. |
| Induk Produk | Konsultasi Produk | Halo Maklon Kosmetik ID, saya ingin memilih produk untuk pengembangan brand saya. |
| Detail produk | Tanya Produk Ini | Halo Maklon Kosmetik ID, saya tertarik dengan Skincare A dan ingin membahas opsi maklonnya. |
| Blog/artikel | Diskusikan Kebutuhan Anda | Halo Maklon Kosmetik ID, saya membaca artikel Persiapan Konsultasi Maklon dan ingin membahas kebutuhan brand saya. |
| Biaya/MOQ | Minta Informasi via WhatsApp | Halo Maklon Kosmetik ID, saya ingin membahas biaya dan MOQ untuk proyek saya. |
| Header/footer/floating button | Hubungi via WhatsApp | Halo Maklon Kosmetik ID, saya ingin konsultasi kebutuhan maklon. |

Pesan detail dihasilkan dari nama layanan, nama produk, atau judul artikel aktual, bukan contoh tetap untuk seluruh halaman. Pengunjung tetap harus menekan Kirim di WhatsApp; website tidak menyatakan pesan otomatis terkirim.

Contoh tautan HTML dengan parameter teks yang telah di-encode:

```html
<a href="https://wa.me/6288989643555?text=Halo%20Maklon%20Kosmetik%20ID%2C%20saya%20ingin%20konsultasi%20maklon."
   class="btn btn-success"
   data-cta-position="hero"
   data-page-type="homepage">
  Konsultasi via WhatsApp
</a>
```

### Kriteria penerimaan tambahan

- [ ] `/layanan/`, `/produk/`, dan `/blog/` mempunyai isi dan navigasi yang berfungsi.
- [ ] Detail layanan, produk, dan artikel berada di folder masing-masing.
- [ ] URL tanpa trailing slash menuju canonical yang sama tanpa duplikasi indexing.
- [ ] Semua tombol konsultasi, penawaran, tanya produk, dan mulai proyek langsung menuju WhatsApp **088989643555**.
- [ ] CTA header, hero, kartu konversi, akhir halaman, footer, dan floating button memakai konfigurasi yang sama.
- [ ] Tautan navigasi dan “Lihat detail” menuju halaman internal yang benar.
- [ ] Pesan awal mencerminkan halaman aktual dan di-encode dengan benar.
- [ ] WhatsApp tetap terbuka ketika JavaScript tracking gagal atau dinonaktifkan.
- [ ] Klik CTA dihitung sekali sebagai intent; lead nyata dicatat terpisah.
- [ ] Produk contoh tidak dipublikasikan sebelum data dikonfirmasi.
- [ ] Email hanya tampil setelah alamat resmi tersedia.
- [ ] Backend formulir hanya menjadi syarat penerimaan jika fitur tersebut diaktifkan.

Update ini menggantikan struktur URL, tujuan CTA, dan prioritas formulir versi 1.0. Requirement desain hijau, HTML Bootstrap, deployment, kualitas konten, keamanan, aksesibilitas, SEO, AEO, GEO, dan budget performa tetap berlaku sesuai cakupan fitur yang aktif.

# Acuan Artikel — Maklon Kosmetik ID

**Versi:** 1.0  
**Tanggal:** 5 Oktober 2026  
**Domain:** https://maklonkosmetik.id  
**URL artikel:** `/blog/{slug}/`  
**Teknologi:** HTML statis, Bootstrap, CSS, JavaScript seperlunya  
**Brand:** hijau sesuai PRD  
**CTA bisnis:** WhatsApp 088989643555 — https://wa.me/6288989643555

Dokumen ini menjadi standar penulisan, desain, implementasi, dan pemeriksaan setiap artikel. Semua komponen wajib hadir pada HTML hasil build. Contoh judul, gambar, tanggal, penulis, dan URL dalam kode adalah data demonstrasi yang harus diganti dengan data nyata sebelum publikasi.

## 1. Struktur wajib halaman

| Urutan | Komponen | Ketentuan |
|---|---|---|
| 1 | Breadcrumb | Homepage → Blog → Judul artikel; item terakhir halaman aktif |
| 2 | Judul/H1 | Satu H1 utama, sesuai isi dan intent pencarian |
| 3 | Identitas singkat | Nama penulis, tanggal publikasi, tanggal pembaruan nyata; estimasi baca opsional |
| 4 | Gambar utama | Relevan, alt deskriptif, dimensi eksplisit, caption jika perlu |
| 5 | Table of Contents/TOC | Daftar anchor H2; H3 bila membantu; tersedia tanpa JavaScript |
| 6 | Ringkasan poin | Maksimal 7 poin; standar editorial 3–7 poin, menjawab inti isi |
| 7 | Isi artikel | H2/H3 logis, penjelasan aplikatif, bukti dan sumber relevan |
| 8 | Baca juga pertama | Sekitar 30% isi utama, setelah paragraf atau subsection selesai |
| 9 | Gambar pendukung | Minimal 1 gambar selain gambar utama; tambah jika membantu penjelasan |
| 10 | Baca juga kedua | Sekitar 60% isi utama, setelah paragraf atau subsection selesai |
| 11 | CTA | Minimal 1 section atau gambar CTA dengan tautan WhatsApp |
| 12 | FAQ | Pertanyaan dan jawaban khusus topik; standar editorial 3–6 pertanyaan |
| 13 | Quotes | Daftar quotes yang sesuai dari isi artikel, bisa ditempatkan di tengah artikel, misal kutipan penting yang sesuai dengan isi artikel |
| 14 | Profil penulis | Di bawah isi dan FAQ; identitas, foto, bio, kompetensi nyata, tautan profil |
| 15 | Share | Salin tautan, bagikan WhatsApp, bagikan Facebook |
| 16 | Artikel terkait | Tepat 3 artikel; masing-masing thumbnail, judul, deskripsi singkat, tombol Baca selengkapnya |

Profil penulis, share, dan artikel terkait terpisah secara visual. Artikel terkait berbeda dari blok Baca juga dalam isi. Tombol Baca selengkapnya dan Baca juga adalah navigasi internal; tombol konsultasi merupakan CTA konversi ke WhatsApp.

## 2. Brief sebelum menulis

| Field | Isi yang harus disiapkan |
|---|---|
| Tujuan pembaca | Keputusan atau pekerjaan yang ingin diselesaikan |
| Intent | Informasional, perbandingan, atau persiapan konsultasi |
| Keyword utama | Satu fokus yang relevan, bukan daftar kata untuk diulang |
| Keyword pendukung | Istilah terkait yang muncul secara alami |
| Pertanyaan utama | Pertanyaan yang dijawab artikel |
| Jawaban inti | Jawaban ringkas dengan syarat atau batasan |
| Pembeda isi | Contoh brief, pengalaman operasional, checklist, atau data asli terverifikasi |
| Sumber | Dokumentasi resmi dan sumber primer sesuai klaim |
| Produk/layanan terkait | URL nyata pada `/produk/` dan `/layanan/` |
| Baca juga | Minimal dua artikel relevan dan berbeda |
| Artikel terkait | Tiga artikel yang sudah diterbitkan, bukan URL dummy |
| Penulis/reviewer | Orang atau tim editorial nyata; reviewer sesuai kompetensi jika diperlukan |
| Gambar | Utama, minimal satu pendukung, thumbnail share; hak penggunaan jelas |
| CTA | Pesan awal WhatsApp sesuai topik |

Tidak menetapkan panjang artikel hanya untuk mengejar jumlah kata. Isi harus cukup untuk menjawab kebutuhan pembaca. Hindari mengarang MOQ, harga, durasi produksi, hasil uji, nomor BPOM, sertifikasi, atau klaim manfaat kosmetik. Bedakan data pasti, estimasi, contoh, dan hal yang perlu dikonfirmasi.

## 3. Breadcrumb, heading dan TOC

Breadcrumb memakai `<nav aria-label="Breadcrumb">` dan daftar urut. Homepage menautkan `/`, Blog menautkan `/blog/`, halaman aktif memakai `aria-current="page"`.

H1 berada di atas gambar utama. H2 membagi pembahasan; H3 menjadi subbagian H2. Jangan melompat tingkat hanya untuk ukuran huruf. Nama heading harus menjelaskan pembahasan, misalnya “Apa yang perlu disiapkan sebelum konsultasi maklon?”.

TOC dibuat saat build dari heading aktual, bukan dari judul yang tidak ada. Setiap anchor unik, stabil, dan dapat dibuka langsung. FAQ dan sumber boleh masuk TOC; CTA, profil penulis, share, dan artikel terkait tidak wajib masuk. Pada mobile TOC boleh collapsible, tetapi daftar tetap dapat diakses tanpa JavaScript, misalnya menggunakan `<details open>`.

```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Homepage</a></li>
    <li class="breadcrumb-item"><a href="/blog/">Blog</a></li>
    <li class="breadcrumb-item active" aria-current="page">Persiapan konsultasi maklon</li>
  </ol>
</nav>
<h1>Persiapan Konsultasi Maklon: Checklist untuk Pemilik Brand</h1>
<nav aria-label="Daftar isi artikel" class="article-toc">
  <h2>Daftar Isi</h2>
  <ol>
    <li><a href="#brief-produk">Siapkan brief produk</a></li>
    <li><a href="#biaya-dan-moq">Bahas biaya dan MOQ</a></li>
    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
  </ol>
</nav>
```

Gunakan `scroll-margin-top` pada heading jika header sticky. Fokus keyboard dan posisi anchor tidak boleh tertutup header. Terapkan `prefers-reduced-motion` jika memakai smooth scroll.

## 4. Ringkasan dan pola jawaban

Ringkasan setelah TOC wajib berupa `<ul>` dengan maksimal 7 `<li>`. Setiap poin menyampaikan satu temuan utama, bukan sekadar mengulang nama heading. Ringkasan harus sesuai isi, tanpa klaim baru.

Contoh enam poin:

- Tentukan kategori dan tujuan produk sebelum konsultasi.
- Siapkan gambaran pengguna dan positioning brand.
- Catat opsi kemasan serta volume yang ingin dibahas.
- Jelaskan target jumlah produksi dan jadwal sebagai kebutuhan awal.
- Minta penjelasan cakupan biaya dan syarat MOQ.
- Gunakan hasil konsultasi untuk menyusun langkah berikutnya.

Pada pembuka isi, berikan jawaban langsung 2–4 kalimat, lalu detail dan syarat. Angka ini merupakan standar editorial, bukan ketentuan mesin pencari. Untuk setiap pertanyaan penting gunakan pola: jawaban inti → kondisi → contoh atau langkah → sumber bila relevan.

## 5. Baca juga pada 30% dan 60%

Persentase dihitung berdasarkan jumlah kata isi utama dari awal pembahasan hingga sebelum FAQ. Abaikan breadcrumb, judul, TOC, ringkasan, caption gambar, teks CTA, blok Baca juga, FAQ, sumber, profil penulis, share, dan artikel terkait. Jangan menghitung persentase dari nomor baris file Markdown karena baris berubah akibat format.

Rumus: `posisi = kata kumulatif sebelum blok / total kata isi utama × 100%`.

| Blok | Target | Toleransi editorial | Aturan |
|---|---|---|---|
| Baca juga 1 | 30% | 25–35% | Setelah paragraf/subsection lengkap |
| Baca juga 2 | 60% | 55–65% | Setelah paragraf/subsection lengkap |
| Tambahan | Sesuai kebutuhan | Tidak mengganggu alur | Topik relevan, tujuan berbeda, tidak berulang |

Untuk 2.000 kata isi utama, target pertama sekitar kata ke-600 dan kedua sekitar kata ke-1.200. Pilih batas paragraf terdekat dalam toleransi. Jika struktur terlalu renggang, pecah penjelasan menjadi paragraf/subsection yang logis, bukan memotong kalimat atau tabel.

Standar artikel sangat panjang: di atas 2.500 kata isi utama, tambah satu Baca juga sekitar 80% jika tersedia tujuan relevan. Artikel di atas 4.000 kata dapat menambah blok pada bagian yang memerlukan bacaan lanjutan, tetapi tetap pertahankan blok wajib sekitar 30% dan 60%; tambahan jangan menumpuk pada posisi berdekatan. Gunakan tiga blok pada 30%, 60%, dan 80% jika sudah cukup. Semua ambang ini adalah aturan editorial proyek.

```html
<aside class="baca-juga" aria-label="Baca juga">
  <p><strong>Baca juga:</strong>
    <a href="/blog/cara-menyusun-brief-skincare/">Cara menyusun brief skincare sebelum konsultasi</a>
  </p>
</aside>
```

Gunakan anchor deskriptif. Jangan memakai tautan rusak, tautan ke artikel yang sama, atau daftar keyword. Posisi dihasilkan saat build atau ditandai editor setelah audit jumlah kata; tidak menyisipkan konten dengan script saat pengguna sudah membaca.

## 6. Gambar utama dan pendukung

| Jenis | Minimum | Implementasi |
|---|---|---|
| Gambar utama | 1 | Dekat H1; jika menjadi LCP, `loading="eager"`, `fetchpriority="high"` |
| Gambar pendukung | 1 | Setelah pembahasan yang dijelaskan; lazy-load jika di bawah fold |
| Gambar CTA | Opsional | Tambahan; tidak dihitung sebagai gambar pendukung editorial |
| Thumbnail artikel terkait | 3 | Satu untuk setiap kartu; lazy-load jika di bawah fold |
| Gambar share | 1 | JPEG/PNG 1200×630 sebagai standar proyek; URL HTTPS absolut |

Gambar pendukung dapat berupa contoh brief, tahapan proses, foto kemasan, atau ilustrasi konsep yang relevan. Jumlah bertambah jika memperjelas isi; jangan menambah gambar dekoratif hanya untuk memenuhi kuota.

Gunakan AVIF/WebP dengan fallback sesuai dukungan, `srcset`, `sizes`, dimensi `width`/`height`, serta alt deskriptif. Caption menjelaskan konteks/sumber. Dokumentasi asli dan ilustrasi harus dibedakan. Gambar dekoratif menggunakan `alt=""`. Foto penulis tidak memakai orang fiktif.

```html
<figure>
  <img src="/assets/images/blog/contoh-brief.webp"
       width="1000" height="667" loading="lazy" decoding="async"
       class="img-fluid" alt="Contoh kolom brief produk: kategori, kemasan, jumlah, dan target waktu">
  <figcaption>Ilustrasi format brief; isi disesuaikan dengan kebutuhan proyek.</figcaption>
</figure>
```

Standar budget artikel mengikuti PRD: transfer awal target ≤750 KB. Gambar utama mobile terpilih ≤150 KB; desktop ≤250 KB sebagai target proyek. Gambar share tidak dimuat sebagai gambar body tambahan jika tidak diperlukan. Jangan lazy-load gambar utama yang menjadi LCP.

## 7. CTA artikel

Minimal satu CTA setelah pembahasan utama dan sebelum FAQ. Artikel panjang dapat memakai CTA kedua di tengah setelah pembahasan keputusan, dengan jarak cukup dari blok Baca juga. CTA tidak menutupi konten atau mengganggu TOC.

| Elemen | Ketentuan |
|---|---|
| Judul | Sesuai kebutuhan pembaca, bukan janji hasil tanpa bukti |
| Penjelasan | Singkat, menjelaskan informasi yang dapat dibahas |
| Tombol | “Konsultasi via WhatsApp” atau label kontekstual |
| Tujuan | `https://wa.me/6288989643555?text={pesan-terencode}` |
| Pesan | Menyebut judul/topik artikel aktual |
| Tracking | Satu `click_whatsapp` per klik; bukan bukti pesan terkirim |
| Gambar CTA | Alt jelas, tautan aksesibel, dan tombol teks tersedia |

```html
<section class="article-cta p-4 rounded" aria-labelledby="cta-konsultasi">
  <h2 id="cta-konsultasi">Bahas persiapan proyek maklon Anda</h2>
  <p>Diskusikan kategori produk, kemasan, jumlah produksi, dan kebutuhan brand Anda.</p>
  <a class="btn btn-success"
     href="https://wa.me/6288989643555?text=Halo%20Maklon%20Kosmetik%20ID%2C%20saya%20membaca%20artikel%20persiapan%20konsultasi%20maklon%20dan%20ingin%20berdiskusi."
     data-cta-position="article-end" data-page-type="blog">
    Konsultasi via WhatsApp
  </a>
</section>
```

Seluruh CTA konversi memakai nomor resmi. Share WhatsApp berbeda: mengirim judul dan URL artikel ke kontak yang dipilih pembaca, bukan mengarahkan ke nomor bisnis.

## 8. FAQ

Gunakan 3–6 pertanyaan khusus topik sebagai standar proyek. Jawaban harus langsung, cukup jelas, dan sesuai informasi operasional. Jangan memakai FAQ generik yang sama untuk semua artikel.

FAQ tersedia dalam HTML. Gunakan heading/paragraph atau `<details><summary>` yang dapat dipakai dengan keyboard. Jika memakai accordion Bootstrap, teks jawaban tetap ada pada HTML dan harus terbaca ketika JavaScript gagal.

FAQ konten wajib; `FAQPage` JSON-LD opsional, bukan syarat kelulusan. Artikel memakai `BlogPosting` sebagai schema utama. Bila menambahkan `FAQPage`, pertanyaan dan jawaban harus persis sesuai FAQ yang terlihat, tanpa promosi terselubung atau data fiktif. Jangan menargetkan FAQ rich result sebagai KPI website ini; dokumentasi Google sebelumnya membatasi fitur tersebut, dan URL panduan FAQ saat pemeriksaan mengarah ke halaman pembaruan dokumentasi. Periksa dukungan terkini ketika implementasi. [Sumber FAQ historis](https://developers.google.com/search/blog/2023/08/howto-faq-changes), [Pembaruan Google](https://developers.google.com/search/updates).

## 9. Profil penulis dan sumber

Profil penulis berada di bagian bawah artikel, setelah FAQ/sumber. Minimal berisi nama, foto jika tersedia, bio singkat, peran/kompetensi yang dapat dibuktikan, dan tautan profil publik. Profil internal dapat memakai `/penulis/{slug}/` sebagai halaman pendukung baru; implementasikan halaman nyata sebelum menautkannya. Ini tidak mengubah struktur URL artikel `/blog/{slug}/`.

Jika artikel ditulis tim editorial, tampilkan nama tim yang nyata dan jelaskan tanggung jawabnya; gunakan `Organization` untuk author tersebut, bukan Person fiktif. Reviewer ditampilkan jika benar-benar memeriksa artikel. Jangan memberi gelar atau jabatan yang belum diverifikasi.

Sumber harus mendukung klaim yang berada di dekatnya. Untuk regulasi kosmetik gunakan sumber resmi dan periksa versi/tanggal berlaku. Untuk data internal, jelaskan cakupan, periode, dan metode. Jangan mengutip penelitian sebagai bukti hasil produk yang belum diuji.

## 10. Share link, WhatsApp dan Facebook

| Kontrol | Perilaku |
|---|---|
| Salin tautan | Menyalin canonical; tampilkan status “Tautan disalin” hanya setelah sukses |
| Share WhatsApp | `https://wa.me/?text={encodeURIComponent(judul + " " + canonical)}` |
| Share Facebook | `https://www.facebook.com/sharer/sharer.php?u={encodeURIComponent(canonical)}` |

Gunakan canonical tanpa UTM/hash untuk share. Jika Clipboard API tidak tersedia/gagal, tampilkan input readonly berisi URL dan instruksi menyalin manual. Status memakai `aria-live="polite"`. Link WhatsApp/Facebook dihasilkan saat build agar berfungsi tanpa JavaScript. Jika membuka tab baru, tambahkan `rel="noopener"` dan beri nama aksesibel yang menjelaskan perilakunya.

Tidak perlu SDK share sosial berat. Facebook menentukan tampilan dialog/preview; uji URL aktual dan Open Graph saat peluncuran. Ikon dekoratif memakai `aria-hidden="true"`; teks tombol tetap tersedia.

## 11. Artikel terkait: tepat tiga kartu

Setiap kartu wajib mempunyai thumbnail, judul, deskripsi singkat 1–2 kalimat, serta tombol **Baca selengkapnya**. Gunakan tiga artikel berbeda, relevan, sudah terbit, dan bukan artikel yang sedang dibaca. Prioritaskan tujuan yang berbeda dari Baca juga agar penjelajahan tidak berulang.

Layout Bootstrap: tiga kolom desktop, satu kolom mobile; dua kolom tablet boleh digunakan. Thumbnail mempunyai rasio konsisten, `width`/`height`, alt relevan, dan lazy loading. Nama aksesibel tombol membedakan artikel, misalnya “Baca selengkapnya: Cara menyusun brief skincare”. Jangan membuat kartu yang mengandung anchor bersarang.

Jika baru tersedia kurang dari tiga artikel pendukung, siapkan dan terbitkan artikel pendukung yang bermutu sebelum halaman dinyatakan memenuhi standar ini. Jangan membuat kartu dummy, menggandakan artikel, atau menautkan ke 404.

## 12. SEO dan metadata wajib

| Field | Standar proyek |
|---|---|
| Meta Title | Maksimal 65 karakter termasuk spasi dan suffix brand; unik dan sesuai isi |
| Meta Description | Maksimal 165 karakter termasuk spasi; ringkasan manfaat informasi yang akurat |
| Meta Keyword | Daftar istilah relevan sebagai metadata/editorial; tanpa keyword stuffing |
| Canonical | URL absolut HTTPS, self-canonical `/blog/{slug}/`, tanpa parameter atau fragment |
| Robots | Artikel publik: dapat diindeks; preview/draft dibatasi dan noindex |
| Bahasa | `<html lang="id">` untuk aksesibilitas dan penanda bahasa dokumen |
| Slug | Pendek, deskriptif, huruf kecil, tanda hubung, stabil |

Batas 65/165 adalah ketentuan proyek, bukan jaminan panjang tampilan Google; hasil pencarian dapat menulis ulang judul/snippet. Meta keyword tetap disertakan sesuai permintaan, tetapi Google menyatakan tag tersebut tidak memengaruhi indexing atau ranking. [Dokumentasi metadata Google](https://developers.google.com/search/docs/crawling-indexing/special-tags).

Hitung karakter dari teks final sebelum HTML escaping. Jangan menghitung `&amp;` sebagai lima karakter jika teks yang ditampilkan adalah `&`. Validasi ketika build; judul/deskripsi berlebih harus dikembalikan ke editor, bukan dipotong otomatis di tengah kata.

### Contoh head: SEO, Open Graph dan social card

Contoh ini lengkap untuk artikel teks dengan gambar. Video/audio dan bahasa alternatif hanya ditambahkan jika benar-benar tersedia; tidak perlu tag kosong atau data rekaan.

```html
<!doctype html>
<html lang="id" prefix="og: https://ogp.me/ns# article: https://ogp.me/ns/article#">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Persiapan Konsultasi Maklon | Maklon Kosmetik ID</title>
  <meta name="description" content="Pelajari persiapan konsultasi maklon: brief produk, kemasan, biaya, MOQ, dan pertanyaan yang perlu dibahas sebelum memulai proyek brand Anda.">
  <meta name="keywords" content="persiapan konsultasi maklon, brief skincare, maklon kosmetik, MOQ maklon">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="https://maklonkosmetik.id/blog/persiapan-konsultasi-maklon/">

  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Maklon Kosmetik ID">
  <meta property="og:locale" content="id_ID">
  <meta property="og:title" content="Persiapan Konsultasi Maklon | Maklon Kosmetik ID">
  <meta property="og:description" content="Siapkan brief produk, kemasan, dan pertanyaan biaya serta MOQ sebelum konsultasi proyek maklon Anda.">
  <meta property="og:url" content="https://maklonkosmetik.id/blog/persiapan-konsultasi-maklon/">
  <meta property="og:image" content="https://maklonkosmetik.id/assets/images/blog/persiapan-konsultasi-share.jpg">
  <meta property="og:image:secure_url" content="https://maklonkosmetik.id/assets/images/blog/persiapan-konsultasi-share.jpg">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Ilustrasi brief dan persiapan konsultasi maklon kosmetik">
  <meta property="article:published_time" content="2026-10-05T08:00:00+07:00">
  <meta property="article:modified_time" content="2026-10-05T08:00:00+07:00">
  <meta property="article:author" content="https://maklonkosmetik.id/penulis/nama-penulis/">
  <meta property="article:section" content="Panduan Maklon">
  <meta property="article:tag" content="Maklon Kosmetik">
  <meta property="article:tag" content="Brief Produk">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Persiapan Konsultasi Maklon | Maklon Kosmetik ID">
  <meta name="twitter:description" content="Siapkan brief produk, kemasan, dan pertanyaan biaya serta MOQ sebelum konsultasi proyek maklon Anda.">
  <meta name="twitter:image" content="https://maklonkosmetik.id/assets/images/blog/persiapan-konsultasi-share.jpg">
  <meta name="twitter:image:alt" content="Ilustrasi brief dan persiapan konsultasi maklon kosmetik">
</head>
```

Ganti nama penulis dan waktu dengan data publikasi nyata. `dateModified`/`article:modified_time` hanya berubah karena pembaruan isi yang nyata, bukan setiap deploy. Jangan menambahkan `twitter:site`/`twitter:creator` jika akun belum diketahui. `og:locale:alternate` hanya untuk terjemahan yang benar-benar tersedia. Semua gambar share harus dapat diakses crawler tanpa login; dimensi dan MIME harus cocok dengan file.

Open Graph dasar membutuhkan `og:title`, `og:type`, `og:image`, dan `og:url`; metadata tambahan di atas menjadi standar implementasi proyek. [Spesifikasi Open Graph](https://ogp.me/).

## 13. Schema markup JSON-LD

Gunakan `BlogPosting` untuk artikel blog, `BreadcrumbList` untuk breadcrumb, `WebPage` untuk halaman, `Person`/`Organization` untuk penulis nyata, serta `Organization` publisher yang konsisten. Gunakan ID absolut yang stabil untuk menghubungkan entitas. Jangan menggunakan `Product`, `Service`, `HowTo`, `QAPage`, atau rating hanya karena artikel menyebut produk, proses, atau pertanyaan.

### Contoh graph utama

Kode valid secara sintaks, tetapi seluruh nilai contoh wajib sesuai halaman nyata. URL gambar, logo, dan profil penulis harus mengembalikan 200 sebelum tayang.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://maklonkosmetik.id/#organization",
      "name": "Maklon Kosmetik ID",
      "url": "https://maklonkosmetik.id/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://maklonkosmetik.id/assets/images/logo-maklon-kosmetik-id.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+6288989643555",
        "contactType": "sales",
        "availableLanguage": "Indonesian",
        "url": "https://wa.me/6288989643555"
      }
    },
    {
      "@type": "Person",
      "@id": "https://maklonkosmetik.id/penulis/nama-penulis/#person",
      "name": "Nama Penulis Aktual",
      "url": "https://maklonkosmetik.id/penulis/nama-penulis/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://maklonkosmetik.id/blog/persiapan-konsultasi-maklon/#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Homepage", "item": "https://maklonkosmetik.id/"},
        {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://maklonkosmetik.id/blog/"},
        {"@type": "ListItem", "position": 3, "name": "Persiapan Konsultasi Maklon", "item": "https://maklonkosmetik.id/blog/persiapan-konsultasi-maklon/"}
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://maklonkosmetik.id/blog/persiapan-konsultasi-maklon/#webpage",
      "url": "https://maklonkosmetik.id/blog/persiapan-konsultasi-maklon/",
      "name": "Persiapan Konsultasi Maklon: Checklist untuk Pemilik Brand",
      "inLanguage": "id-ID",
      "breadcrumb": {"@id": "https://maklonkosmetik.id/blog/persiapan-konsultasi-maklon/#breadcrumb"},
      "mainEntity": {"@id": "https://maklonkosmetik.id/blog/persiapan-konsultasi-maklon/#article"}
    },
    {
      "@type": "BlogPosting",
      "@id": "https://maklonkosmetik.id/blog/persiapan-konsultasi-maklon/#article",
      "url": "https://maklonkosmetik.id/blog/persiapan-konsultasi-maklon/",
      "mainEntityOfPage": {"@id": "https://maklonkosmetik.id/blog/persiapan-konsultasi-maklon/#webpage"},
      "headline": "Persiapan Konsultasi Maklon: Checklist untuk Pemilik Brand",
      "description": "Panduan menyiapkan brief produk, kemasan, serta pertanyaan biaya dan MOQ sebelum konsultasi maklon.",
      "image": ["https://maklonkosmetik.id/assets/images/blog/persiapan-konsultasi-utama.jpg"],
      "datePublished": "2026-10-05T08:00:00+07:00",
      "dateModified": "2026-10-05T08:00:00+07:00",
      "author": {"@id": "https://maklonkosmetik.id/penulis/nama-penulis/#person"},
      "publisher": {"@id": "https://maklonkosmetik.id/#organization"},
      "inLanguage": "id-ID",
      "articleSection": "Panduan Maklon",
      "keywords": ["persiapan konsultasi maklon", "brief skincare", "MOQ maklon"]
    }
  ]
}
```

Tempatkan graph sebagai isi `<script type="application/ld+json">` dalam HTML hasil build. Serialisasikan objek JSON, jangan merangkai string mentah dari input editor. Escape karakter `<` sebagai `\u003c` ketika menyisipkan JSON ke script HTML agar isi tidak menutup tag script.

Jika penulis adalah tim editorial, ganti node Person menjadi Organization dengan identitas tim yang benar dan ubah referensi author. Jangan menautkan penulis ke halaman 404. Properti `headline` mengikuti H1; `description` menggambarkan isi; gambar mengikuti gambar artikel yang benar. Tanggal menggunakan ISO 8601 dengan zona waktu. Google mendokumentasikan author, headline, image, dan tanggal untuk Article/BlogPosting. [Panduan Article](https://developers.google.com/search/docs/appearance/structured-data/article).

### FAQPage opsional

Jika benar-benar dipakai, tambahkan node berikut ke graph; contoh pertanyaan harus ada dalam FAQ terlihat. Hubungkan WebPage dengan `hasPart` ke ID FAQ, tanpa mengganti artikel sebagai mainEntity halaman.

```json
{
  "@type": "FAQPage",
  "@id": "https://maklonkosmetik.id/blog/persiapan-konsultasi-maklon/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa yang perlu disiapkan sebelum konsultasi maklon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Siapkan gambaran kategori produk, target pengguna, opsi kemasan, jumlah produksi yang ingin dibahas, dan target waktu. Spesifikasi yang belum diketahui dapat dikonfirmasi saat konsultasi."
      }
    }
  ]
}
```

Node tambahan masuk ke `@graph` yang sudah memiliki `@context`; bukan JSON terpisah tanpa context. Validasi dengan Schema Markup Validator dan Rich Results Test. Validitas schema tidak menjamin rich result atau kutipan AI.

## 14. SEO, AEO dan GEO dalam isi

| Fokus | Pekerjaan editorial dan teknis | Bukti pemeriksaan |
|---|---|---|
| SEO | Intent jelas, judul unik, isi berguna, internal link, canonical, sitemap, HTML crawlable | Audit metadata, tautan, status 200, Search Console |
| AEO | Ringkasan ≤7 poin, jawaban langsung, pertanyaan spesifik, syarat, contoh, FAQ | Jawaban dapat dipahami tanpa konteks halaman lain |
| GEO | Identitas konsisten, penulis nyata, sumber primer, data asli, istilah jelas, pembaruan faktual | Review fakta dan log uji penyebutan/kutipan |

Keyword muncul secara alami pada judul dan isi jika relevan. Jangan menetapkan density keyword atau memaksa sinonim. Tambahkan tabel perbandingan, langkah, dan checklist ketika membantu pembaca. Pastikan angka mempunyai satuan, kondisi, sumber, dan tanggal jika berubah seiring waktu.

Konten harus menjelaskan batas informasi: misalnya biaya bergantung pada formula, kemasan, jumlah, dan cakupan pekerjaan. Pisahkan penjelasan edukasi dari ajakan konsultasi. Jangan menerbitkan banyak artikel dengan perbedaan keyword kecil tanpa nilai tambahan.

Panduan Google menyatakan fondasi SEO tetap relevan untuk fitur AI generatif pada Search; schema khusus atau file AI tambahan bukan syarat tersendiri. Strategi GEO di sini adalah kualitas informasi dan kemudahan pemahaman, bukan jaminan dipilih model generatif. [Panduan AI Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

## 15. Data artikel dan alur build

| Kelompok | Field minimum |
|---|---|
| Identitas | `id`, `slug`, `title`, `content_type: blog`, `status` |
| SEO | `meta_title`, `meta_description`, `meta_keywords`, `canonical` |
| Editorial | `summary_points`, `body`, `faq`, `sources`, `category` |
| Media | `hero_image`, `support_images`, `share_image`; setiap gambar memiliki alt, ukuran, dan hak penggunaan |
| Penulis | `author_id`, `reviewer_id` jika ada, `published_at`, `updated_at` |
| Internal link | `read_also`, `related_articles` tepat 3 ID, layanan/produk terkait |
| CTA | `cta_blocks`, `whatsapp_context`; nomor berasal dari konfigurasi situs |

Sumber dapat berada di `src/content/blog/{slug}.md`. Build menghasilkan `dist/blog/{slug}/index.html`; gambar berada di aset terpisah. Semua head metadata, JSON-LD, TOC, ringkasan, Baca juga, CTA, FAQ, profil, dan kartu terkait dihasilkan sebelum deploy. Jangan fetch isi artikel utama setelah halaman terbuka.

### Urutan kerja

1. Editor menyusun brief, intent, outline, dan sumber.
2. Penulis menulis isi, ringkasan, FAQ, serta konteks CTA.
3. Reviewer memeriksa fakta, batas klaim, dan data operasional.
4. Editor memilih gambar, minimal dua Baca juga, dan tiga artikel terkait.
5. Build menghasilkan HTML dan memvalidasi metadata, anchor, schema, serta URL.
6. QA memeriksa mobile, desktop, keyboard, gambar, share, dan WhatsApp.
7. Publikasi menggunakan tanggal nyata; sitemap diperbarui sesuai perubahan isi.
8. Pantau Search Console, klik WhatsApp, performa, dan kualitas percakapan sales.

## 16. Kriteria penerimaan dan checklist

### Konten dan layout

- [ ] Breadcrumb sesuai hierarki Homepage → Blog → Artikel.
- [ ] Satu H1 utama sesuai isi.
- [ ] Gambar utama relevan dan tampil benar.
- [ ] TOC mempunyai anchor yang semuanya berfungsi.
- [ ] Ringkasan berbentuk poin, maksimal 7 poin.
- [ ] Minimal dua Baca juga pada sekitar 30% dan 60% isi utama.
- [ ] Minimal satu gambar pendukung editorial selain gambar utama/CTA.
- [ ] Minimal satu CTA WhatsApp; tambahan sesuai panjang dan kebutuhan.
- [ ] FAQ khusus artikel tersedia dalam HTML.
- [ ] Sumber mendukung klaim terkait.
- [ ] Profil penulis nyata berada di bawah artikel.
- [ ] Salin link, share WhatsApp, dan share Facebook berfungsi.
- [ ] Tepat tiga artikel terkait, masing-masing lengkap thumbnail, judul, deskripsi, tombol.

### Metadata dan schema

- [ ] Meta Title ≤65 karakter termasuk spasi dan suffix.
- [ ] Meta Description ≤165 karakter termasuk spasi.
- [ ] Meta Keyword relevan tersedia.
- [ ] Canonical absolut HTTPS dan self-canonical pada `/blog/{slug}/`.
- [ ] Open Graph article, locale, site name, URL, gambar, alt, dimensi, author, section, tag, tanggal lengkap dan sesuai fakta.
- [ ] Social card memakai gambar yang dapat diakses.
- [ ] JSON-LD parse sebagai JSON valid dan sesuai isi terlihat.
- [ ] BlogPosting, WebPage, BreadcrumbList, author, publisher terhubung melalui ID konsisten.
- [ ] Tanggal nyata dan profil penulis tidak memakai placeholder.
- [ ] FAQPage hanya ditambahkan jika cocok dengan isi FAQ; bukan target rich result.
- [ ] Rich Results Test dan Schema Markup Validator diperiksa; temuan relevan diselesaikan.

### Fungsi, aksesibilitas dan performa

- [ ] Halaman dan gambar menghasilkan status 200; URL hilang 404.
- [ ] Semua Baca juga dan artikel terkait sudah terbit dan tidak menautkan diri sendiri.
- [ ] Semua CTA konversi menuju 6288989643555; share WA memakai URL share umum.
- [ ] Pesan dan parameter share di-encode dengan benar.
- [ ] Klik WhatsApp dilaporkan sebagai intent, bukan otomatis lead terkirim.
- [ ] Konten, TOC, CTA, FAQ dan navigasi tersedia ketika JavaScript gagal.
- [ ] Gambar LCP tidak lazy-load; gambar di bawah fold lazy-load.
- [ ] Dimensi gambar eksplisit; tidak terjadi pergeseran layout besar.
- [ ] Tidak ada overflow seluruh halaman pada lebar 320 px; tabel dapat scroll lokal.
- [ ] Keyboard, fokus, kontras, zoom 200%, dan label kontrol diperiksa.
- [ ] Transfer awal artikel target ≤750 KB; hasil PageSpeed/GTmetrix mengikuti PRD.
- [ ] Preview/draft tidak masuk sitemap produksi atau indexing.

## 17. Rujukan teknis

Referensi diperiksa pada 5 Oktober 2026; periksa perubahan saat implementasi.

1. [Google — Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article).
2. [Google — Meta tags dan meta keyword](https://developers.google.com/search/docs/crawling-indexing/special-tags).
3. [Google — Optimasi fitur AI generatif](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
4. [Open Graph Protocol](https://ogp.me/).
5. [Google — Riwayat perubahan FAQ rich results](https://developers.google.com/search/blog/2023/08/howto-faq-changes).
6. [Google — Pembaruan dokumentasi](https://developers.google.com/search/updates).
7. [Rich Results Test](https://search.google.com/test/rich-results).
8. [Schema Markup Validator](https://validator.schema.org/).

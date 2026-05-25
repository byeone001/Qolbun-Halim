# Dokumentasi Halaman Projects Page

## 📋 Daftar Isi
1. [Pengantar](#pengantar)
2. [Struktur File](#struktur-file)
3. [Fitur Utama](#fitur-utama)
4. [Komponen & Layout](#komponen--layout)
5. [Desain Visual](#desain-visual)
6. [Responsivitas](#responsivitas)
7. [Cara Menambah/Edit Proyek](#cara-menambah-edit-proyek)
8. [Integrasi dengan Homepage](#integrasi-dengan-homepage)

---

## Pengantar

Halaman **Projects** adalah arsip lengkap portfolio dan proyek-proyek GitHub Anda. Halaman ini menggunakan desain **Floating UI** yang konsisten dengan homepage, menampilkan 12 proyek dalam 3 kategori utama dengan animasi glassmorphism dan efek glow yang halus.

**File Utama:** `projects.html`

---

## Struktur File

### Hirarki Proyek:
```
Qolbun-Halim/
├── index.html              ← Homepage (beranda)
├── projects.html           ← Halaman Projects (BARU)
├── style.css               ← Styling global (shared)
├── script.js               ← JavaScript (shared)
├── projects.css            ← [OPSIONAL] CSS khusus projects
└── foto/                   ← Assets folder
```

### Koneksi File:
- **projects.html** menggunakan `style.css` untuk styling global
- **projects.html** menggunakan `script.js` untuk animations & interactions
- Semua CSS projects ada dalam `<style>` tag inline di projects.html
- Dapat dipindahkan ke `projects.css` terpisah jika diinginkan modularitas lebih tinggi

---

## Fitur Utama

### 1. **Header Navigation**
- ✅ Tombol "Kembali ke Beranda" di pojok kiri atas
- ✅ Efek hover dengan arrow animation (melayang)
- ✅ Navigasi bar global yang sticky
- ✅ Mobile hamburger menu support

### 2. **Hero Section**
- ✅ Judul: "Arsip Proyek & Eksplorasi Kode"
- ✅ Subtitle deskriptif
- ✅ Statistik: 12 Total Proyek & 3 Kategori
- ✅ Fade-up animation pada load

### 3. **Project Grid**
- ✅ 3 kategori dengan custom icons
- ✅ 12 project cards dalam glassmorphism design
- ✅ Responsive grid (1 kolom mobile, 3 kolom desktop)
- ✅ Hover effect: floating card dengan glow cyan

### 4. **Project Card Components**
Setiap kartu berisi:
- **Icon**: Folder/kategori icon di pojok kiri
- **Title**: Nama proyek
- **Description**: Deskripsi singkat fungsionalitas
- **Tags**: Teknologi/bahasa yang digunakan (pill format)
- **GitHub Link**: Button dengan icon eksternal link
- **Action Button**: "View Repository" yang bercahaya

### 5. **Animations**
- ✅ Fade-up animation saat halaman load
- ✅ Reveal animation saat scroll (Intersection Observer)
- ✅ Card floating effect pada hover
- ✅ Custom cursor dengan cyan glow
- ✅ Icon rotation & scale on hover
- ✅ Button glow effect

### 6. **Responsive Design**
- ✅ Desktop (1200px+): 3 kolom grid
- ✅ Tablet (901-900px): 2 kolom grid
- ✅ Mobile (601-600px): 1 kolom grid
- ✅ Small mobile (<380px): Optimized spacing

---

## Komponen & Layout

### A. Container Struktur

```html
<div class="projects-page">              ← Main wrapper
    <div class="hero-bg-orbs">           ← Background animation
    
    <header class="projects-header">     ← Hero section
        <a class="back-nav">             ← Back button
        <h1 class="projects-title">      ← Page title
        <p class="projects-subtitle">    ← Description
        <div class="projects-hero-stats">← Stats
    
    <section class="category-section">   ← Category 1: Apps & Systems
        <div class="category-header">
        <div class="projects-grid">
            <div class="project-card">   ← Individual project card
```

### B. Project Card Anatomy

```html
<div class="project-card reveal">
    <div class="project-top">
        <div class="project-icon">      ← Folder/category icon
        <div class="project-links">      ← GitHub link icon
    
    <h3 class="project-title">          ← Project name
    <p class="project-desc">            ← Short description
    
    <div class="project-footer">
        <div class="project-tags">      ← Technology pills
        <a class="btn-cta">             ← View Repository button
```

### C. Category Sections

**3 Kategori Utama:**

1. **🖥️ Aplikasi & Sistem** (4 proyek)
   - Aplikasi Les Privat
   - Si-Abas
   - MenuResto
   - Ticket Bioskop Reservation

2. **🌐 Web & Bisnis** (4 proyek)
   - TokoLampuMakmur
   - Makjulo Official
   - WarKita
   - LESMANIA

3. **👤 Personal & Eksplorasi** (4 proyek)
   - Qolbun-Halim (Portfolio)
   - Kajian Islam
   - SelamatUlangTahun
   - Belajar-HTML-Dasar

---

## Desain Visual

### Color Palette (Dari style.css)

```css
--bg-1: #050811;           /* Very dark navy - main background */
--bg-2: #0a0f1e;           /* Dark navy - secondary */
--bg-3: #0f1628;           /* Dark navy - tertiary */
--cyan: #00d9ff;           /* Primary accent (neon cyan) */
--blue: #0099ff;           /* Secondary accent */
--glass: rgba(255,255,255,0.04);        /* Glassmorphism base */
--glass-border: rgba(0,217,255,0.12);   /* Cyan border subtle */
--cyan-dim: rgba(0,217,255,0.15);       /* Dim cyan highlight */
--cyan-glow: rgba(0,217,255,0.4);       /* Glow effect */
--text: #e8f0ff;           /* Primary text (light blue) */
--text-muted: #7a8bb0;     /* Secondary text (muted) */
```

### Key Visual Effects

1. **Glassmorphism**
   - Background: `rgba(255,255,255,0.04)`
   - Backdrop blur: `20px`
   - Semi-transparent border dengan cyan tint

2. **Glow Effects**
   - Button hover: `box-shadow: 0 0 20px var(--cyan-glow)`
   - Card hover: `0 0 40px rgba(0,217,255,0.1)`
   - Custom cursor ring: cyan circle dengan scale effect

3. **Animations**
   - Fade-up: `0.7s ease` - slide from bottom + fade in
   - Reveal: `opacity & transform 0.7s ease` - Intersection Observer
   - Float: Cards naik 12px on hover
   - Icon rotate: 5-10 degrees on hover

### Typography

- **Headings**: `Space Grotesk` 700-800 weight
- **Body**: `Inter` 400-500 weight
- **Accent**: `Space Grotesk` untuk tags & labels
- **Size Scale**: 
  - Title: `clamp(2rem, 5vw, 3.5rem)`
  - Subtitle: `1.05rem`
  - Tags: `0.75rem`
  - Button: `0.9rem`

---

## Responsivitas

### Breakpoint 1: Desktop (1200px+)
- 3-column grid layout
- Full padding & spacing
- All hover effects active
- Hero stats horizontal

### Breakpoint 2: Tablet (901-900px)
- 2-column grid layout (max 280px per card)
- Reduced padding from 2rem → 1.5rem
- Back button repositioned: top 6rem
- Grid gap: 1.5rem

### Breakpoint 3: Mobile (601-600px)
- Single column layout
- Reduced padding: 1rem
- Smaller font sizes
- Stats stacked vertically
- Hamburger menu support
- Grid gap: 1.2rem

### Breakpoint 4: Small Mobile (<380px)
- Extra small padding: 0.75rem
- Minimal text sizes
- Back button repositioned higher
- Optimized touch targets

**CSS Media Queries Location:** `projects.html` → `<style>` tag (lines 90-160+)

---

## Cara Menambah/Edit Proyek

### Menambah Proyek Baru

#### Step 1: Tentukan Kategori
Pilih kategori mana: "Aplikasi & Sistem", "Web & Bisnis", atau "Personal & Eksplorasi"

#### Step 2: Duplikasi Template Card
Di dalam `<div class="projects-grid">` kategori yang dipilih:

```html
<div class="project-card reveal">
    <div class="project-top">
        <div class="project-icon">
            <i class="ri-[ICON-NAME]"></i>  <!-- Remixicon -->
        </div>
        <div class="project-links">
            <a href="https://github.com/byeone001/[REPO-NAME]" target="_blank">
                <i class="ri-github-fill"></i>
            </a>
        </div>
    </div>
    
    <h3 class="project-title">Nama Proyek Anda</h3>
    <p class="project-desc">Deskripsi singkat proyek Anda di sini.</p>
    
    <div class="project-footer">
        <div class="project-tags">
            <span class="project-tag">Teknologi1</span>
            <span class="project-tag">Teknologi2</span>
            <span class="project-tag">Teknologi3</span>
        </div>
        <a href="https://github.com/byeone001/[REPO-NAME]" target="_blank" class="btn-cta">
            View Repository <i class="ri-share-box-line"></i>
        </a>
    </div>
</div>
```

#### Step 3: Update Icon
Ganti `[ICON-NAME]` dengan icon dari [Remixicon](https://remixicon.com):
- `ri-macbook-line` → Aplikasi/laptop
- `ri-database-2-line` → Database
- `ri-restaurant-line` → Restaurant
- `ri-store-2-line` → Store
- `ri-code-box-line` → Code
- dll.

#### Step 4: Update Konten
- **Nama Proyek**: Ganti "Nama Proyek Anda"
- **Deskripsi**: Deskripsi fungsionalitas
- **Teknologi**: Tags (Java, HTML, React, etc)
- **GitHub Link**: Ganti `[REPO-NAME]` dengan nama repository

#### Step 5: Update Category Count
Di dalam `.category-header`, update `.category-count`:
```html
<span class="category-count">4</span>  <!-- Dari 4 ke 5 jika menambah 1 proyek -->
```

### Editing Proyek Existing

1. **Cari kartu**: Gunakan Ctrl+F cari project title
2. **Edit konten**: Ubah title, description, tags
3. **Update icon**: Ganti class icon jika perlu
4. **Update link**: Pastikan GitHub link valid

### Tips Best Practices

- ✅ Deskripsi singkat (1-2 baris max)
- ✅ 2-4 tags teknologi per proyek
- ✅ Icon yang representatif
- ✅ Link GitHub valid & accessible
- ✅ Konsisten dengan formatting existing cards

---

## Integrasi dengan Homepage

### Link ke Projects Page
Di **index.html** navbar:
```html
<li>
    <a href="projects.html" class="nav-link" id="navProjects">
        <i class="ri-folder-code-line"></i>Proyek
    </a>
</li>
```
Status: ✅ Sudah terintegrasi

### Link Kembali ke Homepage
Di **projects.html** header:
```html
<a href="index.html" class="back-nav fade-up">
    <i class="ri-arrow-left-line"></i> Kembali ke Beranda
</a>
```
Status: ✅ Sudah terintegrasi

### Shared Resources

| Resource | File | Status |
|----------|------|--------|
| CSS Variables | style.css | ✅ Shared |
| Animations | script.js | ✅ Shared |
| Cursor Effect | script.js | ✅ Enhanced |
| Particle Canvas | script.js | ✅ Shared |
| Navbar | index.html | ✅ Consistent |
| Footer | style.css | ✅ Shared |

### Tidak Ada Konflik ✅

- Projects page CSS tidak override homepage CSS
- Inline CSS di projects.html menggunakan class names spesifik
- Semua shared classes kompatibel
- JavaScript Intersection Observer support kedua halaman

---

## Customization Options

### 1. Mengubah Warna Aksen
Edit di `style.css` (atau di style tag projects.html):
```css
--cyan: #00d9ff;        /* Ganti warna utama */
--blue: #0099ff;        /* Ganti warna sekunder */
```

### 2. Mengubah Grid Kolom
Di CSS projects:
```css
.projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    /* Ubah 320px untuk lebar minimum card */
}
```

### 3. Mengubah Animation Speed
Cari di projects.html CSS:
```css
transition: all 0.4s cubic-bezier(...);  /* Ubah 0.4s */
```

### 4. Modularitas CSS
Untuk modularitas lebih tinggi, bisa move CSS inline ke file terpisah:
```html
<!-- Di head projects.html -->
<link rel="stylesheet" href="projects.css">
```
Kemudian paste semua CSS dari `<style>` ke `projects.css`

---

## Troubleshooting

### Problem: Animasi tidak bekerja
**Solusi:** Pastikan `script.js` ter-load dengan benar
```html
<script src="script.js"></script>
```

### Problem: Grid tidak responsif
**Solusi:** Periksa media queries di projects.html CSS

### Problem: Link GitHub tidak terbuka
**Solusi:** Periksa format URL
```
https://github.com/byeone001/[REPO-NAME]
```

### Problem: Icon tidak tampil
**Solusi:** 
1. Check Remixicon CDN link di head
2. Pastikan format icon: `ri-[name]-line` atau `ri-[name]-fill`

### Problem: Cursor ring tidak muncul di project cards
**Solusi:** Pastikan script.js sudah updated dengan `.project-card` selector

---

## File Checklist

- ✅ `projects.html` - Halaman lengkap dengan HTML + CSS inline
- ✅ `style.css` - Styling global (no changes needed)
- ✅ `script.js` - JavaScript dengan cursor ring update
- ✅ `index.html` - Link ke projects sudah ada
- ✅ FEATURES.md - Bisa ditambahkan fitur projects page
- ✅ README.md - Bisa ditambahkan deskripsi projects page

---

## Next Steps / Enhancement Ideas

1. **Filter Projects** - Tambah filter by technology
2. **Search Bar** - Cari project by name
3. **Project Details Modal** - Klik card untuk lihat detail
4. **Statistics** - Tambah stats repo (stars, forks)
5. **Category Tabs** - Switch antar kategori dengan filter
6. **Sort Options** - Sort by date, name, atau stars
7. **API Integration** - Pull data dari GitHub API real-time
8. **Testimonials** - Feedback untuk setiap project

---

## Kesimpulan

✨ **Halaman Projects Anda sudah siap digunakan!**

- Desain konsisten dengan homepage
- Responsif di semua perangkat
- Animasi smooth & engaging
- Mudah untuk menambah/edit proyek
- Tidak ada konflik dengan homepage
- Fully integrated dengan navigation

Selamat menampilkan portfolio Anda! 🚀

---

**Last Updated:** May 25, 2026  
**Author:** GitHub Copilot  
**Portfolio Owner:** Qolbun Halim Hidayatulloh

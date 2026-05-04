# Panduan Customization Portfolio Website

## 1. Update Informasi Personal

### Navigation Bar Logo
Di `index.html` baris ~15:
```html
<div class="nav-logo">QH</div>
```
Ganti `QH` dengan inisial atau nama singkat Anda.

### Hero Section Title
Di `index.html` baris ~27-30:
```html
<h1 class="hero-title">
    <span class="word">Frontend</span>
    <span class="word">Developer</span>
</h1>
```
Ubah text sesuai profesi Anda.

### Hero Description
Di `index.html` baris ~35-38:
```html
<p class="hero-description">
    Menciptakan website modern dengan tampilan clean, responsif, dan elegan. 
    Mengubah ide dan desain menjadi pengalaman digital yang menarik dan mudah digunakan.
</p>
```

### Hero Skills
Di `index.html` baris ~40-44:
```html
<div class="hero-skills">
    <span class="skill-badge">HTML/CSS</span>
    <span class="skill-badge">JavaScript</span>
    <span class="skill-badge">Responsive Design</span>
</div>
```
Tambah atau ubah skill sesuai kemampuan Anda.

## 2. Update Social Media Links

Di `index.html` section Contact (~line 155-175):
```html
<a href="https://www.linkedin.com/in/qolbun-halim-1b67a3371" target="_blank" class="social-link">
    <!-- Ubah URL ke profil LinkedIn Anda -->
</a>
```

Update semua social media links:
- LinkedIn: Ganti URL di href
- Instagram: Ganti URL di href
- GitHub: Ganti URL di href

## 3. Menambah Project Baru

Di `index.html` dalam section portfolio (#line 75), tambahkan:
```html
<a href="project3.html" class="project-card">
    <div class="project-image">
        <img src="foto/project3.jpg" alt="Project 3">
        <div class="project-overlay">
            <p>View Details</p>
        </div>
    </div>
    <div class="project-info">
        <h3>Your New Project Title</h3>
        <p class="project-category">Category</p>
    </div>
</a>
```

Kemudian buat file `project3.html` dengan template yang sama seperti `project1.html` dan `project2.html`.

## 4. Mengubah Warna Tema

Di `style.css` baris ~3-11, ubah CSS variables:
```css
:root {
    --primary-dark: #0a0e27;
    --secondary-dark: #1a1f3a;
    --accent-cyan: #00d9ff;      /* Warna highlight utama */
    --accent-pink: #ff0080;       /* Warna highlight sekunder */
    --text-light: #e8e9f3;        /* Warna text utama */
    --text-muted: #a0a9c9;        /* Warna text muted */
}
```

### Rekomendasi Warna Combinations:
- **Biru & Purple**: Cyan: `#00d9ff`, Pink: `#8000ff`
- **Hijau & Orange**: Cyan: `#00ff88`, Pink: `#ff8800`
- **Pink & Blue**: Cyan: `#00d9ff`, Pink: `#ff0080`

## 5. Menambah Certificates Baru

Di `index.html` dalam tab certificates (~line 107):
```html
<div class="cert-item">
    <div class="cert-icon"><i class="ri-award-line"></i></div>
    <div class="cert-details">
        <h3>Your Certification Title</h3>
        <p>Issued by Issuer Name - 2024</p>
    </div>
</div>
```

## 6. Menambah Tech Stack Baru

Di `index.html` dalam tab tech-stack (~line 129):
```html
<div class="tech-item">
    <div class="tech-icon"><i class="ri-ICON-NAME-line"></i></div>
    <h4>Technology Name</h4>
</div>
```

### Daftar Icon Remixicon:
- HTML5: `ri-html5-line`
- CSS3: `ri-css3-line`
- JavaScript: `ri-javascript-line`
- React: `ri-react-line`
- Vue: `ri-vuejs-line`
- Python: `ri-code-line`
- Database: `ri-database-line`
- Git: `ri-git-branch-line`
- Terminal: `ri-terminal-line`
- Tools: `ri-tools-line`

Lihat lebih banyak: https://remixicon.com/

## 7. Update Footer

Di `index.html` baris ~184:
```html
<footer class="footer">
    <p>&copy; 2026 Qolbun Halim Hidayatulloh — All rights reserved.</p>
</footer>
```
Ubah tahun dan nama sesuai kebutuhan.

## 8. Menambahkan Gambar

Tempat semua gambar di folder `foto/`:
- Profile image: `foto/halim.jpg`
- Project images: `foto/project1.jpg`, `foto/project2.jpg`, dll

Di HTML, reference gambar dengan:
```html
<img src="foto/your-image.jpg" alt="Description">
```

## 9. Mengubah Tab Content

### Menambah Tab Baru
Di `index.html` baris ~66:
```html
<button class="tab-btn" data-tab="new-tab">New Tab</button>
```

Kemudian tambahkan content:
```html
<div class="tab-content" id="new-tab-tab">
    <!-- Your content here -->
</div>
```

## 10. Form Contact

Untuk membuat form berfungsi, gunakan salah satu service:

### Option 1: Formspree (Gratis & Easy)
1. Kunjungi https://formspree.io/
2. Buat account dan form baru
3. Update form action di `index.html`:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
1. Setup di https://www.emailjs.com/
2. Update script.js dengan credentials

### Option 3: Backend API
Buat backend sendiri untuk handle form submission.

## 11. SEO Optimization

Update meta tags di `index.html` head section:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="frontend, developer, web design">
<meta name="author" content="Your Name">
```

## 12. Google Analytics (Optional)

Tambahkan ke `index.html` sebelum closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 13. Tips Umum

- **Backup**: Selalu backup file sebelum membuat perubahan
- **Test Responsif**: Test di mobile, tablet, dan desktop
- **Performance**: Optimasi ukuran gambar (gunakan https://tinypng.com/)
- **Browser Compatibility**: Test di Chrome, Firefox, Safari
- **SSL Certificate**: Gunakan https jika deploy online

## 14. Deployment

### Vercel (Recommended)
1. Push ke GitHub
2. Connect ke Vercel
3. Deploy automatically

### Netlify
1. Drag & drop folder ke Netlify
2. Setup domain

### GitHub Pages
1. Push ke GitHub
2. Enable GitHub Pages di settings
3. Akses via username.github.io/repository-name

---

**Butuh bantuan?** Check README.md untuk informasi lebih lanjut.

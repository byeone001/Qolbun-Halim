# Portfolio Website - Qolbun Halim Hidayatulloh

Website portfolio modern dan responsif yang dibangun dengan HTML5, CSS3, dan JavaScript vanilla.

## Fitur Utama

- **Design Modern**: Menggunakan gradient, animasi, dan glassmorphism
- **Fully Responsive**: Optimized untuk desktop, tablet, dan mobile
- **Performance**: Lightweight dan cepat loading
- **Smooth Animations**: Transisi halus dan animasi menarik
- **Tab Navigation**: Portfolio dengan tab (Projects, Certificates, Tech Stack)
- **Contact Form**: Formulir kontak yang fungsional
- **Social Links**: Link ke social media

## Struktur File

```
├── index.html          # File utama HTML
├── style.css           # Stylesheet CSS
├── script.js           # JavaScript interaktif
├── project1.html       # Detail project 1
├── project2.html       # Detail project 2
└── foto/               # Folder untuk gambar
    └── halim.jpg       # Profile image
```

## Cara Menggunakan

1. **Edit Konten Personal**
   - Update nama di navigation bar
   - Ganti text di hero section
   - Tambahkan project Anda di portfolio section
   - Update social media links

2. **Customisasi Warna**
   - Buka `style.css`
   - Ubah CSS variables di bagian `:root`
   - Contoh: `--accent-cyan: #00d9ff`

3. **Tambah Project Baru**
   - Copy struktur project-card yang ada
   - Update image dan title
   - Link ke project1.html atau project2.html

## Teknologi

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (Vanilla - No Framework)
- Remixicon Font (Icons)
- Google Fonts (Poppins)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips Customization

### Mengubah Warna Tema
Edit CSS variables di `:root`:
```css
:root {
    --accent-cyan: #00d9ff;
    --accent-pink: #ff0080;
    --text-light: #e8e9f3;
}
```

### Menambah Project
Edit section portfolio:
```html
<a href="project3.html" class="project-card">
    <div class="project-image">
        <img src="foto/project3.jpg" alt="Project 3">
        <div class="project-overlay">
            <p>View Details</p>
        </div>
    </div>
    <div class="project-info">
        <h3>Your Project Title</h3>
        <p class="project-category">Category</p>
    </div>
</a>
```

### Form Submission
Untuk menggunakan form yang sebenarnya, update script.js atau gunakan service seperti Formspree, EmailJS, atau backend API.

## License

Free to use and modify for personal and commercial projects.

## Support

Untuk bantuan atau pertanyaan, silakan hubungi melalui social media yang tersedia.

---

Made with ❤️ using HTML, CSS & JavaScript

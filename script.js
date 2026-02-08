document.addEventListener('DOMContentLoaded', () => {
    // 1. Fungsionalitas Scroll-to-Top
    const scrollUp = document.querySelector('.progress-wrap');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollUp.classList.add('active');
        } else {
            scrollUp.classList.remove('active');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('.main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
            // Ganti icon menu jika aktif (opsional)
            const icon = menuToggle.querySelector('i');
            if (mainMenu.classList.contains('active')) {
                icon.classList.remove('ri-menu-line');
                icon.classList.add('ri-close-line');
            } else {
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-line');
            }
        });

        // Tutup menu saat link diklik
        document.querySelectorAll('.main-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mainMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-line');
            });
        });
    }

    // 2. Animasi Infinite Scroll pada Skills
    const scrollerInner = document.querySelector('.scroller-inner');

    if (scrollerInner) {
        // Mendapatkan lebar total dari inner element
        const totalWidth = scrollerInner.scrollWidth / 2;

        // Aturan keyframes untuk animasi
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @keyframes scroll-left {
                to {
                    transform: translateX(-${totalWidth}px);
                }
            }
        `;
        document.head.appendChild(styleSheet);

        // Menerapkan animasi
        scrollerInner.style.animation = `scroll-left 40s linear infinite`;
    }

    // 3. Smooth Scrolling (Menggunakan CSS, tapi ini untuk fallback)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 4. Initialize Animations (AOS)
    AOS.init({
        once: true, // Animasi hanya berjalan sekali saat scroll
        offset: 100, // Offset trigger
        duration: 1000,
    });

    // 5. Typing Text Effect
    const typed = new Typed('.typing-text', {
        strings: ['Software Engineer', 'AI Enthusiast', 'Computer Vision Dev', 'Tech Explorer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        backDelay: 1500
    });

});
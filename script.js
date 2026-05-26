// ===== PARTICLE CANVAS =====
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1
    };
}

for (let i = 0; i < 100; i++) particles.push(createParticle());

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,217,255,${p.opacity})`;
        ctx.fill();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// ===== CUSTOM CURSOR =====
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
});

function animateCursor() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a,button,.skill-tag,.bento-card,.project-card,.btn-cta').forEach(el => {
    el.addEventListener('mouseenter', () => {
        ring.style.transform = 'translate(-50%,-50%) scale(1.6)';
        ring.style.borderColor = 'rgba(0,217,255,0.8)';
    });
    el.addEventListener('mouseleave', () => {
        ring.style.transform = 'translate(-50%,-50%) scale(1)';
        ring.style.borderColor = 'rgba(0,217,255,0.4)';
    });
});

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNav();
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('open') ? 'rotate(45deg) translate(5px,5px)' : '';
    spans[1].style.opacity = navMenu.classList.contains('open') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('open') ? 'rotate(-45deg) translate(5px,-5px)' : '';
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
    });
});

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.dataset.section === current);
    });
}

// ===== TYPEWRITER =====
const words = ['Pemimpin Organisasi', 'Developer', 'Problem Solver', 'Inovator'];
let wi = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter');

function typeEffect() {
    const word = words[wi];
    if (!deleting) {
        tw.textContent = word.substring(0, ci + 1);
        ci++;
        if (ci === word.length) { deleting = true; setTimeout(typeEffect, 1800); return; }
    } else {
        tw.textContent = word.substring(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(typeEffect, deleting ? 60 : 100);
}
setTimeout(typeEffect, 800);

// ===== HERO CARD 3D TILT =====
const heroCard = document.getElementById('heroCard');
if (heroCard) {
    heroCard.addEventListener('mousemove', e => {
        const rect = heroCard.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const card = heroCard.querySelector('.hero-card');
        if (card) card.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`;
    });
    heroCard.addEventListener('mouseleave', () => {
        const card = heroCard.querySelector('.hero-card');
        if (card) card.style.transform = 'rotateY(0) rotateX(0)';
    });
}

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 100);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== CONTACT FORM VALIDATION & SUBMISSION =====
const contactForm = document.getElementById('contactForm');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputSubject = document.getElementById('inputSubject');
const inputMessage = document.getElementById('inputMessage');
const btnWhatsApp = document.getElementById('btnWhatsApp');
const btnEmail = document.getElementById('btnEmail');
const formError = document.getElementById('formError');
const formSuccess = document.getElementById('formSuccess');

// Validate form fields
function validateForm() {
    let isValid = true;
    formError.classList.remove('show');
    document.querySelectorAll('.form-group').forEach(group => group.classList.remove('input-error'));

    // Validate Name
    if (!inputName.value.trim()) {
        inputName.closest('.form-group').classList.add('input-error');
        isValid = false;
    }

    // Validate Email
    if (!inputEmail.value.trim() || !isValidEmail(inputEmail.value)) {
        inputEmail.closest('.form-group').classList.add('input-error');
        isValid = false;
    }

    // Validate Message
    if (!inputMessage.value.trim()) {
        inputMessage.closest('.form-group').classList.add('input-error');
        isValid = false;
    }

    if (!isValid) {
        formError.innerHTML = '<i class="ri-alert-line"></i> Silakan lengkapi semua field yang diperlukan.';
        formError.classList.add('show');
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// WhatsApp Button
if (btnWhatsApp) {
    btnWhatsApp.addEventListener('click', function() {
        if (validateForm()) {
            const name = inputName.value.trim();
            const subject = inputSubject.value.trim();
            const message = inputMessage.value.trim();
            const phone = '6281945055565';

            let waMessage = `Halo Qolbun, saya ${name}.\n\n`;
            if (subject) waMessage += `Subjek: ${subject}\n\n`;
            waMessage += message;

            const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(waMessage)}`;
            window.open(waUrl, '_blank');
        }
    });
}

// Email Button
if (btnEmail) {
    btnEmail.addEventListener('click', function() {
        if (validateForm()) {
            const name = inputName.value.trim();
            const email = inputEmail.value.trim();
            const subject = inputSubject.value.trim() || 'Pesan dari Portfolio';
            const message = inputMessage.value.trim();

            const emailBody = `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`;
            const mailtoUrl = `mailto:25051204442@mhs.unesa.ac.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoUrl;
        }
    });
}

// Clear error state on input
[inputName, inputEmail, inputSubject, inputMessage].forEach(input => {
    if (input) {
        input.addEventListener('focus', function() {
            this.closest('.form-group').classList.remove('input-error');
        });
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== TIMELINE ANIMATION =====
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, i * 150);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    timelineObserver.observe(item);
});

// ===== BENTO CARD GLOW ON HOVER =====
document.querySelectorAll('.bento-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = `radial-gradient(300px at ${x}px ${y}px, rgba(0,217,255,0.06), rgba(255,255,255,0.02) 80%)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.background = '';
    });
});

// ===== FOOTER YEAR =====
document.querySelectorAll('.footer-text').forEach(el => {
    el.innerHTML = el.innerHTML.replace('2026', new Date().getFullYear() || 2026);
});

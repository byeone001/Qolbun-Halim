// ===== PARTICLE CANVAS (same as homepage) =====
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

// Cursor scale on hover
function attachCursorHover() {
    document.querySelectorAll('a, button, .proj-card, .filter-pill').forEach(el => {
        el.addEventListener('mouseenter', () => {
            ring.style.transform = 'translate(-50%,-50%) scale(1.6)';
            ring.style.borderColor = 'rgba(0,217,255,0.8)';
        });
        el.addEventListener('mouseleave', () => {
            ring.style.transform = 'translate(-50%,-50%) scale(1)';
            ring.style.borderColor = 'rgba(0,217,255,0.4)';
        });
    });
}
attachCursorHover();

// ===== HEADER SCROLL EFFECT =====
const projHeader = document.getElementById('projHeader');
window.addEventListener('scroll', () => {
    projHeader.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== CARD — MOUSE-FOLLOWING GLOW =====
document.querySelectorAll('.proj-card').forEach(card => {
    // Inject glow div
    const glow = document.createElement('div');
    glow.classList.add('proj-card-mouse-glow');
    card.appendChild(glow);

    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glow.style.left = x + 'px';
        glow.style.top = y + 'px';
        // Also subtly tilt
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -5;
        const rotY = ((x - cx) / cx) * 5;
        card.style.transform = `translateY(-10px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===== FILTER PILLS =====
const filterPills = document.querySelectorAll('.filter-pill');
const allCards = document.querySelectorAll('.proj-card');
const allCatLabels = document.querySelectorAll('.cat-label-row');
const emptyState = document.getElementById('emptyState');

filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
        // Update active pill
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const filter = pill.dataset.filter;
        filterProjects(filter);
    });
});

function filterProjects(filter) {
    let visibleCount = 0;

    allCards.forEach(card => {
        const cat = card.dataset.category;
        const show = filter === 'all' || cat === filter;

        if (show) {
            card.classList.remove('hidden');
            card.classList.add('filter-in');
            setTimeout(() => card.classList.remove('filter-in'), 500);
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    // Show/hide category labels
    allCatLabels.forEach(row => {
        const cat = row.dataset.categoryLabel;
        if (filter === 'all' || cat === filter) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });

    // Update counter
    const totalEl = document.getElementById('totalCount');
    if (totalEl) totalEl.textContent = visibleCount;

    // Show empty state if no visible cards
    if (emptyState) emptyState.style.display = visibleCount === 0 ? 'flex' : 'none';
}

// ===== FOOTER YEAR =====
const footerYear = document.getElementById('footerYear');
if (footerYear) footerYear.textContent = new Date().getFullYear() || 2026;

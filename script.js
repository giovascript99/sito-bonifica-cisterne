// Navbar
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 0';
        nav.style.backgroundColor = '#ffffff';
    } else {
        nav.style.padding = '20px 0';
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// NAVBAR - chiusura dropdown
// Seleziona tutti i link della navbar
const navLinks = document.querySelectorAll('.nav-link');
const menuCollapse = document.getElementById('navbarNav');

// Crea un'istanza del componente Collapse di Bootstrap
const bsCollapse = new bootstrap.Collapse(menuCollapse, { toggle: false });

navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        // Chiude il menu solo se siamo su mobile (ovvero se il menu è visibile/espanso)
        if (window.innerWidth < 992) {
            bsCollapse.hide();
        }
    });
});

// Swiper
const swiper = new Swiper('.review-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    // Velocità di transizione costante
    speed: 5000,
    autoplay: {
        delay: 0, // Nessuna pausa tra uno scorrimento e l'altro
        disableOnInteraction: false,
    },
    // Rende il movimento fluido e non a "scatti"
    freeMode: true,
    freeModeMomentum: false,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// Sezione CTA Parallax
window.addEventListener('scroll', function () {
    const parallaxImage = document.querySelector('.cta-bg-image');
    const container = document.querySelector('.cta-background-section');

    if (parallaxImage && container) {
        const speed = 0.3; // Velocità del parallasse
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Se la sezione è visibile nel viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
            // Calcola quanto la sezione è "entrata" nella vista
            const shift = (windowHeight - rect.top) * speed;
            parallaxImage.style.transform = `translate3d(0, ${shift}px, 0)`;
        }
    }
});
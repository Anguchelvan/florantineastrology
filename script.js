// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 31, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(155, 89, 182, 0.4)';
    } else {
        navbar.style.background = 'rgba(10, 10, 31, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(155, 89, 182, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe contact cards
document.querySelectorAll('.contact-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animate horoscope chart cells on hover
const chartCells = document.querySelectorAll('.chart-cell:not(.center)');
chartCells.forEach((cell, index) => {
    cell.addEventListener('mouseenter', () => {
        // Ripple effect to adjacent cells
        chartCells.forEach((otherCell, otherIndex) => {
            const distance = Math.abs(index - otherIndex);
            if (distance <= 1) {
                setTimeout(() => {
                    otherCell.style.background = 'rgba(243, 156, 18, 0.3)';
                    setTimeout(() => {
                        otherCell.style.background = 'rgba(155, 89, 182, 0.1)';
                    }, 300);
                }, distance * 50);
            }
        });
    });
});

// WhatsApp button click tracking
document.querySelectorAll('.btn-whatsapp, .btn-whatsapp-full').forEach(button => {
    button.addEventListener('click', () => {
        console.log('WhatsApp contact initiated');
    });
});

// Add floating particles animation
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, rgba(155, 89, 182, 0.8), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        animation: float-up ${5 + Math.random() * 5}s linear forwards;
    `;
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 10000);
}

// Add CSS animation for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float-up {
        to {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create particles periodically
setInterval(createParticle, 2000);

// Mobile menu toggle (if needed in future)
const createMobileMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
    `;
    
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        const navbar = document.querySelector('.navbar .container');
        navbar.insertBefore(menuToggle, navMenu);
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('🌟 Mme. T.FLORANTINE Astrology Website Loaded Successfully 🌟');

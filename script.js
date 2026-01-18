// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
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

// Header Background Change on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Animate Stats on Scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat h3');
            stats.forEach((stat, index) => {
                const finalValue = parseInt(stat.textContent);
                animateCounter(stat, 0, finalValue, 2000, index * 200);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats');
if (statsSection) {
    observer.observe(statsSection);
}

// Counter Animation Function
function animateCounter(element, start, end, duration, delay) {
    setTimeout(() => {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '+';
        }, 16);
    }, delay);
}

// CTA Button Click Handler
document.querySelector('.cta-btn').addEventListener('click', () => {
    document.getElementById('joinModal').style.display = 'block';
});

// Project Cards Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add Loading Animation
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Hide loading screen after 4 seconds
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        document.body.style.opacity = '1';
    }, 4000);
});

// Add AI Matrix Effect
function createMatrixEffect() {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-effect';
    matrixContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
    `;
    
    for (let i = 0; i < 20; i++) {
        const column = document.createElement('div');
        column.style.cssText = `
            position: absolute;
            top: -100px;
            left: ${Math.random() * 100}%;
            color: #00ff88;
            font-family: monospace;
            font-size: 14px;
            animation: matrixFall ${3 + Math.random() * 3}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        column.textContent = Math.random().toString(2).substr(2, 8);
        matrixContainer.appendChild(column);
    }
    
    document.body.appendChild(matrixContainer);
}

// Add Matrix Animation CSS
const matrixStyle = document.createElement('style');
matrixStyle.textContent = `
    @keyframes matrixFall {
        to {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(matrixStyle);

// Initialize Matrix Effect
createMatrixEffect();

// NIT Logo Sidebar Functionality
const customLogo = document.querySelector('.custom-logo');
const nitSidebar = document.getElementById('nitSidebar');
const sidebarClose = document.querySelector('.sidebar-close');

// Open original website
// customLogo.addEventListener('click', () => {
//     window.open('https://roboticsnitp.co.in/', '_blank');
// });

// Close sidebar
sidebarClose.addEventListener('click', () => {
    nitSidebar.classList.remove('active');
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (!nitSidebar.contains(e.target) && !customLogo.contains(e.target) && nitSidebar.classList.contains('active')) {
        nitSidebar.classList.remove('active');
    }
});

// Gallery Functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryModal = document.getElementById('galleryModal');
const galleryModalImage = document.getElementById('galleryModalImage');
const galleryCaption = document.querySelector('.gallery-caption');
const galleryClose = document.querySelector('.gallery-close');

// Open gallery modal
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageSrc = item.dataset.image;
        const caption = item.querySelector('.gallery-overlay span').textContent;
        const description = item.dataset.description;
        
        galleryModalImage.src = imageSrc;
        galleryCaption.innerHTML = `<h3>${caption}</h3><p>${description}</p>`;
        galleryModal.style.display = 'block';
    });
});

// Close gallery modal
galleryClose.addEventListener('click', () => {
    galleryModal.style.display = 'none';
});

// Close gallery modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
        galleryModal.style.display = 'none';
    }
});

// Join Us Modal Functionality
const joinModal = document.getElementById('joinModal');
const closeJoinBtn = document.querySelector('.close-join');
const joinForm = document.getElementById('joinForm');

// Close join modal
closeJoinBtn.addEventListener('click', () => {
    joinModal.style.display = 'none';
});

// Close join modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === joinModal) {
        joinModal.style.display = 'none';
    }
});

// Handle join form submission
joinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('fullName').value,
        email: document.getElementById('joinEmail').value,
        phone: document.getElementById('phone').value,
        year: document.getElementById('year').value,
        branch: document.getElementById('branch').value,
        experience: document.getElementById('experience').value
    };
    
    alert(`Application submitted successfully!\nName: ${formData.name}\nEmail: ${formData.email}`);
    joinModal.style.display = 'none';
    joinForm.reset();
});

// Login Modal Functionality
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');
const googleLogin = document.getElementById('googleLogin');
const facebookLogin = document.getElementById('facebookLogin');

// Open modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Handle form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (email && password) {
        alert(`Login attempt with email: ${email}`);
        loginModal.style.display = 'none';
        loginForm.reset();
    }
});

// Google login handler
googleLogin.addEventListener('click', () => {
    alert('Google login integration would be implemented here');
    loginModal.style.display = 'none';
});

// Facebook login handler
facebookLogin.addEventListener('click', () => {
    alert('Facebook login integration would be implemented here');
    loginModal.style.display = 'none';
});

// Dynamic Year in Footer
const currentYear = new Date().getFullYear();
document.querySelector('footer p').innerHTML = `&copy; ${currentYear} Robotics Club, NIT Patna. All rights reserved.`;
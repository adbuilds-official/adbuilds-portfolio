// 1. Navigation Translucency Scroll Monitor Engine
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 40) {
        navbar.style.background = '#070a10';
        navbar.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.5)';
        navbar.style.padding = '15px 8%';
    } else {
        navbar.style.background = 'rgba(11, 15, 25, 0.75)';
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '20px 8%';
    }
});

// 2. Mobile Responsive Hamburg Overlays Trigger Logic
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Structural close sequences when executing mobile nav jumps
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// 3. Dynamic Interactive FAQ Accordion Trigger Matrix
document.querySelectorAll('.faq-question').forEach(questionBlock => {
    questionBlock.addEventListener('click', () => {
        const parentItem = questionBlock.parentElement;
        
        // Closes adjacent active accordion rows seamlessly
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== parentItem) {
                item.classList.remove('active');
            }
        });
        
        parentItem.classList.toggle('active');
    });
});
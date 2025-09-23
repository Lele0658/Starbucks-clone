// Add loading class to body for potential preloader
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const userActions = document.querySelector('.user-actions');
    
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        userActions.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        userActions.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        userActions.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.gap = '15px';
        
        userActions.style.position = 'absolute';
        userActions.style.top = 'calc(80px + 150px)';
        userActions.style.left = '0';
        userActions.style.width = '100%';
        userActions.style.backgroundColor = 'white';
        userActions.style.padding = '20px';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
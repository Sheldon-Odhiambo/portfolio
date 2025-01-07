// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ScrollReveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .skills .container', { origin: 'bottom' });
ScrollReveal().reveal('.about-img, .contact form', { origin: 'left' });

// Typed.js
var typed = new Typed('.multiple-text', {
    strings: ["Frontend Developer", "UI/UX Enthusiast", "Basketball Athlete"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

// Form validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email Address"]').value;
    const message = document.querySelector('textarea').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('All fields are required!');
    }
});

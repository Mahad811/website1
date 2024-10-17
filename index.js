let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % 6;
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;  // Fixed: using backticks for template literal
    });
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);

function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

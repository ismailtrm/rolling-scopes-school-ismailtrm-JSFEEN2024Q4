let slideIndex = 0;
const slidesToShow = 3;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideWidth = 100 / slidesToShow;

function showSlides(n) {
    const slider = document.querySelector('.slider');

    if (n >= totalSlides - slidesToShow + 1) { slideIndex = 0; }
    if (n < 0) { slideIndex = totalSlides - slidesToShow; }

    const offset = -slideIndex * slideWidth;
    slider.style.transform = `translateX(${offset}%)`;

    document.querySelector('.slider-nav-button_prev').disabled = slideIndex === 0;
    document.querySelector('.slider-nav-button_next').disabled = slideIndex >= totalSlides - slidesToShow;
}

document.querySelector('.slider-nav-button_prev').addEventListener('click', () => {
    showSlides(--slideIndex);
});

document.querySelector('.slider-nav-button_next').addEventListener('click', () => {
    showSlides(++slideIndex);
});

showSlides(slideIndex);
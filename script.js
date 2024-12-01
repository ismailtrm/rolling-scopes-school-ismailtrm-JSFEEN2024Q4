let slideIndex = 0;
const slidesToShow = 3;
const slideWidth = 100 / slidesToShow;

showSlides(slideIndex);

function showSlides(n) {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;

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
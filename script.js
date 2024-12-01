let slideIndex = 0;
const slidesToShow = 3;
const slideWidth = 100 / slidesToShow; // Calculate the width of each slide as a percentage

showSlides(slideIndex);

function showSlides(n) {
    const slider = document.querySelector('.slider-slider__swiper');
    const totalSlides = document.querySelectorAll('.slider-slider__slide').length;

    if (n >= totalSlides - slidesToShow + 1) { slideIndex = 0; }
    if (n < 0) { slideIndex = totalSlides - slidesToShow; }

    const offset = -slideIndex * slideWidth;
    slider.style.transform = `translateX(${offset}%)`;

    // Enable/disable navigation buttons
    document.querySelector('.slider-slider__nav-button_prev').disabled = slideIndex === 0;
    document.querySelector('.slider-slider__nav-button_next').disabled = slideIndex >= totalSlides - slidesToShow;
}

document.querySelector('.slider-slider__nav-button_prev').addEventListener('click', () => {
    showSlides(--slideIndex);
});

document.querySelector('.slider-slider__nav-button_next').addEventListener('click', () => {
    showSlides(++slideIndex);
});
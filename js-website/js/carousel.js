const slides = document.querySelectorAll('.review-item');
const buttons = document.querySelectorAll('.slide-ctrl-container button');

/* Initializing the Values */
let currentSlide = Math.floor(Math.random() * slides.length);
let nextSlide = slides[currentSlide + 1] ? currentSlide + 1 : 0;
let previousSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;

const goToNext = () => slides[currentSlide + 1] ? gotToNum(currentSlide + 1) : gotToNum(0);
const goToPrevious = () => currentSlide === 0 ? gotToNum(slides.length - 1) : gotToNum(currentSlide - 1);

const gotToNum = (num) => {
  currentSlide = num;
  nextSlide = slides[currentSlide + 1] ? currentSlide + 1 : 0;
  previousSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  updateSlides();
}

const updateSlides = () => {
  slides.forEach((slide) => slide.classList.remove('active', 'next', 'previous'));
  slides[currentSlide].classList.add('active');
  slides[nextSlide].classList.add('next');
  slides[previousSlide].classList.add('previous');
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => i === 0 ? goToPrevious() : goToNext());
}

updateSlides();
const slides = document.querySelectorAll('.review-item');
const buttons = document.querySelectorAll('.slide-ctrl-container button');

/* Initializing the Values */
let currentSlide = Math.floor(Math.random() * slides.length);
let nextSlide = slides[currentSlide + 1] ? currentSlide + 1 : 0;
let previousSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;

// create event listener for buttons left/right
// go to next();
// go to previous();
// update indexes(param);
// update css();

// -- decide how to call the previous/next
// -- update variables
// [currentIndex] = [newIndex];
// update the css

const goToNext = () => slides[currentSlide + 1] ? gotToNum(currentSlide + 1) : gotToNum(0);
const goToPrevious = () => currentSlide === 0 ? gotToNum(slides.length - 1) : gotToNum(currentSlide - 1);

const gotToNum = (num) => {
  currentSlide = num;
  nextSlide = slides[currentSlide + 1] ? currentSlide + 1 : 0;
  previousSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  updateClasses();
}

const updateClasses = () => {
  for (let slide of slides) {
    if (slide.className.includes('active')) {
      slide.classList.remove('active');
    }
    if (slide.className.includes('next')) {
      slide.classList.remove('next');
    }
    if (slide.className.includes('previous')) {
      slide.classList.remove('previous');
    }
  }
  slides[currentSlide].classList.add('active');
  slides[nextSlide].classList.add('next');
  slides[previousSlide].classList.add('previous');
  console.log(slides);
}

updateClasses();

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => i === 0 ? goToPrevious() : goToNext());
}
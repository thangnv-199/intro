const menu = document.querySelector('.menu');
const menuOpenBtn = document.querySelector('.menu-open');
const menuCloseBtn = document.querySelector('.menu-close');

const testimonialPrevBtn = document.querySelector('.testimonial-button.--prev');
const testimonialNextBtn = document.querySelector('.testimonial-button.--next');
const testimonialSlider = document.querySelector('.testimonial-list');
const testimonialContents = document.querySelectorAll('.testimonial-content');
const sliderLength = testimonialContents.length
const testimonialContentWidth = testimonialSlider.offsetWidth;
let index = 0;

menuOpenBtn.addEventListener('click', function() {
    menu.classList.add('--open');
})

menuCloseBtn.addEventListener('click', function() {
    menu.classList.remove('--open');
})

testimonialPrevBtn.addEventListener('click', function() {
    handleChangeSlider('prev');
    index === 0
    ? testimonialPrevBtn.classList.add('disabled')
    : testimonialNextBtn.classList.remove('disabled')
})

testimonialNextBtn.addEventListener('click', function() {
    handleChangeSlider('next');
    index === 2
    ? testimonialNextBtn.classList.add('disabled')
    : testimonialPrevBtn.classList.remove('disabled')
})

function handleChangeSlider(button) {
    button === 'prev' ? index-- : index++;
    const translateX = testimonialContentWidth * index;
    testimonialSlider.style.transform = `translateX(-${translateX}px)`;
}



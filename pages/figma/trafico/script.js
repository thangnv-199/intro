const slider = document.querySelector('.about2-slider .slider-list');
const sliderItems = document.querySelectorAll('.about2-slider .slider-item');
const prevButton = document.querySelector('.about2-prev-button');
const nextButton = document.querySelector('.about2-next-button');

const handleSlider = {
    init: function () {
        this.width = sliderItems[0].offsetWidth;
        this.length = sliderItems.length;
        this.currentIndex = 0;
    },

    handleEvents: function () {

        nextButton.addEventListener('click', () => {
            this.currentIndex++;
            this.translateX(this.currentIndex);
            this.currentIndex === this.length - 1
            ? nextButton.classList.add('disabled')
            : prevButton.classList.remove('disabled')
        })

        prevButton.addEventListener('click', () => {
            this.currentIndex--;
            this.translateX(this.currentIndex);
            this.currentIndex === 0
            ? prevButton.classList.add('disabled')
            : nextButton.classList.remove('disabled')
        })
    },

    translateX: function (index) {
        const x = -1 * this.width * index;
        slider.style.transform = `translateX(${x + 20}px)`;
    },

    start: function () {
        this.init();
        this.handleEvents();
    },
}
handleSlider.start();

const questtions = document.querySelectorAll('.faqs-item-header');
const faqsIcons = document.querySelectorAll('.faqs-icon');
const isOpens = new Array(faqsIcons.length).fill(false);
isOpens[0] = true;

questtions.forEach((question, index) => {
    question.addEventListener('click', function() {
        this.parentNode.classList.toggle('--open');
        isOpens[index]
        ? faqsIcons[index].setAttribute('class', 'fas fa-plus faqs-icon')
        : faqsIcons[index].setAttribute('class', 'fas fa-minus faqs-icon')
        isOpens[index] = !isOpens[index];
    })
})
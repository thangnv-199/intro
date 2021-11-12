const dots = document.querySelector('.dots');
const slider = document.querySelector('.testimonial-list');
const sliderItems = document.querySelectorAll('.testimonial-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

const handleSlider = {
    init: function() {
        this.currentIndex = 0;
        this.length = sliderItems.length;
        this.width = sliderItems[0].offsetWidth;
        this.dotItems = null;
    },

    handleEvents: function(){
        nextButton.addEventListener('click', () => {
            this.currentIndex = ++this.currentIndex % this.length;
            this.translateX(this.currentIndex);
            this.handleDot(this.currentIndex);
        
            this.currentIndex === this.length - 1 
            ? nextButton.classList.add('disabled')
            : prevButton.classList.remove('disabled')
        })

        prevButton.addEventListener('click', () => {
            this.currentIndex = --this.currentIndex % this.length
            this.translateX(this.currentIndex);
            this.handleDot(this.currentIndex);
        
            this.currentIndex === 0 
            ? prevButton.classList.add('disabled')
            : nextButton.classList.remove('disabled')
        })

        this.dotItems.forEach((dot, index) => {
            dot.addEventListener('click', () => {

                this.currentIndex = index;
                this.handleDot(this.currentIndex);
                this.translateX(this.currentIndex);

                if (this.currentIndex === this.length - 1 ) {
                    nextButton.classList.add('disabled')
                    prevButton.classList.remove('disabled')
                } else if (this.currentIndex === 0) {
                    prevButton.classList.add('disabled')
                    nextButton.classList.remove('disabled')
                } else {
                    prevButton.classList.remove('disabled')
                    nextButton.classList.remove('disabled')
                }
            })
        })
    },

    generatorDot: function() {
        let html = ``;
        for (let i = 0; i < this.length; i++) {
            html += `<div class="dot"></div>`
        }
        dots.innerHTML = html;
        this.dotItems = document.querySelectorAll('.dot');
        this.dotItems[this.currentIndex].classList.add('--active');
        
    },

    handleDot: function(index) {
        document.querySelector('.dot.--active').classList.remove('--active');
        this.dotItems[index].classList.add('--active');
    },

    translateX: function(number) {
        const x = -1 * (this.width + 20) * number;
        slider.style.transform = `translateX(${x}px)`;
    },

    start: function() {
        this.init();
        this.generatorDot();
        this.handleEvents();
    }
}

handleSlider.start();
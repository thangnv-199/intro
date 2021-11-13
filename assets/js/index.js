const jsSliderTrack = document.querySelector('.js-slider .slider-track');
const figmaSliderTrack = document.querySelector('.figma-slider .slider-track');
const webSliderTrack = document.querySelector('.web-slider .slider-track');
const psdSliderTrack = document.querySelector('.psd-slider .slider-track');

const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.tab');
const navBtns = document.querySelectorAll('.nav-item');
const content = document.querySelector('.content');


const app = {
    init: function () {
        this.isSliderDraggable = false;
    },

    handleEvents: function () {
        [jsSliderTrack, figmaSliderTrack, webSliderTrack, psdSliderTrack].forEach(slider => {
            this.draggbleAxisX(slider);
            slider.querySelectorAll('.slider-image').forEach(image => {
                image.addEventListener('click', (e) => {
                    this.isSliderDraggable && e.preventDefault();
                })
            })
        });

        navBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {

                document.querySelector('.tab.--show').classList.remove('--show');
                tabs[index].classList.add('--show');

                document.querySelector('.nav-item.--active').classList.remove('--active');
                btn.classList.add('--active');

                this.contentScrollToTop();
            })
        })

        // this.observe(nav, () => {
        //     const position = nav.getBoundingClientRect();
        //     if (position.top < 0) {
        //         nav.style.position = 'fixed';
        //         nav.style.top = '30px';
        //         console.log(1)
        //     } else {
        //         console.log(2)
        //     }
        // }, {
        //     threshold: 1,
        // })
    },

    contentScrollToTop: function() {
        const bodyRect = document.body.getBoundingClientRect()
        const contentRect = content.getBoundingClientRect()
        const offset = contentRect.top - bodyRect.top;

        window.scrollTo({
            top: offset - 20, 
            behavior: 'smooth'
        })
    },

    observe: function(element, callback, options) {
        const observers = new IntersectionObserver((entries, observer) => {
            entries.forEach(callback)
        }, options)
        observers.observe(element);
    },

    draggbleAxisX: function (element) {
        let isDown = false;
        let startX;
        let scrollLeft;

        element.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - element.offsetLeft;
            scrollLeft = element.scrollLeft;
        });

        element.addEventListener('mouseleave', () => {
            isDown = false;
            setTimeout(() => this.isSliderDraggable = false, 200)
        });

        element.addEventListener('mouseup', () => {
            isDown = false;
            setTimeout(() => this.isSliderDraggable = false, 200)
        });

        element.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - element.offsetLeft;
            const move = x - startX;
            if (move > 10 || move < -10) this.isSliderDraggable = true;
            element.scrollLeft = scrollLeft - move;
        });
    },

    start: function () {
        this.init();
        this.handleEvents();
    },
}

app.start();
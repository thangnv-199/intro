const bannerSlider1 = document.querySelector('.banner-slider');
const bannerSlider2 = document.querySelector('.mall-slider');

function handleSlider(slider, options) {
    const handle = {
        init: function () {
            this.slider = slider;
            this.sliderList = this.slider.querySelector('.slider-list');
            this.sliderTrack = this.slider.querySelector('.slider-track');
            this.sliderItems = this.slider.querySelectorAll('.slider-item');
            this.sliderLinks = this.slider.querySelectorAll('.slider-link');
            
            this.dotsGroup = this.slider.querySelector('.dots');
            this.dotItems = null;
            this.prevBtn = this.slider.querySelector('.slider-prev-button');
            this.nextBtn = this.slider.querySelector('.slider-next-button');
    
            this.length = this.sliderItems.length;
            this.width = this.sliderItems[0].clientWidth;
    
            this.currentIndex = 0;
            this.isSliderDraggable = false;
        },
    
        handleEvents: function () {
            this.nextBtn.addEventListener('click', () => {
                this.currentIndex = ++this.currentIndex % this.length;
                this.scrollX(this.currentIndex);
                this.handleDot(this.currentIndex);
                this.checkCurrentIndex();
            })
    
            this.prevBtn.addEventListener('click', () => {
                this.currentIndex = --this.currentIndex % this.length;
                this.scrollX(this.currentIndex);
                this.handleDot(this.currentIndex);
                this.checkCurrentIndex();
            })

            this.dotItems.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    this.currentIndex = index;
                    this.scrollX(this.currentIndex);
                    this.handleDot(this.currentIndex);
                    this.checkCurrentIndex();
                })
            })
    
            if (window.innerWidth > 1023) {
                this.sliderLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        this.isSliderDraggable && e.preventDefault();
                    })
                })

                if (options?.draggble) {
                    this.draggbleAxisX(this.sliderTrack);
                }
            }
        },
    
        checkCurrentIndex: function () {
            if (this.currentIndex === this.length - 1) {
                this.nextBtn.classList.add('--disabled')
                this.prevBtn.classList.remove('--disabled')
            } else if (this.currentIndex === 0) {
                this.prevBtn.classList.add('--disabled')
                this.nextBtn.classList.remove('--disabled')
            } else {
                this.prevBtn.classList.remove('--disabled')
                this.nextBtn.classList.remove('--disabled')
            }
        },
    
        createDot: function () {
            let html = ``;
            for (let i = 0; i < this.length; i++) {
                html += `<div class="dot"></div>`
            }
            this.dotsGroup.innerHTML = html;
            this.dotItems = this.dotsGroup.querySelectorAll('.dot');
            this.dotItems[this.currentIndex].classList.add('--active');
    
        },

        handleDot: function (index) {
            this.dotsGroup.querySelector('.dot.--active').classList.remove('--active');
            this.dotItems[index].classList.add('--active');
        },
    
        scrollX: function (number) {
            const x = this.width * number;
            this.sliderTrack.scroll({
                left: x,
                behavior: 'smooth'
            });
        },

        autoplay: function (ms) {
            setInterval(() => {
                this.currentIndex = ++this.currentIndex % this.length;
                this.handleDot(this.currentIndex);
                this.scrollX(this.currentIndex);
                this.checkCurrentIndex();
            }, ms)
        },
    
        draggbleAxisX: function (element) {
            let isDown = false;
            let startX;
            let scrollLeft;
            let move;
    
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
                setTimeout(() => this.isSliderDraggable = false, 200);
                if (!move) return;
                if (move < -1 * this.width / 5 && this.currentIndex !== this.length - 1) {
                    this.currentIndex++;
                } else if (move > this.width / 5 && this.currentIndex !== 0) {
                    this.currentIndex--;
                }
                
                this.scrollX(this.currentIndex);
                this.handleDot(this.currentIndex);
                this.checkCurrentIndex();
                move = null;
            });
    
            element.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - element.offsetLeft;
                move = x - startX;
                if (move > 10 || move < -10) this.isSliderDraggable = true;
                element.scrollLeft = scrollLeft - move;
            });
        },
    
        start: function () {
            this.init();
            this.createDot();
            this.handleEvents();
            if (options?.autoplay) {
                this.autoplay(options.autoplaySpeed);
            }
        }
    }
    return handle.start();    
}

handleSlider(bannerSlider1, {
    autoplay: true,
    autoplaySpeed: 10000,
    draggble: true,
});

handleSlider(bannerSlider2, {
    autoplay: true,
    autoplaySpeed: 10000,
    draggble: true,
});

$('.directory-list').slick({
    infinite: false,
    slidesToShow: 10,
    slidesToScroll: 10,
    prevArrow:"<button type='button' class='slick-prev prev-button'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next next-button'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
          }
        }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
      ]
})

$('.flash-sale-list').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow:"<button type='button' class='slick-prev prev-button'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next next-button'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
      ]
})

$('.search-top-list').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow:"<button type='button' class='slick-prev prev-button'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next next-button'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
      ]
})
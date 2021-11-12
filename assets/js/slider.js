const detectiveStoreSlider = document.querySelector('.slider.detectiveStoreSlider');
const classicStoreSlider = document.querySelector('.slider.classicStoreSlider');
const inspirationSlider = document.querySelector('.slider.inspirationSlider');

function handleSlider(slider) {

    const dkm = {
        init: function () {
            this.slider = slider;
            this.sliderTrack = this.slider.querySelector('.slider-track');
            this.sliderList = this.slider.querySelector('.slider-list');
            this.sliderItems = this.slider.querySelectorAll('.slider-item');
            this.sliderLinks = this.slider.querySelectorAll('.slider-link');
            this.length = this.sliderItems.length;
            this.width = this.sliderItems[0].clientWidth;

            this.dotsGroup = this.slider.querySelector('.dots');
            this.dotItems = null;
            this.prevBtn = this.slider.querySelector('.arrow.prev');
            this.nextBtn = this.slider.querySelector('.arrow.next');

            this.currentIndex = 0;
            this.isSliderDraggable = false;
        },

        handleEvents: function () {
            this.nextBtn.addEventListener('click', () => {
                this.currentIndex++;
                this.scrollX(this.currentIndex);
                this.handleDot(this.currentIndex);
                this.checkCurrentIndex();
            })

            this.prevBtn.addEventListener('click', () => {
                this.currentIndex--;
                this.scrollX(this.currentIndex);
                this.handleDot(this.currentIndex);
                this.checkCurrentIndex();
            })

            this.dotItems.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    this.currentIndex = index;
                    this.handleDot(this.currentIndex);
                    this.scrollX(this.currentIndex);
                    this.checkCurrentIndex();
                })
            })

            this.sliderLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    this.isSliderDraggable && e.preventDefault();
                })
            })

            this.mobileAndTabletCheck()
            ? this.sliderTrack.style.overflow = 'hidden'
            : this.draggbleAxisX(this.sliderTrack);
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

        mobileAndTabletCheck: function () {
            let check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        },

        start: function () {
            this.init();
            this.createDot();
            this.handleEvents();
        }
    }
    return dkm.start();
}

handleSlider(detectiveStoreSlider);
handleSlider(classicStoreSlider);
handleSlider(inspirationSlider);
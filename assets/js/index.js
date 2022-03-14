const jsSliderTrack = document.querySelector('.js-slider .slider-track');
const reactSliderTrack = document.querySelector('.react-slider .slider-track');
const figmaSliderTrack = document.querySelector('.figma-slider .slider-track');
const webSliderTrack = document.querySelector('.web-slider .slider-track');
const psdSliderTrack = document.querySelector('.psd-slider .slider-track');

const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.tab');
const navBtns = document.querySelectorAll('.nav-item');
const content = document.querySelector('.content');
const modal = document.querySelector('.modal');

const app = {
  init: function () {
    this.isSliderDraggable = false;

  },

  handleEvents: function () {
    [jsSliderTrack, figmaSliderTrack,
      webSliderTrack, psdSliderTrack, reactSliderTrack
    ].forEach(slider => {
      this.draggbleAxisX(slider);
      slider.querySelectorAll('.slider-link').forEach(image => {
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

    document.querySelectorAll('.open-modal-button').forEach(btn => {
      btn.addEventListener('click', () => {
        this.openModal(btn.dataset.src);
      })
    })

    modal.querySelector('.modal-overlay').addEventListener('click', () => {
      this.closeModal();
    })
  },

  contentScrollToTop: function () {
    const bodyRect = document.body.getBoundingClientRect()
    const contentRect = content.getBoundingClientRect()
    const offset = contentRect.top - bodyRect.top;

    window.scrollTo({
      top: offset - 20,
      behavior: 'smooth'
    })
  },

  openModal: function (src) {
    modal.classList.add('--open');
    modal.querySelector('.modal-video').src = src;
  },

  closeModal: function () {
    modal.classList.remove('--open');
    modal.querySelector('.modal-video').src = '';
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

  initSlider: function (element) {
    createSlider(element, {
      infinite: true,
      dots: true,
      slidesToShow: 1,
      prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
      nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
    });
  },

  start: function () {
    this.init();
    this.initSlider(inspirationSlider);
    this.initSlider(detectiveStoreSlider);
    this.initSlider(classicStoreSlider);
    this.handleEvents();
  },
}

app.start();
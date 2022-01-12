// const nav = document.querySelector('.nav-list');

const app = {
    init() {
    },

    handleEvents() {
        document.querySelectorAll('.suggestion-tab-item').forEach((tab, index) => {
            tab.addEventListener('click', () => {
                document.querySelector('.suggestion-tab-item.--active').classList.remove('--active');
                tab.classList.add('--active');
                render.suggestionList(SUGGESTION_DATA[index].items);
            })
        });

        // let x = 0;
        // document.querySelector('.nav-button.next').addEventListener('click', () => {
        //     x++;
        //     nav.setAttribute('style', `transform: translateX(-${x * nav.offsetWidth}px)`)
        // })
        // document.querySelector('.nav-button.prev').addEventListener('click', () => {
        //     x--;
        //     nav.setAttribute('style', `transform: translateX(-${x * nav.offsetWidth}px)`)
        // })
    },

    generateSlider() {
        // createSlider(document.querySelector('.nav-list'), {
        //     arrows: false,
        //     dots: false,
        //     slidesToShow: 12,
        //     slidesToScroll: 12,
        // })

        createSlider(banner1Slider, {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
        })

        createSlider(homeDealList, {
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>`,
            nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>`,
            responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },]
        })

        createSlider(brandBanner, {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            prevArrow: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>`,
            nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>`,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },]
        })

        createSlider(trendShoppingList, {
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>`,
            nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>`,
            responsive: [{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },]
        })

        createSlider(document.querySelector('.banner4-list'), {
            infinite: true,
            arrows: false,
            dots: false,
            slidesToShow:3,
            slidesToScroll:3,
            responsive: [{
                breakpoint: 1023,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 767,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },]
        })
    },

    start() {
        this.init();
        this.generateSlider();
        this.handleEvents();
    },
}

app.start();
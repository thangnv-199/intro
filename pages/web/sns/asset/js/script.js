// furniture subnav
const furnitureElement = document.querySelector(".furniture");
const furnitureSubnavElement = document.querySelector(".furniture__subnav");

furnitureElement.onmouseover = function () {
    furnitureSubnavElement.classList.add("furniture__subnav--active");
};

furnitureElement.onmouseout = function () {
    furnitureSubnavElement.classList.remove("furniture__subnav--active");
};

furnitureSubnavElement.onmouseover = function () {
    furnitureSubnavElement.classList.add("furniture__subnav--active");
};

furnitureSubnavElement.onmouseout = function () {
    furnitureSubnavElement.classList.remove("furniture__subnav--active");
};


// bedroom subnav
const bedroomElement = document.querySelector(".bedroom");
const bedroomSubnavElement = document.querySelector(".bedroom__subnav");

bedroomElement.onmousemove = function () {
    bedroomSubnavElement.classList.add("bedroom__subnav--active");
};

bedroomElement.onmouseout = function () {
    bedroomSubnavElement.classList.remove("bedroom__subnav--active");
};

bedroomSubnavElement.onmousemove = function () {
    bedroomSubnavElement.classList.add("bedroom__subnav--active");
};

bedroomSubnavElement.onmouseout = function () {
    bedroomSubnavElement.classList.remove("bedroom__subnav--active");
};


// shop subnav
const shopElement = document.querySelector(".shop");
const shopSubnavElement = document.querySelector(".shop__subnav");

shopElement.onmousemove = function () {
    shopSubnavElement.classList.add("shop__subnav--active");
};

shopElement.onmouseout = function () {
    shopSubnavElement.classList.remove("shop__subnav--active");
};

shopSubnavElement.onmousemove = function () {
    shopSubnavElement.classList.add("shop__subnav--active");
};

shopSubnavElement.onmouseout = function () {
    shopSubnavElement.classList.remove("shop__subnav--active");
};


// shop subnav
const shortcodesElement = document.querySelector(".shortcodes");
const shortcodesSubnavElement = document.querySelector(".shortcodes__subnav");

shortcodesElement.onmousemove = function () {
    shortcodesSubnavElement.classList.add("shortcodes__subnav--active");
};

shortcodesElement.onmouseout = function () {
    shortcodesSubnavElement.classList.remove("shortcodes__subnav--active");
};

shortcodesSubnavElement.onmousemove = function () {
    shortcodesSubnavElement.classList.add("shortcodes__subnav--active");
};

shortcodesSubnavElement.onmouseout = function () {
    shortcodesSubnavElement.classList.remove("shortcodes__subnav--active");
};

const navMainMobileBtns = document.querySelectorAll(".nav-main__mobile-btn span");
const subnavMainMobiles = document.querySelectorAll(".subnav__mobile");
var length2 = navMainMobileBtns.length;
var isOpen = new Array(length2).fill(false);

navMainMobileBtns.forEach((item, index) => {
    item.onclick = function () {
        subnavMainMobiles[index].classList.toggle("subnav__mobile--active");
        if (isOpen[index]) {
            item.innerHTML = "+";
            isOpen[index] = false;
        } else {
            item.innerHTML = "--";
            isOpen[index] = true;
        }
    };
});

const app = {

    init() {
        this.products = [{
            image: './asset/img/img_content/10-215x260.jpg',
            name: 'Modular Modern',
            price: '20.00',
            oldPrice: '30.00',
        },{
            image: './asset/img/img_content/24-215x260.jpg',
            name: 'Modular Modern',
            price: '5.00',
            oldPrice: '10.00',
        },{
            image: './asset/img/img_content/19-215x260.jpg',
            name: 'Modular Modern',
            price: '7.00',
        },{
            image: './asset/img/img_content/15-215x260.jpg',
            name: 'Modular Modern',
            price: '10.00',
        },{
            image: './asset/img/img_content/26-215x260.jpg',
            name: 'Modular Modern',
            price: '22.00',
            oldPrice: '33.00',
        },{
            image: './asset/img/img_content/3-215x260.jpg',
            name: 'Modular Modern',
            price: '50.00',
        },{
            image: './asset/img/img_content/28-92x110.jpg',
            name: 'Modular Modern',
            price: '15.00',
        },{
            image: './asset/img/img_content/11-215x260.jpg',
            name: 'Modular Modern',
            price: '8.00',
        },]
    },

    handleEvents() {
        document.querySelector('.loadmore-products').addEventListener('click', () => {
            this.renderProduct();
        })

        document.querySelectorAll('.content-tab-item').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelector('.content-tab-item.content-tab-item--active').classList.remove('content-tab-item--active')
                tab.classList.add('content-tab-item--active');
                document.querySelector('.content-products-list').innerHTML = '';
                this.renderProduct();
            })
        })
    },

    randomProduct() {
        const random = Math.floor(Math.random() * this.products.length);
        return this.products[random];
    },

    renderProduct() {
        let html = '';
        for (let i = 0; i < 5; i++) {
            const { image, price, oldPrice } = this.randomProduct();
            html += `
                <div class="content-products l-2-4 m-4 c-6 m-4 c-6">
                    <div class="content-products__img">
                        <a href="#!">
                            <img src="${image}" alt="">

                        </a>
                        <div class="content-products__sale">
                            SALE!
                        </div>
                        <div class="products-hover">
                            <a href="#!" class="addToCart">
                                <i class="fas fa-shopping-cart"></i>
                                <span>ADD TO CART</span>
                            </a>
                            <div class="products-action row">
                                <div class="col l-4">
                                    <a class="products-action-link" href="#!">
                                        <i class="fas fa-heart"></i>
                                    </a>
                                </div>
                                <div class="col l-4">
                                    <a class="products-action-link" href="#!">
                                        <i class="fas fa-not-equal"></i>
                                    </a>
                                </div>
                                <div class="col l-4">
                                    <a class="products-action-link" href="#!">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-products__info">

                        <p class="content-products__name">Modular Modern</p>
                        <p class="content-products__price">
                            ${oldPrice ? `<span class="old-price">$ ${oldPrice}</span>` : ''}
                            $ ${price}
                        </p>
                        <div class="content-products__favourite">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>

                </div>
            `;
        };
        document.querySelector('.content-products-list').innerHTML += html;
    },

    renderMostView() {
        let html = '';
        for (let i = 0; i < 20; i++) {
            const { image, price, oldPrice } = this.randomProduct();
            html += `
                <div class="mostView-product-item">
                    <div class="mostView-product__img">
                        <a href="#!">
                            <img src="${image}" alt="">
                        </a>
                    </div>
                    <div class="mostView-product__info">
                        <a href="#!" class="mostView-product__name">Modular Modern</a>
                        <p class="mostView-product__price">
                            ${oldPrice ? `<span class="old-price">$ ${oldPrice}</span>` : ''}
                            $ ${price}
                            </p>
                        <div class="mostView-product__favourite">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <a href="#!" class="mostView-product__btn">
                            <i class="fas fa-shopping-cart"></i>
                            <p>ADD TO CART</p>
                        </a>
                    </div>
                </div>
            `;
        };
        document.querySelector('.mostView-products').innerHTML = html;
    },

    renderSuggestions() {
        let html = '';
        for (let i = 0; i < 20; i++) {
            const { image, price, oldPrice } = this.randomProduct();
            html += `
                <div class="content-products">
                    <div class="content-products__img">
                        <a href="#!">
                            <img src="${image}" alt="">
                        </a>
                        <div class="content-products__sale">
                            SALE!
                        </div>
                        <div class="products-hover">
                            <a href="#!" class="addToCart">
                                <i class="fas fa-shopping-cart"></i>
                                <span>ADD TO CART</span>
                            </a>
                            <div class="products-action row">
                                <div class="col l-4">
                                    <a class="products-action-link" href="#!">
                                        <i class="fas fa-heart"></i>
                                    </a>
                                </div>
                                <div class="col l-4">
                                    <a class="products-action-link" href="#!">
                                        <i class="fas fa-not-equal"></i>
                                    </a>
                                </div>
                                <div class="col l-4">
                                    <a class="products-action-link" href="#!">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-products__info">
                        <p class="content-products__name">Modular Modern</p>
                        <p class="content-products__price">
                            ${oldPrice ? `<span class="old-price">$ ${oldPrice}</span>` : ''}
                            $ ${price}
                        </p>
                        <div class="content-products__favourite">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>

                </div>
            `;
        };
        document.querySelector('.suggest-collection-list').innerHTML = html;
    },

    render() {
        this.renderProduct();
        this.renderMostView();
        this.renderSuggestions();
    },

    initialSlider() {
        createSlider(document.getElementById('slides'), {
            dots: true,
            infinite: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
        })

        createSlider(document.querySelector('.suggest-collection-list'), {
            infinite: true,
            dots: false,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: '<i class="fas fa-chevron-left"></i>',
            nextArrow: '<i class="fas fa-chevron-right"></i>',
            responsive:[
               
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 739,
                    settings:{
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                }
            ],
        })

        createSlider(document.querySelector('.mostView-products'), {
            dots: true,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 3,
            rows: 2,
            arrows: true,
            draggable: true,
            prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
            nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
            appendArrows: document.querySelector('.mostView-btns'),
            responsive:[
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 739,
                    settings:{
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                }
            ],
        })

        createSlider(document.querySelector('.lastPost__list'), {
            dots: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            draggable: false,
            prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
            nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
            appendArrows: document.querySelector('.lastPost-btns'),
            responsive:[
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 739,
                    settings:{
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                }
            ],
        })
        
        createSlider(document.querySelector('.content-companys-list'), {
            infinite: true,
            arrows: false,
            dots: false,
            draggable: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive:[
                {
                    breakpoint: 1023,
                    settings:{
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 739,
                    settings:{
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                }
            ],
        })
    },

    start() {
        this.init();
        this.render();
        this.initialSlider();
        this.handleEvents();
    },
}

app.start();
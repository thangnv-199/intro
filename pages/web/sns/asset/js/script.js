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




// content


// slider

// add products
var loadMoreProductBtn = document.querySelector(".loadmore-products");
var contentProductsList = $(".content-products-list");
loadMoreProductBtn.onclick = function () {
    contentProductsList.append(`
    <div class="content-products col l-2-4 m-4 c-6">
                    <div class="content-products__img">
                        <a href="">
                            <img src="./asset/img/img_content/17-215x260.jpg" alt="">

                        </a>
                        <div class="content-products__sale">
                            SALE!
                        </div>
                        <div class="products-hover">
                            <a href="" class="addToCart">
                                <i class="fas fa-shopping-cart"></i>
                                <span>ADD TO CART</span>
                            </a>
                            <div class="products-action row">
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-heart"></i>
                                    </a>
                                </div>
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-not-equal"></i>
                                    </a>
                                </div>
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-products__info">

                        <p class="content-products__name">Modular Modern</p>
                        <p class="content-products__price"><span class="old-price">$ 9.00</span>$ 7.00</p>
                        <div class="content-products__favourite">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>

                </div>

                <div class="content-products col l-2-4 m-4 c-6">
                    <div class="content-products__img">
                        <a href="">
                            <img src="./asset/img/img_content/26-215x260.jpg" alt="">

                        </a>
                        <div class="products-hover">
                            <a href="" class="addToCart">
                                <i class="fas fa-shopping-cart"></i>
                                <span>ADD TO CART</span>
                            </a>
                            <div class="products-action row">
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-heart"></i>
                                    </a>
                                </div>
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-not-equal"></i>
                                    </a>
                                </div>
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-products__info">

                        <p class="content-products__name">Modular Modern</p>
                        <p class="content-products__price">$ 10.00</p>
                        <div class="content-products__favourite">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>

                </div>

                <div class="content-products col l-2-4 m-4 c-6">
                    <div class="content-products__img">
                        <a href="">
                            <img src="./asset/img/img_content/24-215x260.jpg" alt="">

                        </a>
                        <div class="products-hover">
                            <a href="" class="addToCart">
                                <i class="fas fa-shopping-cart"></i>
                                <span>ADD TO CART</span>
                            </a>
                            <div class="products-action row">
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-heart"></i>
                                    </a>
                                </div>
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-not-equal"></i>
                                    </a>
                                </div>
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-products__info">

                        <p class="content-products__name">Modular Modern</p>
                        <p class="content-products__price">$ 24.00</p>
                        <div class="content-products__favourite">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>

                </div>

                <div class="content-products col l-2-4 m-4 c-6">
                    <div class="content-products__img">
                        <a href="">
                            <img src="./asset/img/img_content/10-215x260.jpg" alt="">

                        </a>
                        <div class="content-products__sale">
                            SALE!
                        </div>
                        <div class="products-hover">
                            <a href="" class="addToCart">
                                <i class="fas fa-shopping-cart"></i>
                                <span>ADD TO CART</span>
                            </a>
                            <div class="products-action row">
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-heart"></i>
                                    </a>
                                </div>
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-not-equal"></i>
                                    </a>
                                </div>
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-products__info">

                        <p class="content-products__name">Modular Modern</p>
                        <p class="content-products__price"><span class="old-price">$ 3.00</span>$ 2.00</p>
                        <div class="content-products__favourite">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>

                </div>

                <div class="content-products col l-2-4 m-4 c-6">
                    <div class="content-products__img">
                        <a href="">
                            <img src="./asset/img/img_content/3-215x260.jpg" alt="">

                        </a>
                        <div class="products-hover">
                            <a href="" class="addToCart">
                                <i class="fas fa-shopping-cart"></i>
                                <span>ADD TO CART</span>
                            </a>
                            <div class="products-action row">
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-heart"></i>
                                    </a>
                                </div>
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-not-equal"></i>
                                    </a>
                                </div>
                                <div class="col l-4">
                                    <a class="products-action-link" href="">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-products__info">

                        <p class="content-products__name">Modular Modern</p>
                        <p class="content-products__price">$ 9.00</p>
                        <div class="content-products__favourite">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>

                </div>
    `);
}

// new product
var newProductImg = document.querySelector(".new-product-img > img");

newProductImg.onclick = function () {
    newProductImg.classList.add("vivify", "flip");

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



// slick slider

$("#slides").slick({
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$(".content-products-list2").slick({
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    auplaySpeed: 10000,
    arrows: false,
    responsive:[
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 739,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        }
    ],
});

$(".lastPost__list").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    auplaySpeed: 10000,
    arrows: false,
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
});

$(".content-companys-list").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    auplaySpeed: 10000,
    prevArrow: `<button type="button" class="slick-prev">Previous</button>`,
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
});

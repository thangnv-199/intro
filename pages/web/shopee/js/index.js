alert('Dữ liệu được cập nhật vào ngày 11/11/2021');
const app = {
    init: function () {

    },

    handleEvents: function () {
        document.querySelector('.suggestions-more').addEventListener('click', () => {
            const LIMIT = 12;
            const length = render.suggestionsData.length;
            for (let i = 0; i < LIMIT; i++) {
                const random = Math.floor(Math.random() * length);
                const product = render.suggestionsData[random];
                
                suggestionsList.innerHTML += this.suggestionsProduct(product);
            }
        })
    },

    suggestionsProduct: function({sale, imageSrc, name, price, selled}) {
        return `
            <a href="#!" class="product">
                <span class="sale-logo">
                    <span class="sale-percent">${sale}%</span>
                    <span class="sale-text">giảm</span>
                </span>
                <div class="product-image">
                    <img src="${imageSrc}" alt="">
                </div>
                <div class="product-info">
                    <p class="product-name">${name}</p>
                    <div class="product-footer">
                        <span class="product-price">
                            <sup>đ</sup>
                            ${price}
                        </span>
                        <span class="product-selled">Đã bán ${selled}k</span>
                    </div>
                </div>
                <div href="#!" class="product-search">
                    Tìm sản phẩm tương tự
                </div>
            </a>
        `;
    },

    initialSlider: function() {
        createSlider(bannerSlider1List, {
            arrows: true,
            infinite: true,
            autoplay: true,
            pauseOnHover: true,
            draggable: false,
            prevArrow: '<i class="fas fa-chevron-left"></i>',
            nextArrow: '<i class="fas fa-chevron-right"></i>',
        })

        createSlider(bannerSlider2List, {
            arrows: true,
            infinite: true,
            autoplay: true,
            pauseOnHover: true,
            draggable: false,
            prevArrow: '<i class="fas fa-chevron-left"></i>',
            nextArrow: '<i class="fas fa-chevron-right"></i>',
        })
        createSlider(directoryList, {
            infinite: false,
            arrows: true,
            dots: false,
            slidesToShow: 10,
            slidesToScroll: 10,
            prevArrow: '<i class="fas fa-chevron-left"></i>',
            nextArrow: '<i class="fas fa-chevron-right"></i>',
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
              ],
        })

        createSlider(flashSaleList, {
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 6,
            dots: false,
            prevArrow:"<i class='fa fa-angle-left' aria-hidden='true'>",
            nextArrow:"<i class='fa fa-angle-right' aria-hidden='true'>",
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

        createSlider(searchTopList, {
            infinite: false,
            dots: false,
            slidesToShow: 6,
            slidesToScroll: 6,
            prevArrow:"<i class='fa fa-angle-left' aria-hidden='true'>",
            nextArrow:"<i class='fa fa-angle-right' aria-hidden='true'></i>",
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
    },

    start: function () {
        this.init();
        this.handleEvents();
        this.initialSlider();
    },

}

app.start();
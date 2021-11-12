const suggestionsMoreBtn = document.querySelector('.suggestions-more');


const app = {
    init: function () {

    },

    handleEvents: function () {
        suggestionsMoreBtn.addEventListener('click', () => {
            const LIMIT = 12;
            const lengt = generate.suggestionsData.length;
            for (let i = 0; i < LIMIT; i++) {
                const random = Math.floor(Math.random() * lengt);
                const product = generate.suggestionsData[random];
                $('.suggestions-list').append(this.loadSuggestionsProduct(product));
            }
        })
    },

    loadSuggestionsProduct: function({sale, imageSrc, name, price, selled}) {
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

    start: function () {
        this.init();
        this.handleEvents();
    },

}

app.start();
const banner1Slider = document.querySelector('.banner1-slider');
const homeDealList = document.querySelector('.home-deal-list');
const brandBanner = document.querySelector('.home-brand-banner');
const trendShoppingList = document.querySelector('.trend-shopping-list');
const suggestionTabList = document.querySelector('.suggestion-tab-list'); 

const render = {

    nav() {
        let html = ''
        NAV_DATA.forEach(item => {
            html += `
                <li class="nav-item">
                    <a target="_blank" href="${item.url}" class="nav-link">${item.name}</a>
                </li>
            `
        })
        document.querySelector('.nav-list').innerHTML = html;
    },

    banner1() {
        let html = ''
        BANNER_1_SLIDER_DATA.forEach(item => {
            html += `
                <a target="_blank" href="${item.url}">
                    <img src="${item.image_url}" alt="">
                </a>
            `
        })
        banner1Slider.innerHTML = html;
        document.querySelector('.banner1-right img').src = BANNER_1_RIGHT_DATA.image_url;
    },

    homeDeal() {
        let html = ''
        HOME_DEAL_DATA.forEach(item => {
            html += `
                <li class="home-deal-item">
                    <a target="_blank" href="https://tiki.vn/${item.product.url_path}" class="home-deal-link">
                        <div class="product-image">
                            <img src="${item.product.thumbnail_url}" alt="">
                        </div>
                        <div class="py-1">
                            <span class="product-price --sale">${this.convertPrice(item.special_price)}đ</span>
                            <span class="discount-percent">-${item.discount_percent}%</span>
                        </div>
                        <div class="product-process">
                            <span>${item.progress.progress_text}</span>
                            <div style="--process: ${item.progress.ordered_percent}%" class="product-current-process"></div>
                        </div>
                    </a>
                </li>
            `
        })
        homeDealList.innerHTML = html;
    },

    banner2() {
        let html = '';
        const banner1 = BANNER_2_DATA.side_brand[0];
        const banner2 = BANNER_2_DATA.center_brand[0];
        const banner3 = BANNER_2_DATA.side_brand[1];

        [banner1, banner2, banner3].forEach(item => {
            html += `
                <a target="_blank" href="${item.url}">
                    <img src="${item.image_url}" alt="">
                </a>
            `
        });

        document.querySelector('.banner2-main').innerHTML = html;
    },

    quicklink() {
        let html = ''
        QUICKLINK_DATA.forEach(item => {
            html += `
                <li class="home-quicklink-item">
                    <a target="_blank" href="${item.url}" class="home-quicklink-link">
                        <div class="home-quicklink-image">
                            <img src="${item.image_url}" alt="">
                        </div>
                        <p class="home-quicklink-label">
                            ${item.title}
                        </p>
                    </a>
                </li>
            `
        })
        document.querySelector('.home-quicklink-list').innerHTML = html;
    },

    banner3() {
        let html = ''
        BANNER_3_DATA.forEach(item => {
            html += `
                <li>
                    <a target="_blank" href="${item.url}">
                        <img class="banner3-image" src="${item.image_url}" alt="">
                    </a>
                </li>
                
            `
        })
        document.querySelector('.banner3-list').innerHTML = html;
    },

    brandBanner() {
        let html = ''
        BRAND_DATA.banners.forEach(item => {
            html += `
                <li class="home-brand-banner-item">
                    <a target="_blank" href="${item.url}" class="nav-link">
                        <img src="${item.image_url}" />
                    </a>
                </li>
            `
        })
        brandBanner.innerHTML = html;
    },

    brandCard() {
        let html = ''
        BRAND_DATA.brand_cards.forEach(item => {
            html += `
                <li class="home-brand-card-item">
                    <a target="_blank" href="${item.url}" class="home-brand-card-link">
                        <img src="${item.image_url}" alt="">
                        <span class="home-brand-card-title">
                            ${item.title}
                        </span>
                    </a>
                </li>
            `
        })
        document.querySelector('.home-brand-card').innerHTML = html;
    },

    category() {
        let html = ''
        CATEGORY_DATA.forEach(item => {
            html += `
                <li class="category-item">
                    <a target="_blank" href="${item.url}" class="category-link">
                        <div class="category-image">
                            <img src="${item.thumbnail_url}" alt="">
                        </div>
                        <span class="category-title">${item.name}</span>
                    </a>
                </li>
            `
        })
        document.querySelector('.category-list').innerHTML = html;
    },

    trendShopping() {
        let html = ''
        TREND_SHOPPING_DATA.forEach(item => {
            html += `
                <li class="trend-shopping-item">
                    <a target="_blank" href="https://tiki.vn${item.item_url}" class="trend-shopping-link">
                        <h4 class="trend-shopping-title">${item.title}</h4>
                        <span class="trend-shopping-subtitle">${item.sub_title}</span>
                        <div class="trend-shopping-image">
                            <img src="${item.images[0]}" alt="">
                            <img src="${item.images[1]}" alt="">
                        </div>
                    </a>
                </li>
            `
        })
        trendShoppingList.innerHTML = html;
    },

    banner4() {
        let html = ''
        BANNER_4_DATA.forEach(item => {
            html += `
                <li>
                    <a target="_blank" href="${item.url}">
                        <img class="banner4-image" src="${item.image_url}" alt="">
                    </a>
                </li>
            `
        })
        document.querySelector('.banner4-list').innerHTML = html;
    },

    suggestionTab() {
        let html = ''
        SUGGESTION_DATA.forEach((item, index) => {
            html += `
                <li class="suggestion-tab-item ${index === 0 ? '--active' : ''}">
                    <div class="suggestion-tab-image">
                        <img src="${item.icon}" alt="">
                    </div>
                    <span class="suggestion-tab-name">${item.title}</span>
                </li>
            `
        })
        suggestionTabList.innerHTML = html;
    },

    suggestionList(data) {
        let html = '';
        let rating = '';
        data.forEach(item => {
            for (let i = 0; i < 5; i++) {
                if (i < ~~(item.rating_average)){
                    rating += `
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="yellow" viewBox="0 0 24 24" stroke="yellow">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    `;
                }
                else {
                    rating += `
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="#ccc" viewBox="0 0 24 24" stroke="#ccc">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    `;
                }
            }

            html += `
                <li class="product-item">
                    <a href="https://tiki.vn/${item.url_path}" target="_blank" class="product-link">
                        <div class="product-image">
                            <img src="${item.thumbnail_url}" alt="">
                        </div>
                        <div class="product-info">
                            <h6 class="product-name">${item.name}</h6>
                        <div class="flex py-1 ">
                                <div class="product-rating">
                                    ${rating}
                                </div>
                                <div class="product-selled">
                                    ${item.quantity_sold.text}
                                </div>
                        </div>
                        <div>
                            <span class="product-price ${this.checkDiscountPercent(item.discount_rate) ? '--sale' : ''}">${this.convertPrice(item.price)}đ</span>
                                ${this.checkDiscountPercent(item.discount_rate) ?
                                    '<span class="product-discount discount-percent">-50%</span>' :
                                    ''
                                }
                            </div>
                        </div>
                    </a>
                </li>
            `;

            rating = '';
        })
        document.querySelector('.suggestion .product-list').innerHTML = html;
    },

    checkDiscountPercent(percent) {
        return percent > 0;
    },

    convertPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },

    start() {
        this.nav();
        this.banner1();
        this.homeDeal();
        this.banner2();
        this.quicklink();
        this.banner3();
        this.brandBanner();
        this.brandCard();
        this.category();
        this.trendShopping();
        this.banner4();
        this.suggestionTab();
        this.suggestionList(SUGGESTION_DATA[0].items);
    },
}

render.start();
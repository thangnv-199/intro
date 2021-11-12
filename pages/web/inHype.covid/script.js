const tag = (name) => {
    const data = [{
            name: 'covid',
            color: '#994db1',
        },
        {
            name: 'video',
            color: '#0d30c3',
        },
        {
            name: 'world',
            color: '#160600',
        },
        {
            name: 'health',
            color: '#ed7e4f',
        },
        {
            name: 'medicine',
            color: '#5b4cce',
        },
        {
            name: 'music',
            color: '#ef1a1a',
        },
        {
            name: 'decor',
            color: '#ef1a1a',
        },
        {
            name: 'clothing',
            color: '#ef1a1a',
        },
        {
            name: 'accessories',
            color: '#ef1a1a',
        },
    ]
    const index = data.findIndex(i => i.name === name);
    return data[index];
}

const postList1 = document.querySelector('.post1 .post1-list');
const headlineSlider = document.querySelector('.headline-slider');
const postList2 = document.querySelector('.post2 .post2-list');
const buyList = document.querySelector('.buy .buy-list');
const postList3 = document.querySelector('.post3 .post3-list');
const post3Button = document.querySelector('.post3-button');
const postList4 = document.querySelector('.post4 .post4-list');
const postList5 = document.querySelector('.post5 .post5-list');
const latestList = document.querySelector('.latest .latest-list');
const popularList = document.querySelector('.popular .popular-list');
const trendingList = document.querySelector('.trending .trending-list');

const app = {
    init: function () {
        this.post1Data = [{
            imageSrc: './images/eaggqoiddmg-1140x675.jpg',
            tags: [tag('covid')],
            title: 'The World Is Still Far From Herd Immunity for Coronavirus',
            createdAt: 'December 10, 2019',
            readTime: 5,
        }, {
            imageSrc: './images/nqj2xwhy4k0-1140x694.jpg',
            tags: [tag('world')],
            title: 'A Coronavirus Thriller Was Finished Just Before the Shutdown',
            createdAt: 'December 10, 2019',
            readTime: 5,
        }, {
            imageSrc: './images/qi7uskbzy_a-555x360.jpg',
            tags: [tag('video')],
            title: 'The coronavirus food assistance program has processed $1.4 billion since mid-May',
            createdAt: 'December 3, 2019',
            readTime: 5,
        }, {
            imageSrc: './images/xdsd3vmzh70-555x360.jpg',
            tags: [tag('health'), tag('medicine')],
            title: 'Brazil records more than 32,000 coronavirus cases in a day',
            createdAt: 'December 2, 2019',
            readTime: 5,
        }, {
            imageSrc: './images/l8twzt4ccvq-555x360.jpg',
            tags: [tag('covid')],
            title: 'Brazil records more than 32,000 coronavirus cases in a day',
            createdAt: 'December 1, 2019',
            readTime: 5,
        }, {
            imageSrc: './images/bygtytegjbo-555x360.jpg',
            tags: [tag('world')],
            title: 'California health officer resigns amid threats over face covering order',
            createdAt: 'December 1, 2019',
            readTime: 5,
        }, {
            imageSrc: './images/nnpo-liy5au-555x360.jpg',
            tags: [tag('health')],
            title: 'US awards AstraZeneca $23 million to develop coronavirus antibody treatment',
            createdAt: 'December 1, 2019',
            readTime: 5,
        }, {
            imageSrc: './images/hfphi8zx_e4-555x360.jpg',
            tags: [tag('world')],
            title: 'China State Firm’s $6 Billion Loss Is Among Nation’s Worst Ever',
            createdAt: 'December 1, 2019',
            readTime: 5,
        }, ];
        this.headlineSliderData = [{
            imageSrc: './images/eaggqoiddmg-1140x675.jpg',
            tags: [tag('covid')],
            title: 'The World Is Still Far From Herd Immunity for Coronavirus',
            createdAt: 'December 10, 2019',
            readTime: 5,
            by: 'By inhype',
        }, {
            imageSrc: './images/nqj2xwhy4k0-1140x694.jpg',
            tags: [tag('world')],
            title: 'A Coronavirus Thriller Was Finished Just Before the Shutdown',
            createdAt: 'December 10, 2019',
            readTime: 5,
            by: 'By inhype',
        }, {
            imageSrc: './images/qi7uskbzy_a-555x360.jpg',
            tags: [tag('video')],
            title: 'The coronavirus food assistance program has processed $1.4 billion since mid-May',
            createdAt: 'December 3, 2019',
            readTime: 5,
            by: 'By inhype',
        }, {
            imageSrc: './images/xdsd3vmzh70-555x360.jpg',
            tags: [tag('health'), tag('medicine')],
            title: 'Brazil records more than 32,000 coronavirus cases in a day',
            createdAt: 'December 3, 2019',
            readTime: 5,
            by: 'By inhype',
        }, ];
        this.post2Data = [{
            imageSrc: './images/bygtytegjbo-555x360.jpg',
            tags: [tag('world')],
            title: 'California health officer resigns amid threats over face covering order',
            createdAt: 'December 10, 2019',
            by: 'Inhype',
        }, {
            imageSrc: './images/nnpo-liy5au-555x360.jpg',
            tags: [tag('health')],
            title: 'US awards AstraZeneca $23 million to develop coronavirus antibody treatment',
            createdAt: 'December 10, 2019',
            by: 'Inhype',
        }, {
            imageSrc: './images/hfphi8zx_e4-555x360.jpg',
            tags: [tag('world')],
            title: 'China State Firm’s $6 Billion Loss Is Among Nation’s Worst Ever',
            createdAt: 'Sponsored',
            by: 'Inhype',
        }, {
            imageSrc: './images/tr0pplun6pw-555x360.jpg',
            tags: [tag('world')],
            title: 'How Trump Pushed the U.S. and Iran to the Brink of War',
            createdAt: 'Sponsored',
            by: 'Inhype',
        }, ];
        this.buyData = [{
            imageSrc: './images/shop-covid-3-800x694.jpg',
            tags: [tag('music')],
            name: 'Sanitizer',
            price: '15.00',
        }, {
            imageSrc: './images/shop-cov-1-800x694.jpg',
            tags: [tag('decor')],
            name: 'Face mask',
            price: '11.15',
        }, {
            imageSrc: './images/shop-covid-2-800x694.jpg',
            tags: [tag('clothing')],
            name: 'Medicine mask',
            price: '15.00',
        }, {
            imageSrc: './images/shop-covid-3-800x694.jpg',
            tags: [tag('accessories')],
            name: 'Baby wipes',
            price: '18.00',
        }, ];

        this.post3Data = [{
            imageSrc: './images/ivrx5rndwqy-555x360.jpg',
            tags: [tag('health')],
            title: 'Two Big Drug Flops Show How Health-Care Economics Have Changed',
            createdAt: 'November 25, 2019',
            readTime: 5,
        }, {
            imageSrc: './images/r-cdupur0y0-555x360.jpg',
            tags: [tag('video')],
            title: 'Danske Offers 2,000 Bankers Option to Quit Amid Mounting Costs',
            createdAt: 'December 12, 2019',
            readTime: 8,
        }, {
            imageSrc: './images/smus_juza9i-555x360.jpg',
            tags: [tag('video')],
            title: 'Amazon’s Bezos to Face Unprecedented Protests During India Trip',
            createdAt: 'Sponsored',
            readTime: 3,
        }, ];
        this.clodePost3Data = this.post3Data;

        this.post4Data = [{
            imageSrc: './images/qi7uskbzy_a-555x360.jpg',
            tags: [tag('video')],
            title: 'The coronavirus food assistance program has processed $1.4 billion since mid-May',
            createdAt: 'November 25, 2019',
            readTime: 5,
        }, {
            imageSrc: './images/inhype1-photos-14-555x360.jpg',
            tags: [tag('medicine')],
            title: 'A beginner’s guide to customer journey maps',
            createdAt: 'Sponsored',
            readTime: 8,
        }, {
            imageSrc: './images/hfphi8zx_e4-555x360.jpg',
            tags: [tag('world')],
            title: 'China State Firm’s $6 Billion Loss Is Among Nation’s Worst Ever',
            createdAt: 'Sponsored',
            readTime: 3,
        }, {
            imageSrc: './images/lrl_nq7xbxm-555x360.jpg',
            tags: [tag('covid')],
            title: 'The Biggest Moments in 2019, Explained Through Graphics',
            createdAt: 'November 12, 2019',
            readTime: 3,
        }, {
            imageSrc: './images/x7lyx8yyvug-555x360.jpg',
            tags: [tag('world')],
            title: 'Brussels Edition: Seeking a Trade Reset',
            createdAt: 'November 07, 2019',
            readTime: 3,
        }, {
            imageSrc: './images/qi7uskbzy_a-555x360.jpg',
            tags: [tag('video')],
            title: 'The coronavirus food assistance program has processed $1.4 billion since mid-May',
            createdAt: 'November 25, 2019',
            readTime: 5,
        }, {
            imageSrc: './images/inhype1-photos-14-555x360.jpg',
            tags: [tag('medicine')],
            title: 'A beginner’s guide to customer journey maps',
            createdAt: 'Sponsored',
            readTime: 8,
        }, {
            imageSrc: './images/hfphi8zx_e4-555x360.jpg',
            tags: [tag('world')],
            title: 'China State Firm’s $6 Billion Loss Is Among Nation’s Worst Ever',
            createdAt: 'Sponsored',
            readTime: 3,
        }, {
            imageSrc: './images/lrl_nq7xbxm-555x360.jpg',
            tags: [tag('covid')],
            title: 'The Biggest Moments in 2019, Explained Through Graphics',
            createdAt: 'November 12, 2019',
            readTime: 3,
        }, {
            imageSrc: './images/x7lyx8yyvug-555x360.jpg',
            tags: [tag('world')],
            title: 'Brussels Edition: Seeking a Trade Reset',
            createdAt: 'November 07, 2019',
            readTime: 3,
        }, ];
        this.post5Data = [{
            tags: [tag('medicine')],
            title: 'CNN Agrees to Pay $76 Million to Settle Allegations It Violated Federal Labor Law',
            createdAt: 'November 15, 2019',
            readTime: 9,
        }, {
            tags: [tag('medicine'), tag('health')],
            title: 'Brazil records more than 32,000 coronavirus cases in a day',
            createdAt: 'December 2, 2019',
            readTime: 7,
        }, {
            tags: [tag('video')],
            title: 'Netflix Price Cuts Are Heating Up India’s Streaming War',
            createdAt: 'November 27, 2019',
            readTime: 5,
        }, {
            tags: [tag('world')],
            title: 'How Trump Pushed the U.S. and Iran to the Brink of War',
            createdAt: 'Sponsored',
            readTime: 7,
        }, {
            tags: [tag('health')],
            title: 'Two Big Drug Flops Show How Health-Care Economics Have Changed',
            createdAt: 'Sponsored',
            readTime: 2,
        }, {
            tags: [tag('covid')],
            title: 'This Week in Business: Flying Ubers and Pricey French Cheese',
            createdAt: 'November 11, 2019',
            readTime: 5,
        }, {
            tags: [tag('video')],
            title: 'The coronavirus food assistance program has processed $1.4 billion since mid-May',
            createdAt: 'Sponsored',
            readTime: 4,
        }, {
            tags: [tag('video')],
            title: 'Danske Offers 2,000 Bankers Option to Quit Amid Mounting Costs',
            createdAt: 'November 22, 2019',
            readTime: 5,
        }, ];
        this.latestData = [{
            imageSrc: './images/eaggqoiddmg-1140x675.jpg',
            tags: [tag('covid')],
            title: 'The World Is Still Far From Herd Immunity for Coronavirus',
            createdAt: 'November 25, 2019',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptatibus ea aliquid illum modi corporis hic a, soluta magnam, repellat maxime reprehenderit cum deleniti, tenetur saepe at porro sunt laboriosam?',
            by: 'Inhype',
            readTime: 5,
            button: true,
        }, {
            imageSrc: './images/nqj2xwhy4k0-1140x694.jpg',
            tags: [tag('world')],
            title: 'A Coronavirus Thriller Was Finished Just Before the Shutdown',
            createdAt: 'Sponsored',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptatibus ea aliquid illum modi corporis hic a, soluta magnam, repellat maxime reprehenderit cum deleniti, tenetur saepe at porro sunt laboriosam?',
            by: 'Inhype',
            readTime: 8,
            button: true,

        }, {
            imageSrc: './images/qi7uskbzy_a-555x360.jpg',
            tags: [tag('video')],
            title: 'The coronavirus food assistance program has processed $1.4 billion since mid-May',
            createdAt: 'Sponsored',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptatibus ea aliquid illum modi corporis hic a, soluta magnam, repellat maxime reprehenderit cum deleniti, tenetur saepe at porro sunt laboriosam?',
            by: 'Inhype',
            readTime: 3,
            button: true,

        }, {
            imageSrc: './images/xdsd3vmzh70-555x360.jpg',
            tags: [tag('health'), tag('medicine')],
            title: 'Brazil records more than 32,000 coronavirus cases in a day',
            createdAt: 'November 12, 2019',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptatibus ea aliquid illum modi corporis hic a, soluta magnam, repellat maxime reprehenderit cum deleniti, tenetur saepe at porro sunt laboriosam?',
            by: 'Inhype',
            readTime: 3,
            button: true,

        }, {
            imageSrc: './images/l8twzt4ccvq-555x360.jpg',
            tags: [tag('covid'), tag('video')],
            title: 'Brazil records more than 32,000 coronavirus cases in a day',
            createdAt: 'November 07, 2019',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptatibus ea aliquid illum modi corporis hic a, soluta magnam, repellat maxime reprehenderit cum deleniti, tenetur saepe at porro sunt laboriosam?',
            by: 'Inhype',
            readTime: 3,
            button: true,

        }, {
            imageSrc: './images/bygtytegjbo-555x360.jpg',
            tags: [tag('world')],
            title: 'California health officer resigns amid threats over face covering order',
            createdAt: 'November 07, 2019',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptatibus ea aliquid illum modi corporis hic a, soluta magnam, repellat maxime reprehenderit cum deleniti, tenetur saepe at porro sunt laboriosam?',
            by: 'Inhype',
            readTime: 3,
            button: true,

        }, {
            imageSrc: './images/nnpo-liy5au-555x360.jpg',
            tags: [tag('health')],
            title: 'US awards AstraZeneca $23 million to develop coronavirus antibody treatment',
            createdAt: 'November 22, 2019',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptatibus ea aliquid illum modi corporis hic a, soluta magnam, repellat maxime reprehenderit cum deleniti, tenetur saepe at porro sunt laboriosam?',
            by: 'Inhype',
            readTime: 3,
            button: true,

        }, {
            imageSrc: './images/hfphi8zx_e4-555x360.jpg',
            tags: [tag('world')],
            title: 'China State Firm’s $6 Billion Loss Is Among Nation’s Worst Ever',
            createdAt: 'November 16, 2019',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptatibus ea aliquid illum modi corporis hic a, soluta magnam, repellat maxime reprehenderit cum deleniti, tenetur saepe at porro sunt laboriosam?',
            by: 'Inhype',
            readTime: 3,
            button: true,

        }, ];
        this.popularData = [{
            imageSrc: './images/eaggqoiddmg-1140x675.jpg',
            title: 'The World Is Still Far From Herd Immunity for Coronavirus',
            createdAt: 'November 25, 2019',
        }, {
            imageSrc: './images/nqj2xwhy4k0-1140x694.jpg',
            title: 'A Coronavirus Thriller Was Finished Just Before the Shutdown',
            createdAt: 'November 25, 2019',

        }, {
            imageSrc: './images/qi7uskbzy_a-555x360.jpg',
            title: 'The coronavirus food assistance program has processed $1.4 billion since mid-May',
            createdAt: 'November 25, 2019',

        }, ];
        this.trendingData = [{
            imageSrc: './images/qi7uskbzy_a-555x360.jpg',
            tags: [tag('video')],
            title: 'The coronavirus food assistance program has processed $1.4 billion since mid-May',
            createdAt: 'November 25, 2019',
            readTime: 5,
        }, {
            imageSrc: './images/inhype1-photos-14-555x360.jpg',
            tags: [tag('medicine')],
            title: 'A beginner’s guide to customer journey maps',
            createdAt: 'Sponsored',
            readTime: 8,
        }, {
            imageSrc: './images/hfphi8zx_e4-555x360.jpg',
            tags: [tag('world')],
            title: 'China State Firm’s $6 Billion Loss Is Among Nation’s Worst Ever',
            createdAt: 'Sponsored',
            readTime: 3,
        }, {
            imageSrc: './images/lrl_nq7xbxm-555x360.jpg',
            tags: [tag('covid')],
            title: 'The Biggest Moments in 2019, Explained Through Graphics',
            createdAt: 'November 12, 2019',
            readTime: 3,
        }, {
            imageSrc: './images/x7lyx8yyvug-555x360.jpg',
            tags: [tag('world')],
            title: 'Brussels Edition: Seeking a Trade Reset',
            createdAt: 'November 07, 2019',
            readTime: 3,
        }, {
            imageSrc: './images/qi7uskbzy_a-555x360.jpg',
            tags: [tag('video')],
            title: 'The coronavirus food assistance program has processed $1.4 billion since mid-May',
            createdAt: 'November 25, 2019',
            readTime: 5,
        }, {
            imageSrc: './images/inhype1-photos-14-555x360.jpg',
            tags: [tag('medicine')],
            title: 'A beginner’s guide to customer journey maps',
            createdAt: 'Sponsored',
            readTime: 8,
        }, {
            imageSrc: './images/hfphi8zx_e4-555x360.jpg',
            tags: [tag('world')],
            title: 'China State Firm’s $6 Billion Loss Is Among Nation’s Worst Ever',
            createdAt: 'Sponsored',
            readTime: 3,
        }, {
            imageSrc: './images/lrl_nq7xbxm-555x360.jpg',
            tags: [tag('covid')],
            title: 'The Biggest Moments in 2019, Explained Through Graphics',
            createdAt: 'November 12, 2019',
            readTime: 3,
        }, {
            imageSrc: './images/x7lyx8yyvug-555x360.jpg',
            tags: [tag('world')],
            title: 'Brussels Edition: Seeking a Trade Reset',
            createdAt: 'November 07, 2019',
            readTime: 3,
        }, ];

    },

    handleEvents: function () {
        post3Button.addEventListener('click', () => {
            this.post3Data = [...this.post3Data, ...this.clodePost3Data];
            this.generatePost(this.post3Data, postList3);
        })
    },

    generatePost: function (data, container) {
        const html = data.map(({
            imageSrc,
            tags,
            title,
            createdAt,
            readTime,
            by,
            description,
            button
        }) => {
            return `
                <div class="post-item">
                    ${imageSrc ? `
                        <a href="#!" class="post-image">
                            <img src="${imageSrc}" class="${container.classList.contains('post3-list') ? 'w-full h-full' : ''}" alt="">
                        </a>
                    ` : ''}
                    <div class="post-content">
                        ${tags ? tags.map(tag => (
                            `
                                <div class="tag">
                                    <div class="tag-content">
                                        <div class="tag-circle" style="--bg-color: ${tag.color}"></div>
                                        <a href="#!" class="tag-name">${tag.name}</a>
                                    </div>
                                </div>
                            `
                        )).join('') : ''}

                        <a href="#!" class="post-title title">${title}</a>
                        <p class="headline-time">
                            ${ by ? ` By <span class="highlight">${by}</span> <span class="headline-time-space"></span>` : '' }
                            ${ createdAt ? `${createdAt} ` : '' }
                            ${ readTime ? `<span class="headline-time-space"></span> ${readTime} Mins read` : '' }
                         </p>
                        ${ description ? `<p class="post-description">${description}</p>` : '' }
                        ${ button ? `<a href="#!" class="button">Read More</a>` : '' }
                    </div>
                    
                </div>
            `
        }).join('');
        container.innerHTML = html;
    },

    generateHeadlineSlider: function (data) {
        const html = data.map(({
            imageSrc,
            tags,
            title,
            createdAt,
            readTime,
            by
        }) => {
            return `
                <div class="headline-item">
                    <div class="overlay"></div>
                    <div class="headline-image">
                        <img src="${imageSrc}" alt="">
                    </div>
                    <div class="headline-content">
                        ${ tags.map(tag => (
                            `
                                <div class="tag">
                                    <div class="tag-content">
                                        <div class="tag-circle" style="--bg-color: ${tag.color}"></div>
                                        <a href="#!" class="tag-name">${tag.name}</a>
                                    </div>
                                </div>
                            `
                        )) }
                        <a href="#!" class="headline-title title">
                            ${title}
                        </a>
                        <p class="headline-time">
                            ${by}
                            <span class="headline-time-space"></span> 
                            ${createdAt} 
                            <span class="headline-time-space"></span> 
                            ${readTime} 
                            Mins read
                        </p>
                    </div>
                </div>
            `
        }).join('');

        headlineSlider.innerHTML = html;
    },

    generateBuy: function (data) {
        const html = data.map(({
            imageSrc,
            tags,
            name,
            price
        }) => {
            return ` 
                <div class="buy-item">
                    <a href="#!" class="buy-image">
                        <img src="${imageSrc}" alt="">
                    </a>
                    <div class="buy-content">
                        ${ tags.map(tag => (`
                            <div class="tag">
                                <div class="tag-content">
                                    <div class="tag-circle" style="--bg-color: ${tag.color}"></div>
                                    <a href="#!" class="tag-name">${tag.name}</a>
                                </div>
                            </div>
                        `))}
                        <h3 class="buy-name title">${name}</h3>
                        <p class="buy-price">$${price}</p>
                        <button class="buy-button button">Add to cart</button>
                    </div>
                </div>
            `
        }).join('');
        buyList.innerHTML = html;
    },

    generates: function () {
        this.generatePost(this.post1Data, postList1);
        this.generatePost(this.post2Data, postList2);
        this.generatePost(this.post3Data, postList3);
        this.generatePost(this.post4Data, postList4);
        this.generatePost(this.post5Data, postList5);
        this.generatePost(this.latestData, latestList);
        this.generatePost(this.popularData, popularList);
        this.generatePost(this.trendingData, trendingList);
        this.generateHeadlineSlider(this.headlineSliderData);
        this.generateBuy(this.buyData);
    },


    start: function () {
        this.init();
        this.generates();
        this.handleEvents();
    }
}

app.start();


$('.headline-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 5000,
});

$('.post4 .post4-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },{
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },
    ]
});

$('.trending .trending-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },{
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },
    ]
});
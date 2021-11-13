const portfolioList = document.querySelector('.portfolio-list');
const partnerList = document.querySelector('.partner-list');
const blogList = document.querySelector('.blog-list');

const backToTopBtn = document.querySelector('.back-to-top');

const app = {

    init: function(){
        this.portfolioData = [[
            {
                title: 'Campaign of exhibition of architectural field',
                description: 'Photography',
                imageSrc: './images/eugen-esanu-r7bbD8ULams-unsplash.png',
            },{
                title: 'New minimal product campaign',
                description: 'Brand',
                imageSrc: './images/ruslan-bardash-4kTbAMRAHtQ-unsplash.png',
            },{
                title: 'Product photography and promotion',
                description: 'Brand',
                imageSrc: './images/609772-PNBZGS-23.png',
            },
        ], [
            {
                title: 'Incredible color capture in',
                description: 'Photography',
                imageSrc: './images/soumalya-mandal-nYONHVuUBrw-unsplash.png',
            },{
                title: 'Building promotion poster in the city',
                description: 'Design',
                imageSrc: './images/47.png',
            },{
                title: 'Orange and red structure exhibition',
                description: 'Design',
                imageSrc: './images/jake-fagan-eIrVu7HOhkE-unsplash.png',
            },{
                title: 'Amazing building mockup design',
                description: 'Design',
                imageSrc: './images/simone-hutsch-8FUD82rlJxs-unsplash.png',
            },
        ], [
            {
                title: 'Advertising campaign mold',
                description: 'Design',
                imageSrc: './images/nkululeko-jonas-fSeKcdzeZTE-unsplash.png',
            },{
                title: 'Mockup for hot drinks or free cola',
                description: 'Mockup',
                imageSrc: './images/87.png',
            },{
                title: 'Laptop mockup in PSD format',
                description: 'Mockup',
                imageSrc: './images/303.png',
            },
        ], ];

        this.partnerData = [{
            imageSrc: './images/partner-logo-1.png',
        }, {
            imageSrc: './images/partner-logo-2.png',
        }, {
            imageSrc: './images/partner-logo-3.png',
        }, {
            imageSrc: './images/partner-logo-4.png',
        }, {
            imageSrc: './images/partner-logo-5.png',
        }, {
            imageSrc: './images/partner-logo-6.png',
        }, {
            imageSrc: './images/partner-logo-7.png',
        }, {
            imageSrc: './images/partner-logo-8.png',
        }, ];

        this.blogData = [{
            imageSrc: './images/blog-image-1.png',
            title: 'Illustration development basics for beginners',
            description: 'Design',
        }, {
            imageSrc: './images/blog-image-2.png',
            title: 'Our best music list to listen to on spotify',
            description: 'Music',
        }, {
            imageSrc: './images/blog-image-3.png',
            title: 'Gallery design and composition process',
            description: 'Courses',
        }, ];
    },

    handleEvents: function() {
        backToTopBtn.addEventListener('click', () => {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            });
        })
    },

    renderPortolio: function(data, container){ 
        const html = data.map(item => (`
            <div class="portfolio-column">
                ${ item.map(({ imageSrc, description , title}) => (`
                    <div class="portfolio-item">
                        <a href="#!" >
                            <img src="${imageSrc}" alt="" class="portfolio-image">
                        </a>
                        <div class="portfolioinfo">
                            <a href="#!" class="portfolio-title title">${title}</a>
                            <a href="#!" class="portfolio-description text text--sm">${description}</a>
                        </div>
                    </div>
                `)).join('') }
            </div>
        `)).join('');
        container.innerHTML = html;
    },

    renderPartner: function(data, container){ 
        const html = data.map(({ imageSrc }) => (`
            <a href="#!" class="partner-item">
                <img src="${imageSrc}" alt="">
            </a>
        `)).join('');
        container.innerHTML = html;
    },

    renderBlog: function(data, container){
        const html = data.map(({ imageSrc, title, description }) => (`
            <div class="blog-item">
                <a href="#!" class="blog-image">
                    <img src="${imageSrc}" alt="">
                </a>
                <a href="#!" class="blog-title title">${title}</a>
                <a href="#!" class="text text--sm">${description}</a>
            </div>
        `)).join('');
        container.innerHTML = html;
    },

    start: function(){
        this.init();
        this.renderPortolio(this.portfolioData, portfolioList);
        this.renderPartner(this.partnerData, partnerList);
        this.renderBlog(this.blogData, blogList);
        this.handleEvents();
    },
}

app.start();
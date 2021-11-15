const portfolioList = document.querySelector('.portfolio-list');
const aboutList = document.querySelector('.about-list');
const servicesList = document.querySelector('.services-list');

const app = {
    init: function() {
        this.servicesData = [{
            imageSrc: './images/Icon-Basket.png',
            title: 'E-Commerce',
            description: `Proin iaculis purus consequat sem cure 
            digni ssim. Donec porttitora entum suscipit 
            aenean rhoncus posuere odio in tincidunt.`,
        },{
            imageSrc: './images/Icon-Laptop.png',
            title: 'Responsive Web',
            description: `Proin iaculis purus consequat sem cure 
            digni ssim. Donec porttitora entum suscipit 
            aenean rhoncus posuere odio in tincidunt.`,
        },{
            imageSrc: './images/Icon-Locked.png',
            title: 'Web Security',
            description: `Proin iaculis purus consequat sem cure 
            digni ssim. Donec porttitora entum suscipit 
            aenean rhoncus posuere odio in tincidunt.`,
        },]
        this.portfolioData = [{
            imageSrc: './images/portfolio-image-1.png',
            title: 'Ebony & ivory',
            directory: 'Branding',
        },{
            imageSrc: './images/portfolio-image-2.png',
            title: 'Smart Stationary',
            directory: 'print design',
        },{
            imageSrc: './images/portfolio-image-3.png',
            title: 'Clever Poster',
            directory: 'print design',
        },{
            imageSrc: './images/portfolio-image-4.png',
            title: 'Vinyl Record',
            directory: 'Product Mock-Up',
        },{
            imageSrc: './images/portfolio-image-5.png',
            title: 'Treehouse Template',
            directory: 'web design',
        },{
            imageSrc: './images/portfolio-image-6.png',
            title: 'Burned Logo',
            directory: 'Branding',
        },];

        this.aboutData = [{
            imageSrc: './images/about-image-1.png',
            description: `Proin iaculis purus consequat sem cure 
            digni ssim. Donec porttitora entum suscipit 
            aenean rhoncus posuere odio in tincidunt. Proin 
            iaculis purus consequat sem cure digni 
            ssim. Donec porttitora entum suscipit.`,
            time: 'JULY 2010',
            title: 'Our Humble Beginnings',
        },{
            imageSrc: './images/about-image-2.png',
            description: `Proin iaculis purus consequat sem cure 
            digni ssim. Donec porttitora entum suscipit 
            aenean rhoncus posuere odio in tincidunt. Proin 
            iaculis purus consequat sem cure digni 
            ssim. Donec porttitora entum suscipit.`,
            time: 'JULY 2010',
            title: 'Our Humble Beginnings',
        },{
            imageSrc: './images/about-image-3.png',
            description: `Proin iaculis purus consequat sem cure 
            digni ssim. Donec porttitora entum suscipit 
            aenean rhoncus posuere odio in tincidunt. Proin 
            iaculis purus consequat sem cure digni 
            ssim. Donec porttitora entum suscipit.`,
            time: 'JULY 2010',
            title: 'Our Humble Beginnings',
        },{
            imageSrc: './images/about-image-4.png',
            description: `Proin iaculis purus consequat sem cure 
            digni ssim. Donec porttitora entum suscipit 
            aenean rhoncus posuere odio in tincidunt. Proin 
            iaculis purus consequat sem cure digni 
            ssim. Donec porttitora entum suscipit.`,
            time: 'JULY 2010',
            title: 'Our Humble Beginnings',
        },{
            imageSrc: './images/about-image-5.png',
            description: ``,
            time: '',
            title: '',
        },];

    },

    renderServices: function(data, container) {
        const html = data.map(({ imageSrc, title, description }) => (`
            <li class="services-item">
                <div class="services-icon">
                    <img src="${imageSrc}" alt="">
                </div>
                <h3 class="services-title title">${title}</h3>
                <p class="services-description">${description}</p>
            </li>
        `)).join('');
        container.innerHTML = html;
    },

    renderPorfolio: function(data, container) {
        const html = data.map(({ imageSrc, title, directory }) => (`
            <li class="portfolio-item">
                <a href="#!" >
                    <img src="${imageSrc}" alt="" class="portfolio-image">
                </a>
                <a href="#!" class="title">${title}</a>
                <a href="#!" class="caption">${directory}</a>
            </li>
        `)).join('');
        container.innerHTML = html;
    },

    renderAbout: function(data, container) {
        const html = data.map(({ imageSrc, title, description, time }) => (`
            <li class="about-item">
                <div class="about-content">
                    <h3 class="about-title title">
                        ${time}
                        <br>
                        ${title}
                    </h3>
                    <p class="about-description">${description}</p>
                </div>
                <a href="#!" class="about-image">
                    <img src="${imageSrc}" alt="">
                </a>
            </li>
        `)).join('');
        container.innerHTML = html;
    },

    start: function() {
        this.init();
        this.renderServices(this.servicesData, servicesList)
        this.renderPorfolio(this.portfolioData, portfolioList)
        this.renderAbout(this.aboutData, aboutList)
    },
}

app.start();
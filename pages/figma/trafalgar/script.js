document.addEventListener('DOMContentLoaded', (e) => {
    const menu = document.querySelector('.menu');
    const bgMenu = document.querySelector('.menu-bg');
    const openMenuBtn = document.querySelector('.menu-open');
    const closeMenuBtn = document.querySelector('.menu-close');

    openMenuBtn.addEventListener('click', () => {
        menu.classList.add('--active');
        bgMenu.classList.add('--active');
    })

    closeMenuBtn.addEventListener('click', () => {
        menu.classList.remove('--active');
        bgMenu.classList.remove('--active');
    })

    createSlider(document.querySelector('.review-list'), {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow:"<i class='fas fa-long-arrow-alt-left' aria-hidden='true'></i>",
        nextArrow:"<i class='fas fa-long-arrow-alt-right' aria-hidden='true'></i>"
    
    })
})
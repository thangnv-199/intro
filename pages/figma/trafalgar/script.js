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

    $('.review-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fas fa-long-arrow-alt-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fas fa-long-arrow-alt-right' aria-hidden='true'></i></button>"
      });
})
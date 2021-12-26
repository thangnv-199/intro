

const _$ = document.querySelector.bind(document);
const _$$ = document.querySelectorAll.bind(document);

// content header

const contentHead = _$(".content-head");
const contentHeadBtns = _$$(".content-head__btn");
const contentHeadings = _$$(".content-head__heading");
var contentHeadingsLength = contentHeadings.length;
var contentHeadingIndex = 0;

contentHeadBtns.forEach((item, index) => {
    item.onclick = (e) => {
        if (index) {
            contentHeadingIndex++;
            if (contentHeadingIndex >= contentHeadingsLength) contentHeadingIndex = 0;
            contentHead.setAttribute("style", `background-image: url(./asset/img/h1-slider-img-${contentHeadingIndex}-.jpg)`);
            document.querySelector(".content-head__heading.content-head__heading--active").classList.remove("content-head__heading--active");
            contentHeadings[contentHeadingIndex].classList.add("content-head__heading--active");
        } else {
            contentHeadingIndex--;
            if (contentHeadingIndex < 0) contentHeadingIndex = contentHeadingsLength - 1;
            contentHead.setAttribute("style", `background-image: url(./asset/img/h1-slider-img-${contentHeadingIndex}-.jpg)`);
            document.querySelector(".content-head__heading.content-head__heading--active").classList.remove("content-head__heading--active");
            contentHeadings[contentHeadingIndex].classList.add("content-head__heading--active");
        }
    }
});

setInterval(() => {

    contentHead.setAttribute("style", `background-image: url(./asset/img/h1-slider-img-${contentHeadingIndex}-.jpg)`);
    document.querySelector(".content-head__heading.content-head__heading--active").classList.remove("content-head__heading--active");
    contentHeadings[contentHeadingIndex].classList.add("content-head__heading--active");
    contentHeadingIndex++;
    if (contentHeadingIndex >= contentHeadingsLength) contentHeadingIndex = 0;

}, 30000);



// user nav
const elementSubnavElement = _$(".element-subnav");
const headerTop = _$(".header__top");
const scrollTopBtn = _$(".scroll-top");

window.onscroll = () => {
    if (window.scrollY < 100) {
        headerTop.hidden = false;
        elementSubnavElement.style.top = '120px'; 
    } else {
        headerTop.hidden = true;
        elementSubnavElement.style.top = '80px'; 
    }

    if (window.scrollY < 1000) {
        scrollTopBtn.hidden = true;
    } else {
        scrollTopBtn.hidden = false;
    }
}


const tabLoginBtn = _$$(".user-login__tab-login");
const tabRegisterBtn = _$$(".user-login__tab-register");
const tabLogins = _$$(".user-tab__login");
const tabRegisters = _$$(".user-tab__register");

tabLoginBtn.forEach((item, index) => {
    item.onclick = () => {
        if ( index < 2 ){
            tabLogins[0].hidden = false;
            tabRegisters[0].hidden = true;
        }else{
            tabLogins[1].hidden = false;
            tabRegisters[1].hidden = true;
        }
    }
})

tabRegisterBtn.forEach((item, index) => {
    item.onclick = () => {
        if ( index < 2 ){
            tabLogins[0].hidden = true;
            tabRegisters[0].hidden = false;
        }else{
            tabLogins[1].hidden = true;
            tabRegisters[1].hidden = false;
        }
    }
})

// sub nav mobile

const mobileSubnavLinks = _$$(".mobile-subnav__link");
const mobileSubnavIcons = _$$(".mobile-subnav__icon");
const mobileSubnavLv2 = _$$(".mobile-subnav-lv2__list");

var isOpenmobileSubnavLv2 = [];
for (let i = 0; i < mobileSubnavLv2.length; i++) {
    isOpenmobileSubnavLv2[i] = false;
}
mobileSubnavLinks.forEach((item, index) => {
    item.onclick = () => {
        if (isOpenmobileSubnavLv2[index]) {
            mobileSubnavLv2[index].hidden = true;
            isOpenmobileSubnavLv2[index] = false;
            mobileSubnavIcons[index].classList.remove("ti-angle-down");
            mobileSubnavIcons[index].classList.add("ti-angle-right");
        } else {
            mobileSubnavLv2[index].hidden = false;
            isOpenmobileSubnavLv2[index] = true;
            mobileSubnavIcons[index].classList.remove("ti-angle-right");
            mobileSubnavIcons[index].classList.add("ti-angle-down");
        }
    };
});


const mobileSubnavLv2Links = _$$(".mobile-subnav-lv2__link2");
const mobileSubnavLv2Icons = _$$(".mobile-subnav-lv2__icon");
const mobileSubnavLv3 = _$$(".mobile-subnav-lv3__list");

var isOpenmobileSubnavLv3 = [];
for (let i = 0; i < mobileSubnavLv3.length; i++) {
    isOpenmobileSubnavLv3[i] = false;
}
mobileSubnavLv2Links.forEach((item, index) => {
    item.onclick = () => {
        if (isOpenmobileSubnavLv3[index]) {
            mobileSubnavLv3[index].hidden = true;
            isOpenmobileSubnavLv3[index] = false;
            mobileSubnavLv2Icons[index].classList.remove("ti-angle-down");
            mobileSubnavLv2Icons[index].classList.add("ti-angle-right");
        } else {
            mobileSubnavLv3[index].hidden = false;
            isOpenmobileSubnavLv3[index] = true;
            mobileSubnavLv2Icons[index].classList.remove("ti-angle-right");
            mobileSubnavLv2Icons[index].classList.add("ti-angle-down");
        }
    };
});






// $(".scroll-top").click(() => {
//     $("html").animate({
//         scrollTop: 0
//     })
// })
// content slider

createSlider(document.querySelector('.content-tour'), {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false,
    responsive: [{
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 739,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ],
})

createSlider(document.querySelector('.content-user-feedback'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
})

createSlider(document.querySelector('.topReview__list'), {
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 739,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ],
})

// $(".content-user-feedback").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
// });

var navItems = document.querySelectorAll(".best-tour__img-navitem");

var bestTourImg = document.querySelector(".best-tour__img");
var i = 1;

navItems.forEach((item,index) => {
    item.onclick = function(){
        i = index+1;
        document.querySelector(".best-tour__img-navitem.best-tour__img-navitem--active").classList.remove("best-tour__img-navitem--active");
        this.classList.add("best-tour__img-navitem--active");
        bestTourImg.setAttribute("style",`background-image: url(./asset/img/best_tour${index}.jpg`)
    }
})

setInterval(() => {
    
    if ( i == navItems.length){
        i = 0;
    };
    for ( let j=0; j<navItems.length; j++){
        navItems[j].classList.remove("best-tour__img-navitem--active");
    }
    navItems[i].classList.add("best-tour__img-navitem--active");
    bestTourImg.setAttribute("style",`background-image: url(./asset/img/best_tour${i}.jpg`);


    i++;
}, 5000);





















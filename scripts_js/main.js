// HAMBURGER MENU
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

// SLICKER
$(".slideshow").slick({
    infinite: true,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 4000,
    zIndex: 1,
});
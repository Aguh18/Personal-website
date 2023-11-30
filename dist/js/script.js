

const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#navmenu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
});


// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    if (window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }    
}
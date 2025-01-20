/**
 * Animation on scroll function and init
 */
function aosInit() {
    AOS.init({
        duration: 400,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
window.addEventListener('load', aosInit);
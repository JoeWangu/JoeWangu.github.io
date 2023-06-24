(function ($) { // Begin jQuery
    $(function () { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function () {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function () {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery

//  -------------------------------------------------------------------------------------------------------------------
//                                       slideshow
//  -------------------------------------------------------------------------------------------------------------------- //
// let slideIndex = 1;
// showSlides(slideIndex);

// // let intervalId = setInterval(function () { plusSlides(1) }, 3000);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName('mySlides');
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     slides[slideIndex - 1].style.display = 'flex';

//     let dots = document.getElementsByClassName('dot');
//     for (i = 0; i < dots.length; i++) {
//         dots[i].classList.remove('active')
//     }
//     dots[slideIndex - 1].classList.add('active');
// }

// let slideshowContainer = document.getElementsByClassName("image")[0];
// slideshowContainer.addEventListener("mouseover", stopSlideshow);
// slideshowContainer.addEventListener("mouseout", startSlideshow);

// function stopSlideshow() {
//     clearInterval(intervalId);
// }

// // function startSlideshow() {
// //     intervalId = setInterval(function () { plusSlides(1) }, 3000);
// // }

// var navbar = document.getElementById('nav');
// // toggle buttons
// function toggle() {
//     if (navbar.style.display == 'flex') {
//         navbar.style.display = 'none';
//     } else {
//         navbar.style.display = 'flex';
//     }
// }

//  jquery javascript
let slideIndex = 1;
showSlides(slideIndex);

// let intervalId = setInterval(function () {
//     plusSlides(1);
// }, 3000);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = $(".mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.hide();
    slides.eq(slideIndex - 1).show();

    let dots = $(".dot");
    dots.removeClass("active");
    dots.eq(slideIndex - 1).addClass("active");
}

let slideshowContainer = $(".image").eq(0);
// slideshowContainer.mouseover(stopSlideshow);
// slideshowContainer.mouseout(startSlideshow);

function stopSlideshow() {
    clearInterval(intervalId);
}

function startSlideshow() {
    intervalId = setInterval(function () {
        plusSlides(1);
    }, 3000);
}

// fade in animation for cards section
window.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('.fade-in-animation');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position < windowHeight) {
            element.classList.add('fade-in');
        }
        // else {
        //     element.classList.remove('fade-in')
        // }
    }
});
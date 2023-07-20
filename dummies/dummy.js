$(document).ready(function () {
    //  -------------------------------------------------------------------------------------------------------------------
    //                                       NAVBAR SECTION JS
    //  -------------------------------------------------------------------------------------------------------------------- //
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
    //                                       SLIDESHOW JS
    //  -------------------------------------------------------------------------------------------------------------------- //
    let slideIndex = 1;
    showSlides(slideIndex);

    let intervalId = setInterval(function () {
        plusSlides(1);
    }, 5000);

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
        slides.removeClass("active");
        slides.eq(slideIndex - 1).show().addClass("active");

        let dots = $(".dot");
        dots.removeClass("active");
        dots.eq(slideIndex - 1).addClass("active");
    }

    let slideshowContainer = $(".image").eq(0);
    slideshowContainer.mouseover(stopSlideshow);
    slideshowContainer.mouseout(startSlideshow);

    function stopSlideshow() {
        clearInterval(intervalId);
    }

    function startSlideshow() {
        intervalId = setInterval(function () {
            plusSlides(1);
        }, 5000);
    }

    //  -------------------------------------------------------------------------------------------------------------------
    //                                       FADE IN ANIMATION FOR CARDS SECTION
    //  -------------------------------------------------------------------------------------------------------------------- //
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

    //  -------------------------------------------------------------------------------------------------------------------
    //                                       FEATURED SECTION JS
    //  -------------------------------------------------------------------------------------------------------------------- //
    $('.slide').click(function () {
        $('.slide').removeClass('active'); // Remove 'active' class from all slides
        $(this).addClass('active'); // Add 'active' class to the clicked slide

        var imageSrc = $(this).attr('src');
        var imageAlt = $(this).attr('alt');
        $('#main-image').attr('src', imageSrc);
        $('#main-image').attr('alt', imageAlt);
    });
});


//  -------------------------------------------------------------------------------------------------------------------
//                                       SLIDESHOW WITHOUT JQUERY
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

//  -------------------------------------------------------------------------------------------------------------------
//                                       FEATURED SECTION JS ANOTHER ITERATION
//  -------------------------------------------------------------------------------------------------------------------- //
// function changeMainImage(image) {
//     var mainImage = document.getElementById("main-image");
//     mainImage.src = image.src;
//     mainImage.alt = image.alt;
// }

// $(document).ready(function () {
// $('.slide').click(function () {
//     var imageSrc = $(this).attr('src');
//     var imageAlt = $(this).attr('alt');
//     $('#main-image').attr('src', imageSrc);
//     $('#main-image').attr('alt', imageAlt);
// });
// });

// -----------------------------------------------------------------------------------------------------------
// ------------------------------------------- TOGGLE BETWEEN THEMES -----------------------------------------
// -----------------------------------------------------------------------------------------------------------
// const themeBtn = document.getElementById("themeBtn");
// const themeIcon = document.getElementById("themeIcon");

// // Set the theme to light only if it hasn't been set before
// if (!localStorage.getItem('theme')) {
//     localStorage.setItem('theme', 'light');
// }

// // Retrieve the saved theme from localStorage and apply it to the page
// const savedTheme = localStorage.getItem('theme');
// if (savedTheme) {
//     document.documentElement.setAttribute('data-theme', savedTheme);
//     themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
// }

// themeBtn.addEventListener('click', () => {
//     const currentTheme = document.documentElement.getAttribute('data-theme');
//     if (currentTheme === 'light') {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         themeIcon.textContent = '🌙';
//         localStorage.setItem('theme', 'dark');
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         themeIcon.textContent = '☀️';
//         localStorage.setItem('theme', 'light');
//     }
// });

// -----------------------------------------------------------------------------------------------------------
// ------------------------------------------- JQUERY VERSION TOGGLE BETWEEN THEMES -----------------------------------------
// -----------------------------------------------------------------------------------------------------------
const themeIcon = $("#themeIcon");
const tooltipText = $("#themeIcon .tooltip-text");

// Set the theme to light only if it hasn't been set before
if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
}

// Retrieve the saved theme from localStorage and apply it to the page
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    $('html').attr('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeIcon.removeClass('fa-solid fa-sun').addClass('fa-solid fa-moon');
        tooltipText.text('Switch to light mode');
    } else {
        themeIcon.removeClass('fa-solid fa-moon').addClass('fa-solid fa-sun');
        tooltipText.text('Switch to dark mode');
    }
}

themeIcon.on('click', () => {
    const currentTheme = $('html').attr('data-theme');
    if (currentTheme === 'light') {
        $('html').attr('data-theme', 'dark');
        themeIcon.removeClass('fa-sun').addClass('fa-moon');
        tooltipText.text('Switch to light mode');
        localStorage.setItem('theme', 'dark');
    } else {
        $('html').attr('data-theme', 'light');
        themeIcon.removeClass('fa-moon').addClass('fa-sun');
        tooltipText.text('Switch to dark mode');
        localStorage.setItem('theme', 'light');
    }
});

// -----------------------------------------------------------------------------------------------------------
// ------------------------------------------- not js. html to prevent access when js is disabled -----------------------------------------
// -----------------------------------------------------------------------------------------------------------
{/* <noscript>
    <meta http-equiv="refresh" content="0;url=nojs.html">
</meta></noscript> */}

{/* <noscript>
    <div class="noscript-warning">
        This page requires JavaScript to function properly. Please enable JavaScript in your browser and reload the page.
    </div>
</noscript> */}

// mobile check
$(function () {
    function mobilecheck() {
        var check = false;
        (function (a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                check = true;
            }
        })(navigator.userAgent || window.opera);
        return check;
    }
    var clickevent = mobilecheck() ? 'touchstart' : 'click';

    var items = $('.side-nav');
    // var content = $('.content');

    function open() {
        $(items).removeClass('close').addClass('open');
    }

    function close() {
        $(items).removeClass('open').addClass('close');
    }

    $('.burger-toggle').on(clickevent, function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (items.hasClass('open')) {
            close();
        } else {
            open();
        }
    });
    $('.fa-x').on(clickevent, function () {
        close();
    });
    $(document).click(function () {
        if (items.hasClass('open')) {
            close();
        }
    });

});

// other
        // -----------------------------------------------------------------------------------------------------------
        // ------------------------------------------- ADJUST NAVBAR IN SMALLER SCREENS -----------------------------------------
        // -----------------------------------------------------------------------------------------------------------
        // (function () {
        //     $(window).on('resize', checkPosition);

        //     function checkPosition() {
        //         if ($(window).innerWidth() <= 810) {
        //             $('.top-nav-wrapper .nav-link-wrapper:first').empty().html(`<input  type="checkbox" id="burger-toggle" class="burger-toggle">
        //             <label for= "burger-toggle" class= "burger-menu">
        //             <div class="line"></div>
        //             <div class="line"></div>
        //             <div class="line"></div>
        //             </label > `);
        //         } else {
        //             $('.top-nav-wrapper .nav-link-wrapper:first').empty().html(`<a href="#!">
        //         <i class="fa-solid fa-home" aria-hidden="true"></i>
        //         <p>Home</p>
        //     </a>`);
        //         }
        //     }
        // })
        // checkPosition();


            // -----------------------------------------------------------------------------------------------------------
    // -------------------------------------------  SLIDESHOW -----------------------------------------
    // -----------------------------------------------------------------------------------------------------------
    $(function () {
        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides() {
            showSlides((slideIndex += 1))
        }

        function prevSlides() {
            showSlides((slideIndex -= 1))
        }

        $('.next').on('click', plusSlides);
        $('.prev').on('click', prevSlides);

        function showSlides(n) {
            let slides = $('.mySlides');
            if (n > $(slides).length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = $(slides).length
            }
            $(slides).fadeOut();
            $(slides[slideIndex - 1]).fadeIn(2000);
        };


    function currentSlide(n) {
        showSlides((slideIndex = n))
    }

    var intervalId = setInterval(function () {
        plusSlides(1);
    }, 3000);

    var slideshowContainer = $(".slideshow-container");
    slideshowContainer.mouseover(stopSlideshow);
    slideshowContainer.mouseout(startSlideshow);

    function stopSlideshow() {
        clearInterval(intervalId);
    }

    function startSlideshow() {
        intervalId = setInterval(function () {
            plusSlides(1);
        }, 3000);
    }

    });

    // with next and previous buttons
        $(function () {
        let imgs = $(".mySlides"),
            totalImages = imgs.length,
            delay = 5000,
            slideNo = 0,
            firstImage = imgs.eq(0).find("img"),
            sliderInterval;

        firstImage
            .on("load", function () {
                var imgHeight = imgs.eq(slideNo).find("img").height();
                $(".slideshow-container").css("height", imgHeight + "px");
            })
            .each(function () {
                if (this.complete) $(this).trigger("load");
            });

        function plusSlides() {
            changeSlide((slideNo + 1));
        }

        function prevSlides() {
            changeSlide((slideNo - 1));
        }

        $(".next").on("click", plusSlides);
        $(".prev").on("click", prevSlides);

        function startSlider() {
            sliderInterval = setInterval(changeSlide, delay);
        }

        function stopSlider() {
            clearInterval(sliderInterval);
        }

        startSlider();

        $(window).on("resize", function () {
            imgHeight = imgs.eq(slideNo).height();
            $(".slideshow-container").css("height", imgHeight + "px");
        });

        $(window).on("blur", function () {
            stopSlider();
        });

        $(window).on("focus", function () {
            startSlider();
        });

        function changeSlide(n) {
            imgs.eq(slideNo).slideUp(2000);
            if (n !== undefined) {
                slideNo = n;
                if (slideNo > totalImages) {
                    slideNo = 0;
                }
                if (slideNo < 0) {
                    slideNo = totalImages;
                }
            } else {
                slideNo++;
                if (slideNo > totalImages) {
                    slideNo = 0;
                }
                if (slideNo < 0) {
                    slideNo = totalImages;
                }
            }

            // imgs.hide();
            imgs.eq(slideNo).fadeIn(2000);
            // 
        }
        });
    
        // tbd ------------------------------
            // $(function () {
    //     const imgs = $('.mySlides'),
    //         totalImages = imgs.length,
    //         delay = 5000,
    //         firstImage = imgs.eq(0).find('img');
    //     let slideNo = 0;
    //     let sliderInterval;

    //     firstImage.on("load", function () {
    //         const imgHeight = imgs.eq(slideNo).find('img').height();
    //         $('.slideshow-container').css('height', imgHeight + 'px');
    //     }).each(function () {
    //         if (this.complete) $(this).trigger('load');
    //     });

    //     function startSlider() {
    //         sliderInterval = setInterval(changeSlide, delay);
    //     }

    //     function stopSlider() {
    //         clearInterval(sliderInterval);
    //     }

    //     startSlider();

    //     $(window).on('resize', function () {
    //         imgHeight = imgs.eq(slideNo).height();
    //         $('.slideshow-container').css('height', imgHeight + 'px');
    //     });

    //     $(window).on('blur', function () {
    //         stopSlider();
    //     });

    //     $(window).on('focus', function () {
    //         startSlider();
    //     });

    //     function changeSlide() {
    //         imgs.eq(slideNo).slideUp(1000);

    //         slideNo++;
    //         if (slideNo > totalImages) {
    //             slideNo = 0;
    //         }
    //         if (slideNo < 1) {
    //             slideNo = totalImages;
    //         }
    //         imgs.eq(slideNo).fadeIn(1000);
    //     }
    // });
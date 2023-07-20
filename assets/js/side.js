// -----------------------------------------------------------------------------------------------------------
// ------------------------------------------- TOGGLE BETWEEN THEMES -----------------------------------------
// -----------------------------------------------------------------------------------------------------------
$(document).ready(function () {
    const themeIcon = $(".themeIcon");
    // const tooltipText = $(".themeIcon .tooltip-text");

    // Set the theme to light only if it hasn't been set before
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
    }

    // Retrieve the saved theme from localStorage and apply it to the page
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        $('html').attr('data-theme', savedTheme);
        if (savedTheme === 'dark') {
            themeIcon.html(`<svg xmlns="http://www.w3.org/2000/svg">
            <use href="#moon-icon"></use>
        </svg> <span class="tooltip-text">Switch to light mode</span>`);
            // tooltipText.text('Switch to light mode');
        } else {
            // themeIcon.removeClass('fa-solid fa-moon').addClass('fa-solid fa-sun');
            // tooltipText.text('Switch to dark mode');
            themeIcon.html(`<svg xmlns="http://www.w3.org/2000/svg">
            <use href="#sun-icon"></use>
        </svg> <span class="tooltip-text">Switch to dark mode</span>`);
        }
    }

    themeIcon.on('click', () => {
        const currentTheme = $('html').attr('data-theme');
        if (currentTheme === 'light') {
            $('html').attr('data-theme', 'dark');
            // themeIcon.removeClass('fa-sun').addClass('fa-moon');
            themeIcon.html(`<svg xmlns="http://www.w3.org/2000/svg">
            <use href="#moon-icon"></use>
        </svg> <span class="tooltip-text">Switch to light mode</span>`);
            // tooltipText.text('Switch to light mode');
            localStorage.setItem('theme', 'dark');
        } else {
            $('html').attr('data-theme', 'light');
            // themeIcon.removeClass('fa-moon').addClass('fa-sun');
            themeIcon.html(`<svg xmlns="http://www.w3.org/2000/svg">
            <use href="#sun-icon"></use>
        </svg> <span class="tooltip-text">Switch to dark mode</span>`);
            // tooltipText.text('Switch to dark mode');
            localStorage.setItem('theme', 'light');
        }
    });


    // -----------------------------------------------------------------------------------------------------------
    // -------------------------------------------  SLIDESHOW -----------------------------------------
    // -----------------------------------------------------------------------------------------------------------
    $(function () {
        const slides = $('.mySlides'),
            slideshowContainer = $('.slideshow-container').first(),
            firstImage = slides.eq(0).find("img"),
            // dots = $('.dot'),
            // next = $('.next'),
            // prev = $('.prev'),
            delay = 5000;
        let intervalId = setInterval(function () { plusSlides(1) }, delay),
            slideIndex = 1;

        firstImage
            .on("load", function () {
                const imgHeight = slides.eq(slideIndex).find("img").height();
                $(".slideshow-container").css("height", imgHeight + "px");
            })
            .each(function () {
                if (this.complete) $(this).trigger("load");
            });

        showSlides(slideIndex);

        let resizeTimer;
        $(window).on("resize", function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                const imgHeight = slides.eq(slideIndex).height();
                $(".slideshow-container").css("height", imgHeight + "px");
            }, 100);
        });


        function plusSlides(n) {
            showSlides((slideIndex += n));
        };

        // function currentSlide(n) {
        //     showSlides((slideIndex = n));
        // };

        function showSlides(n) {
            if (n > $(slides).length) { slideIndex = 1 };
            if (n < 1) { slideIndex = $(slides).length };

            // Show the first/next slide
            $(slides).eq(slideIndex - 1).show(0, function () {
                // Animate the next slide from right to left
                $(slides).eq(slideIndex - 1).animate({ left: '0%' }, 1500);
            });


            // Animate the current slide to the left
            $(slides).eq(slideIndex - 2).animate({ left: '-100%' }, 1500, function () {
                // Hide the current slide when it is completely off-screen
                $(this).hide();

                // Reset the left property of the current slide
                $(this).css('left', '100%');
            });
        };

        slideshowContainer.on('mouseenter', stopSlideshow);
        slideshowContainer.on('mouseleave', startSlideshow);

        function stopSlideshow() {
            clearInterval(intervalId);
        }

        function startSlideshow() {
            intervalId = setInterval(function () { plusSlides(1) }, delay);
        }
    });


});
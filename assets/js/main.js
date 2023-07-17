$(document).ready(function () {
    // -----------------------------------------------------------------------------------------------------------
    // ------------------------------------------- TOGGLE THE BOTTOM NAVBAR -----------------------------------------
    // -----------------------------------------------------------------------------------------------------------
    $('.dropdown a:not(:only-child)').click(function () {
        var link = $(this);
        var icon = link.find('i');
        $('#cn-overlay').addClass('on-overlay');
        icon.removeClass('fa-angle-down').addClass('fa-angle-up');
        $(this).siblings('.hide').slideToggle(400, function () {
            if (!$('.dropdown .hide').is(':visible')) {
                $('#cn-overlay').removeClass('on-overlay');
                icon.removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        });
        $('.hide').not($(this).siblings()).hide();
        $('.dropdown i').not(icon).removeClass('fa-angle-up').addClass('fa-angle-down');
        return false;
    });

    // Clicking away from dropdown will remove the dropdown class
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.hide').hide();
            $('#cn-overlay').removeClass('on-overlay'); // Hide the overlay
            $('.dropdown i').removeClass('fa-angle-up').addClass('fa-angle-down');
        }
    });

    // -----------------------------------------------------------------------------------------------------------
    // ------------------------------------------- ADJUST NAVBAR IN SMALLER SCREENS -----------------------------------------
    // -----------------------------------------------------------------------------------------------------------
    $(window).on('resize', checkPosition);

    function checkPosition() {
        if ($(window).innerWidth() < 810) {
            $('.top-nav-wrapper .nav-link-wrapper:first').empty().html(`<input  type="checkbox" id="burger-toggle">
                <label for= "burger-toggle" class= "burger-menu">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                </label > `);        
        } else {
            $('.top-nav-wrapper .nav-link-wrapper:first').empty().html(`<a href="#!">
            <i class="fa-solid fa-home" aria-hidden="true"></i>
            <p>Home</p>
        </a>`);        
        }
    }


    checkPosition();
});

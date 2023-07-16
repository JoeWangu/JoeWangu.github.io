$(document).ready(function () {
    let dropdownOpen = false; // Variable to keep track of the dropdown state
    // If a link has a dropdown, add sub menu toggle.
    $('.dropdown a:not(:only-child)').click(function (e) {
        $(this).siblings('.hide').slideToggle();
        // if (!dropdownOpen) {
        //     $('#cn-overlay').removeClass('on-overlay');
        // }
        if ($(this).siblings('.hide').css('display')==='none') {
            $('#cn-overlay').removeClass('on-overlay'); // Hide the overlay
            dropdownOpen = false;
        } else {
            $('#cn-overlay').addClass('on-overlay'); // Show the overlay
            dropdownOpen = true;
        }
        // Close one dropdown when selecting another
        $('.hide').not($(this).siblings()).hide();
        e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
        $('.hide').hide();
        $('#cn-overlay').removeClass('on-overlay');// Hide the overlay
        dropdownOpen = false;
    })
});
// toggle bottom navbar
// (function () {
    // let overlay = document.getElementById('cn-overlay');
    // let dropdownItems = document.querySelectorAll('.dropdown a:not(:only-child)')
    // let hide = document.querySelector('.hide');
    // let icon = document.querySelector('.fa-solid')
    // let wrapper = document.getElementById('dropdown-wrapper')
    // let open = false

    // dropdownItems.forEach(function (link) {
    //     link.addEventListener('click', function (e) {
            
    //     })
    // });

    // dropdownItems.forEach(function (dropdown) {
    //     dropdown.addEventListener('click', handle, false)
    // })
    // dropdown.addEventListener('click', handle, false);
// })();
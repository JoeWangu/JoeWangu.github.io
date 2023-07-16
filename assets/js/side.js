// -----------------------------------------------------------------------------------------------------------
// ------------------------------------------- TOGGLE BETWEEN THEMES -----------------------------------------
// -----------------------------------------------------------------------------------------------------------
$(document).ready(function () {
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

});
// -----------------------------------------------------------------------------------------------------------
// -------------------------------------------  -----------------------------------------
// -----------------------------------------------------------------------------------------------------------

// // If a link has a dropdown, add sub menu toggle.
// $('nav ul li a:not(:only-child)').click(function (e) {
//     $(this).siblings('.nav-dropdown').toggle();
//     // Close one dropdown when selecting another
//     $('.nav-dropdown').not($(this).siblings()).hide();
//     e.stopPropagation();
// });
// // Clicking away from dropdown will remove the dropdown class
// $('html').click(function () {
//     $('.nav-dropdown').hide();
// });
// // Toggle open and close nav styles on click
// $('#nav-toggle').click(function () {
//     $('nav ul').slideToggle();
// });
// // Hamburger to X toggle
// $('#nav-toggle').on('click', function () {
//     this.classList.toggle('active');



// var dropdownOpen = false; // Variable to keep track of the dropdown state

// // If a link has a dropdown, add sub menu toggle.
// $('.dropdown a:not(:only-child)').click(function (e) {
//     $(this).siblings('.hide').slideToggle();
//     if (dropdownOpen) {
//         $('#cn-overlay').removeClass('on-overlay'); // Hide the overlay
//         dropdownOpen = false;
//     } else {
//         $('#cn-overlay').addClass('on-overlay'); // Show the overlay
//         dropdownOpen = true;
//     }
//     // Close one dropdown when selecting another
//     $('.hide').not($(this).siblings()).hide();
//     e.stopPropagation();
// });
// // Clicking away from dropdown will remove the dropdown class
// $('html').click(function () {
//     $('.hide').hide();
//     $('#cn-overlay').removeClass('on-overlay'); // Hide the overlay
//     dropdownOpen = false;
// })


// $(document).ready(function () {
//     // If a link has a dropdown, add sub menu toggle.
//     // var dropdownOpen = false; // Variable to keep track of the dropdown state
//     $('.dropdown a:not(:only-child)').click(function (e) {
//         $(this).siblings('.hide').slideToggle();
//         if (dropdownOpen) {
//             $('#cn-overlay').removeClass('on-overlay'); // Hide the overlay
//             dropdownOpen = false;
//         } else {
//             $('#cn-overlay').addClass('on-overlay'); // Show the overlay
//             dropdownOpen = true;
//         }
//         // Close one dropdown when selecting another
//         $('.hide').not($(this).siblings()).hide();
//         e.stopPropagation();
//     });
//     // Clicking away from dropdown will remove the dropdown class
//     $('html').click(function () {
//         $('.hide').hide();
//         $('#cn-overlay').removeClass('on-overlay');// Hide the overlay
//         dropdownOpen = false;
//     })
// });
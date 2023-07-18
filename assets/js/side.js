// -----------------------------------------------------------------------------------------------------------
// ------------------------------------------- TOGGLE BETWEEN THEMES -----------------------------------------
// -----------------------------------------------------------------------------------------------------------
$(document).ready(function () {
    const themeIcon = $(".themeIcon");
    const tooltipText = $(".themeIcon .tooltip-text");

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
// ------------------------------------------- T -----------------------------------------
// -----------------------------------------------------------------------------------------------------------

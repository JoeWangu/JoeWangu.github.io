// -----------------------------------------------------------------------------------------------------------
// ------------------------------------------- TOGGLE BETWEEN THEMES -----------------------------------------
// -----------------------------------------------------------------------------------------------------------
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

// Set the theme to light only if it hasn't been set before
if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
}

// Retrieve the saved theme from localStorage and apply it to the page
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
}

themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
});

// -----------------------------------------------------------------------------------------------------------
// -------------------------------------------  -----------------------------------------
// -----------------------------------------------------------------------------------------------------------


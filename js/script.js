// Theme Toggle
const themeToggler = document.querySelector('.theme-toggler');
const body = document.body;

themeToggler.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

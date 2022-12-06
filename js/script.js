window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_content'),
    menuItem = document.querySelectorAll('.header_menu'),
    hamburger = document.querySelector('.hamburger');
    logo = document.querySelector('.header_logo'),

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('header_content-active');
        logo.classList.toggle('header_logo-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('header_content-active');
            logo.classList.toggle('header_content-active');
        })
    })
})
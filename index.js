const menu = document.querySelector('.header-menu');
const btn = document.querySelector('.header-menu-btn');

btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    btn.setAttribute('aria-expanded', !isOpen);
    menu.classList.toggle('open');

    if (!isOpen) {
        menu.querySelector('a').focus();
    }
});
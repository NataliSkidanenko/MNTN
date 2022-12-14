const modalMenu = document.querySelector('.modal-block');
const buttonOpenMenu = document.querySelector('#menu-open');
const buttonCloseMenu = document.querySelector('#menu-close');

buttonOpenMenu.onclick = function (e) {
    e.preventDefault();
    modalMenu.classList.add('animation-in');
    modalMenu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

buttonCloseMenu.onclick = function (e) {
    e.preventDefault();
    modalMenu.classList.remove('animation-in');
    modalMenu.classList.add('animation-out');

    setTimeout(() => {
        modalMenu.classList.remove('animation-out');
        modalMenu.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 500);
};

document.addEventListener('mousemove', moveBackground);

function moveBackground(e) {
    console.log(e);
    const bgFirst = document.querySelector('.parallax__bg--1');
    const bgSecond = document.querySelector('.parallax__bg--2');
    const bgThird = document.querySelector('.parallax__bg--3');

    const bgFirstOffsetX = (e.clientX / window.innerWidth) * 30 - 35;
    const bgSecondOffsetX = (e.clientX / window.innerWidth) * 80 - 80;
    const bgThirdOffsetX = (e.clientX / window.innerWidth) * 100 - 100;

    const bgFirstOffsetY = (e.clientY / window.innerHeight) * 20 - 20;
    const bgSecondOffsetY = (e.clientY / window.innerHeight) * 60 - 60;
    const bgThirdOffsetY = (e.clientY / window.innerHeight) * 90 - 90;

    bgFirst.setAttribute('style', `background-position: ${bgFirstOffsetX}px ${bgFirstOffsetY}px`);
    bgSecond.setAttribute(
        'style',
        `background-position: ${bgSecondOffsetX}px ${bgSecondOffsetY}px`
    );
    bgThird.setAttribute('style', `background-position: ${bgThirdOffsetX}px ${bgThirdOffsetY}px`);
}

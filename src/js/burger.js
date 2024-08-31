const burgerBtn = document.querySelector('.burger-menu');
const navElements = document.querySelector('.header__nav');
const window = document.querySelector('body');


export const handleBurgerClick = () => {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('open');
        window.classList.toggle('hidden');
        navElements.classList.toggle('open');
    })
}
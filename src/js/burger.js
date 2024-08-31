const burgerBtn = document.querySelector('.burger-menu');
const navElements = document.querySelector('.header__nav');


export const handleBurgerClick = () => {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('open');
        navElements.classList.toggle('open');
    })
}
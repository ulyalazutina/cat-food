const inputElements = document.querySelector('.example__range');
const imgFat = document.querySelector('.example__slider-img--fat');
const imgThin = document.querySelector('.example__slider-img--thin');

export const handleSlider = () => {
    inputElements.addEventListener('input', (e) => {
      let valueRange = e.target.value
      let oppositeValueRange = 100 - valueRange;
      imgFat.style.clipPath = `inset(0 ${oppositeValueRange}% 0 0)`
      imgThin.style.clipPath = `inset(0 0 0 ${valueRange}%)`
    })
}
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.getElementById('value');
let counterValue = Number(value.textContent);
const decrement = (event) => value.textContent = counterValue -= 1;
const increment = (event) => value.textContent = counterValue += 1;
btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);

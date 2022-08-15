const btn = document.querySelector(".btn");
const cardNumber = document.querySelector(".number");
const cardName = document.querySelector(".name");
const cardCVC = document.querySelector(".cvc");
const spanElement = document.querySelectorAll(".error-input");
const nameInputEl = document.querySelector(".name-input");
const numberInputEl = document.querySelector(".number-input");
const monthInputEl = document.querySelector(".month-input");
const yearInputEl = document.querySelector(".year-input");
const cvcInputEl = document.querySelector(".cvc-input");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (numberInputEl.nodeValue !== Number)
    numberInputEl.setAttribute("data-error", "true");
  numberInputEl.closest("span").setAttribute("data-number", "true");
});

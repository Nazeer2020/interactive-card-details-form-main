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

const formValidation = () => {
  if (!Number(numberInputEl.value)) {
    numberInputEl.setAttribute("data-error", "true");
    numberInputEl.closest("span").setAttribute("data-number", "true");
  } else {
    numberInputEl.setAttribute("data-error", "false");
    numberInputEl.closest("span").setAttribute("data-number", "false");
  }

  if (cvcInputEl.value === "") {
    cvcInputEl.setAttribute("data-error", "true");
    cvcInputEl.closest("span").setAttribute("data-cvc", "true");
  } else {
    cvcInputEl.setAttribute("data-error", "false");
    cvcInputEl.closest("span").setAttribute("data-cvc", "false");
  }

  if (yearInputEl.value === "") {
    yearInputEl.setAttribute("data-error", "true");
    yearInputEl.closest("span").setAttribute("data-yy", "true");
  } else {
    yearInputEl.setAttribute("data-error", "false");
    yearInputEl.closest("span").setAttribute("data-yy", "false");
  }

  if (monthInputEl.value === "") {
    monthInputEl.setAttribute("data-error", "true");
    monthInputEl.closest("span").setAttribute("data-mm", "true");
  } else {
    monthInputEl.setAttribute("data-error", "false");
    monthInputEl.closest("span").setAttribute("data-mm", "false");
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  formValidation();
});

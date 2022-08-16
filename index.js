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
const btnContinue = document.querySelector(".btn-continue");

const formValidation = () => {
  let num = 0;
  if (!Number(numberInputEl.value)) {
    numberInputEl.setAttribute("data-error", "true");
    numberInputEl.closest("span").setAttribute("data-number", "true");
  } else {
    numberInputEl.setAttribute("data-error", "false");
    numberInputEl.closest("span").setAttribute("data-number", "false");
    num++;
  }

  if (cvcInputEl.value === "") {
    cvcInputEl.setAttribute("data-error", "true");
    cvcInputEl.closest("span").setAttribute("data-cvc", "true");
  } else {
    cvcInputEl.setAttribute("data-error", "false");
    cvcInputEl.closest("span").setAttribute("data-cvc", "false");
    num++;
  }

  if (yearInputEl.value === "") {
    yearInputEl.setAttribute("data-error", "true");
    yearInputEl.closest("span").setAttribute("data-yy", "true");
  } else {
    yearInputEl.setAttribute("data-error", "false");
    yearInputEl.closest("span").setAttribute("data-yy", "false");
    num++;
  }

  if (monthInputEl.value === "") {
    monthInputEl.setAttribute("data-error", "true");
    monthInputEl.closest("span").setAttribute("data-mm", "true");
  } else {
    monthInputEl.setAttribute("data-error", "false");
    monthInputEl.closest("span").setAttribute("data-mm", "false");
    num++;
  }

  return num;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const result = formValidation();
  if (result === 4) {
    console.log("hey");
    document.querySelector(".complete-form-container").classList.add("show");
    document.querySelector(".form-sub-container").classList.add("hide");
  }
});

btnContinue.addEventListener("click", () => {
  location.reload();
});

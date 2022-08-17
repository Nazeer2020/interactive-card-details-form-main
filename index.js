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
const dateElement = document.querySelector(".date");

const formValidation = () => {
  let num = 0;
  if (!Number(numberInputEl.value) || numberInputEl.value.length < 12) {
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

  if (nameInputEl.value === "") {
    nameInputEl.setAttribute("data-error", "true");
    nameInputEl.closest("span").setAttribute("data-details", "true");
  } else {
    nameInputEl.setAttribute("data-error", "false");
    nameInputEl.closest("span").setAttribute("data-details", "false");
    num++;
  }

  return num;
};

const fillingCardDetails = () => {
  cardNumber.innerText = `${numberInputEl.value.match(/.{1,4}/g).join("  ")}`;
  cardCVC.innerText = `${cvcInputEl.value}`;
  cardName.innerText = `${nameInputEl.value}`;
  dateElement.innerText = `${monthInputEl.value}/${yearInputEl.value}`;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const result = formValidation();
  if (result === 5) {
    console.log("hey");
    document.querySelector(".complete-form-container").classList.add("show");
    document.querySelector(".form-sub-container").classList.add("hide");
    fillingCardDetails();
  }
});

btnContinue.addEventListener("click", () => {
  location.reload();
});

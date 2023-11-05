const validationInput = document.querySelector("#validation-input");

function checkInputLength() {
  const inputValue = validationInput.value;
  const dataLength = validationInput.getAttribute("data-length");

  if (inputValue.length === Number(dataLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}

validationInput.addEventListener("blur", checkInputLength);



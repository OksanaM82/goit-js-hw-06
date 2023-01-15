const textInput = document.querySelector("#validation-input");
const textInputLength = Number(textInput.dataset.length);
textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === textInputLength) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.replace("valid", "invalid");
  }
});

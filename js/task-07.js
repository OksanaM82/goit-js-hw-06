const inputFontSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');


inputFontSize.addEventListener("change", (event) => {
  inputFontSize.range = event.currentTarget.value;
  spanText.style.fontSize = event.currentTarget.value + "px"
}
);
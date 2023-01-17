function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");
createBtn.addEventListener("click", addBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  const baseSize = 30;
  const boxSize = baseSize + i * 10;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.cssText = `width: ${boxSize}px;
     hight: ${boxSize}px;
      bacgraundcor: ${getRandomHexColor()};`
    boxes.appendChild(box);
  }
}
  function addBoxes () {
    const amount = document.querySelector("input").value;
    createBoxes(amount);
}
function destroyBoxes () {
  boxes.innerHTML = "";
} 

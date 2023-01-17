function getRandomHexColor() {
 return  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}

const changeColorBtn = document.querySelector(".change-color");

const textOfColor = document.querySelector(".color");
changeColorBtn.addEventListener("click", () => {
let hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  
  textOfColor.textContent = `${hexColor}`;
  console.log(hexColor);
});
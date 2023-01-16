const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulElement = document.getElementById("ingredients"); 
const listContent = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");
ulElement.insertAdjacentHTML("beforeend", listContent);

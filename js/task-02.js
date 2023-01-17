const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulElement = document.getElementById("ingredients");  
const ingredientsList = ingredients.map((ingredient) => {
  let items = document.createElement("li");
  items.classList.add("item");
  items.innerHTML = ingredient;
  ulElement.append(items);
  
});


const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

const categoriesArray = [...allCategories]
  .map(
    (categories) => `Category:  ${categories.firstElementChild.textContent}
Elements: ${categories.lastElementChild.children.length}`
  )
  .join("\n");
console.log(categoriesArray);
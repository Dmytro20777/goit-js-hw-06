const ingredientsArray = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients");

function createIngredientsList(array) {
  const liElements = array.map(ingredient => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    return li;
  });

  ul.append(...liElements);
}

createIngredientsList(ingredientsArray);



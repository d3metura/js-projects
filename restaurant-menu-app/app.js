import { dishes } from "./data.js";

const dishesContainer = document.getElementById("dishes-container");
const tabsContainer = document.getElementById("tabs-container");
const categoryNames = ["all", ...new Set(dishes.map((item) => item.category))];
let selectedCategory = "all";

loadCategories();
loadDishes();

function loadDishes() {
  dishesContainer.innerHTML = "";
  dishes.forEach((dish) => {
    if (selectedCategory == dish.category || selectedCategory == "all") {
      const dishElement = document.createElement("div");

      dishElement.innerHTML = `<div>${dish.title}</div> <div>$${dish.price}</div>`;
      dishElement.onclick = () => logTitle(dish.title);
      dishesContainer.appendChild(dishElement);
    }
  });
}

function selectCategory(category) {
  selectedCategory = category;
  loadDishes();
}

function logTitle(title) {
  console.log(title);
}

function loadCategories() {
  categoryNames.forEach((category) => {
    let categoryButton = document.createElement("p");
    categoryButton.textContent = category;
    categoryButton.onclick = () => selectCategory(category);
    tabsContainer.appendChild(categoryButton);
  });
}

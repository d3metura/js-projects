import { dishes } from "./data.js";

const dishesContainer = document.getElementById("dishes-container");
const tabsContainer = document.getElementById("tabs-container");
const categoryNames = ["all", ...new Set(dishes.map((item) => item.category))];
let selectedCategory = "all";

function loadCategories() {
  let tabsHTML = "";
  categoryNames.forEach((category) => {
    tabsHTML += `<p class="category-el">${category}</p>`;
  });
  tabsContainer.innerHTML = tabsHTML;
}

loadCategories();

const categoryElements = document.querySelectorAll(".category-el");

categoryElements.forEach((category) => {
  category.addEventListener("click", function () {
    selectedCategory = category.textContent;
    console.log(selectedCategory);
    loadDishes();
  });
});

function loadDishes() {
  let dishesHTML = "";
  dishes.forEach((dish) => {
    if (dish.category == selectedCategory || selectedCategory == "all") {
      dishesHTML += `<p>${dish.category}</p>`;
    }
  });
  dishesContainer.innerHTML = dishesHTML;
}

// buttons.forEach(function(button) {
//   button.addEventListener('click', function() {
//     console.log('Button clicked');
//   });
// });

const tabsContainer = document.querySelector(".tabs-container");
const titles = ["history", "vision", "goals"];
let selectedTitle = titles[0];

titles.forEach((title) => {
  const span = document.createElement("span");
  span.textContent = title;
  span.addEventListener("click", () => {
    selectedTitle = title;
    console.log(selectedTitle);
  });
  tabsContainer.appendChild(span);
});

import { dishes } from "./data.js";

const menuContainer = document.getElementById("menu-container");
const menuTabs = document.getElementById("menu-tabs");

function renderTabs() {
  const tabs = ["All", ...new Set(dishes.map((item) => item.category))];
  console.log(tabs);
  let tabsHTML = "";
  tabs.forEach((tab) => {
    addEventListener("click", () => console.log(tab));
    tabsHTML += `<p>${tab}</p>`;
  });
  menuTabs.innerHTML = tabsHTML;
}

function renderMenu() {
  let menuHTML = "";
  dishes.forEach((item) => {
    menuHTML += `
      <div class="menu-item">
        <img src="${item.img}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.category}</p>
        <p>$${item.price}</p>
      </div>
    `;
  });
  menuContainer.innerHTML = menuHTML;
}

function onCategoryChange() {
  let menuHTML = "";
  dishes.forEach((item) => {
    if (item.category === category) {
      menuHTML += `
      <div class="menu-item">
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.category}</p>
      <p>$${item.price}</p>
      </div>
      `;
    }
  });
  menuContainer.innerHTML = menuHTML;
}

window.onload = () => {
  renderTabs();
  renderMenu();
};

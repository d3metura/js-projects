const tabsContainer = document.querySelector(".tabs-container");
const infoContainer = document.querySelector(".info-container");
const tabs = [
  {
    id: "his",
    title: "History",
    selected: false,
    description: "this is history",
  },
  {
    id: "ath",
    title: "Another Thing",
    selected: false,
    description: "this is anoter thing",
  },
  {
    id: "sth",
    title: "Something",
    selected: false,
    description: "this is something",
  },
];

let selectedTabIndex = 0;

tabs.forEach((tab, index) => {
  const span = document.createElement("span");
  tab.element = span;
  span.textContent = tab.title;
  span.addEventListener("click", () => {
    selectedTabIndex = index;
    updateUI();
  });
  tabsContainer.appendChild(span);
});

updateUI();

function updateUI() {
  tabs.forEach((tab, index) => {
    if (index == selectedTabIndex) {
      tab.element.style.backgroundColor = "white";
    } else {
      tab.element.style.backgroundColor = "#dbdbdb";
    }
  });
  infoContainer.textContent = tabs[selectedTabIndex].description;
}

import { TabSystem } from "./TabSystem.js";

const tabsContainer = document.querySelector(".tabs-container");
const infoContainer = document.querySelector(".info-container");

const tabs = [
  {
    title: "History",
    description: "this is history",
  },
  {
    title: "Another Thing",
    description: "this is anoter thing",
  },
  {
    title: "Something",
    description: "this is something",
  },
];

var tabSystem = new TabSystem(tabs, tabsContainer, infoContainer);
tabSystem.addTabSelectListener((tabTitle) => console.log(tabTitle));

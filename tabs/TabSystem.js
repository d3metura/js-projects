import { Tab } from "./Tab.js";

export class TabSystem {
  constructor(tabInfos, tabsContainer, descriptionPlace) {
    this.tabs = [];

    tabInfos.forEach((tabInfo) => {
      const span = document.createElement("span");
      tabsContainer.appendChild(span);
      var tab = new Tab(tabInfo, span, descriptionPlace);
      this.tabs.push(tab);
      tab.addSquareClickListener(this.selectSquare);
    });
  }

  addTabSelectListener = (listener) => {
    this.onTabSelected = listener;
  };

  selectSquare = (clickedTab) => {
    this.onTabSelected(clickedTab.tabInfo.title);
    this.tabs.forEach((tab) => {
      tab.setSelected(tab == clickedTab);
    });
  };
}

export class Tab {
  constructor(tabInfo, uiElement, descriptionPlace) {
    this.tabInfo = tabInfo;
    this.uiElement = uiElement;
    this.descriptionPlace = descriptionPlace;
    uiElement.textContent = tabInfo.title;
    uiElement.addEventListener("click", () => this.onSquareSelect(this));
  }

  setSelected = (selected) => {
    if (selected) {
      this.uiElement.style.backgroundColor = "blue";
      this.descriptionPlace.textContent = this.tabInfo.description;
    } else {
      this.uiElement.style.backgroundColor = "red";
    }
  };

  addSquareClickListener = (listener) => {
    this.onSquareSelect = listener;
  };
}

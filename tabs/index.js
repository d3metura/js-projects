class Square {
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

const squares = [];

tabs.forEach((tab) => {
  const span = document.createElement("span");
  tabsContainer.appendChild(span);
  var square = new Square(tab, span, infoContainer);
  squares.push(square);
  square.addSquareClickListener(selectSquare);
});

function selectSquare(clickedSquare) {
  squares.forEach((square) => {
    square.setSelected(square == clickedSquare);
  });
}

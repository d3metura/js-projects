const container = document.getElementById("container");
const addBtn = document.getElementById("add-btn");
const innerContainer = document.createElement("div");
innerContainer.style.width = "100%";
innerContainer.style.height = "100%";
innerContainer.style.position = "relative";
container.appendChild(innerContainer);

function generateRandomDiv() {
  //   div.style.width = Math.floor(50 + Math.random() * 200) + "px";
  //   div.style.height = Math.floor(50 + Math.random() * 200) + "px";
  const div = document.createElement("div");
  div.style.width = Math.floor(50 + Math.random() * 200) + "px";
  div.style.height = Math.floor(50 + Math.random() * 200) + "px";
  div.style.backgroundColor = "yellow";
  div.style.border = "solid 5px black";
  div.style.borderRadius = "8px";
  div.style.position = "absolute";
  div.style.top =
    Math.floor(
      Math.random() * (innerContainer.offsetHeight - div.offsetHeight)
    ) + "px";
  div.style.left =
    Math.floor(Math.random() * (innerContainer.offsetWidth - div.offsetWidth)) +
    "px";
  innerContainer.appendChild(div);
}

addBtn.addEventListener("click", generateRandomDiv);

// const div = document.createElement("div");
// div.style.width = Math.floor(Math.random() * 100) + "px";
// div.style.height = Math.floor(Math.random() * 100) + "px";
// div.style.backgroundColor = "red";
// div.style.float = "left";
// div.style.margin = "5px";
// container.appendChild(div);

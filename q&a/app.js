const questionContainers = document.querySelectorAll(".questionContainer");

questionContainers.forEach((questionContainer) => {
  const toggleButton = questionContainer.querySelector(".toggleButton");
  const answer = questionContainer.querySelector(".answer");

  toggleButton.addEventListener("click", function () {
    answer.classList.toggle("show");
    if (toggleButton.innerHTML === "+") {
      toggleButton.innerHTML = "-";
    } else {
      toggleButton.innerHTML = "+";
    }
  });
});

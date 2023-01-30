const showModalButton = document.getElementById("show-modal");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal");

showModalButton.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

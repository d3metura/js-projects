import { reviews } from "./data.js";

const imgEl = document.querySelector("#img-el");
const nameEl = document.querySelector("#name-el");
const jobEl = document.querySelector("#job-el");
const textEl = document.querySelector("#text-el");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
imgEl.src = reviews[currentIndex].img;
nameEl.textContent = reviews[currentIndex].name;
jobEl.textContent = reviews[currentIndex].job;
textEl.textContent = reviews[currentIndex].text;

function changeIndex() {
  currentIndex = (currentIndex + 1) % reviews.length;
  imgEl.src = reviews[currentIndex].img;
  nameEl.textContent = reviews[currentIndex].name;
  jobEl.textContent = reviews[currentIndex].job;
  textEl.textContent = reviews[currentIndex].text;
}

nextBtn.addEventListener("click", changeIndex);

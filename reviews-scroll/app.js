import { reviews } from "./data.js";

const imgEl = document.querySelector("#img-el");
const nameEl = document.querySelector("#name-el");
const jobEl = document.querySelector("#job-el");
const textEl = document.querySelector("#text-el");
const forthBtn = document.querySelector(".forth-btn");
const backBtn = document.querySelector(".back-btn");

let currentIndex = 0;
imgEl.src = reviews[currentIndex].img;
nameEl.textContent = reviews[currentIndex].name;
jobEl.textContent = reviews[currentIndex].job;
textEl.textContent = reviews[currentIndex].text;

function nextIndex() {
  currentIndex = (currentIndex + 1) % reviews.length;
  imgEl.src = reviews[currentIndex].img;
  nameEl.textContent = reviews[currentIndex].name;
  jobEl.textContent = reviews[currentIndex].job;
  textEl.textContent = reviews[currentIndex].text;
}

function prevIndex() {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  imgEl.src = reviews[currentIndex].img;
  nameEl.textContent = reviews[currentIndex].name;
  jobEl.textContent = reviews[currentIndex].job;
  textEl.textContent = reviews[currentIndex].text;
}

forthBtn.addEventListener("click", nextIndex);
backBtn.addEventListener("click", prevIndex);

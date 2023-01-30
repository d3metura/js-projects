import { characters } from "./data.js";

const generateButtonEl = document.querySelector(".generate-button-el");

console.log(characters);

let passwordLength = 10;

function generateRandomPassword() {
  let randomPassword = "";
  for (let i = 1; i <= passwordLength; i++) {
    let randomNum = Math.floor(Math.random() * characters.length);
    let randomChar = characters[randomNum];
    randomPassword += randomChar;
  }
  return randomPassword;
}

function generatePasswords() {
  const numberOfPasswords = parseInt(document.getElementById("number").value);
  const passwordDisplay = document.getElementById("passwords");
  passwordDisplay.innerHTML = "";
  let passwordsHtml = "";
  for (let i = 0; i < numberOfPasswords; i++) {
    const password = generateRandomPassword();
    passwordsHtml += `<p>${i + 1}) ${password}</p>`;
  }
  passwordDisplay.innerHTML = passwordsHtml;
}

generateButtonEl.addEventListener("click", generatePasswords);

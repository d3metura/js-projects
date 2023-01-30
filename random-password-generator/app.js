const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const generateButtonEl = document.querySelector(".generate-button-el");
const numOfPasswords = document.querySelector(".num-of-passwords");

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

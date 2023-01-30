const characters=["A","B","C","D","E","F","G",
"H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y",
"z", "0", "1", "2", "3", "4", "5", "6", "7",
 "8", "9"];

const generateButtonEl = document.querySelector(".generate-button-el");
const numOfPasswords = document.querySelector(".num-of-passwords")
// const passwordElements = document.querySelectorAll(".password");

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
  const numberOfPasswords = parseInt(document.getElementById('number').value);
  const passwordDisplay = document.getElementById('passwords');
  passwordDisplay.innerHTML = '';
  
  for (let i = 0; i < numberOfPasswords; i++) {
    const password = generateRandomPassword();
    passwordDisplay.innerHTML += `<p>${i+1}) ${password}</p>`;
  }
}

generateButtonEl.addEventListener("click", generatePasswords);

// if we waneted to generate exactly the amount of passwords that we have elements with class="password"
//
// function generatePasswords() {
//   for (let i = 0; i < passwordElements.length; i++) {
//     passwordElements[i].textContent = generateRandomPassword();
//   }
//   numOfPasswords.textContent = `Number of Passwords Generated: ${passwordElements.length}`
// }

// generateButtonEl.addEventListener("click", generatePasswords);
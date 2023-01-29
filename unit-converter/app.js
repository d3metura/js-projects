const convertBtn = document.querySelector(".convert-btn");
const metersToFeet = document.querySelector(".meters-to-feet");
const feetToMeters = document.querySelector(".feet-to-meters");
let valueToConvert = document.querySelector(".input-value").value;

function convert() {
  console.log(valueToConvert);
  metersToFeet.textContent = `${valueToConvert} meters = ${
    valueToConvert * 5
  } feet`;
}

convertBtn.addEventListener("click", convert);

// function myFunction() {
//     var x = document.getElementById("myText").value;
//     document.getElementById("demo").innerHTML = x;
// }

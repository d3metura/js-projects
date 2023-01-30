const convertBtn = document.querySelector(".convert-btn");
const metersToFeet = document.querySelector(".meters-to-feet");
const feetToMeters = document.querySelector(".feet-to-meters");
let valueToConvert = document.querySelector(".input-value");
const litersToGallons = document.querySelector(".liters-to-gallons");
const gallonsToLiters = document.querySelector(".gallons-to-liters");
const kilosToPounds = document.querySelector(".kilos-to-pounds");
const poundsToKilos = document.querySelector(".pounds-to-kilos");

let input = document.querySelector("input[type='number']");

function getTextWidth(text, font) {
  let canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement("canvas"));
  let context = canvas.getContext("2d");
  context.font = font;
  let metrics = context.measureText(text);
  return metrics.width;
}

input.addEventListener("input", function () {
  let textWidth = getTextWidth(input.value + 100, "60px sans-serif");
  if (textWidth > input.offsetWidth) {
    input.style.width = textWidth + "px";
    input.setAttribute("length", input.style.width);
  } else {
    input.style.width = textWidth + "px";
  }
});

const metersToFeetRatio = 3.28;
const feetToMetersRatio = 0.3048;
const litersToGallonsRatio = 0.264172;
const gallonsToLitersRatio = 3.785411784;
const kilosToPoundsRatio = 2.2;
const poundsToKilosRatio = 0.45359237;

let valAsNumber = 0;

valueToConvert.addEventListener("input", function () {
  let value = valueToConvert.value;
  valAsNumber = parseFloat(value);
});

function convert() {
  if (valAsNumber) {
    metersToFeet.textContent = `${valAsNumber} meters = ${(
      valAsNumber * metersToFeetRatio
    ).toFixed(2)} feet |`;
    feetToMeters.textContent = `${valAsNumber} meters = ${(
      valAsNumber * feetToMetersRatio
    ).toFixed(2)} feet`;
    litersToGallons.textContent = `${valAsNumber} liters = ${(
      valAsNumber * litersToGallonsRatio
    ).toFixed(2)} gallons |`;
    gallonsToLiters.textContent = `${valAsNumber} gallons = ${(
      valAsNumber * gallonsToLitersRatio
    ).toFixed(2)} liters`;
    kilosToPounds.textContent = `${valAsNumber} pounds = ${(
      valAsNumber * kilosToPoundsRatio
    ).toFixed(2)} kilos |`;
    poundsToKilos.textContent = `${valAsNumber} kilos = ${(
      valAsNumber * poundsToKilosRatio
    ).toFixed(2)} pounds`;
  }
}

convertBtn.addEventListener("click", convert); // why convert and not convert()?

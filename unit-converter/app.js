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

const METERS_TO_FEETRATIO = 3.28;
const FEET_TO_METERSRATIO = 0.3048;
const LITERS_TO_GALLONSRATIO = 0.264172;
const GALLONS_TO_LITERSRATIO = 3.785411784;
const KILOS_TO_POUNDSRATIO = 2.2;
const POUNDS_TO_KILOSRATIO = 0.45359237;

let valAsNumber = 0;

valueToConvert.addEventListener("input", function () {
  let value = valueToConvert.value;
  valAsNumber = parseFloat(value);
});

function convert() {
  if (!valAsNumber) return;

  metersToFeet.textContent = `${valAsNumber} meters = ${(
    valAsNumber * METERS_TO_FEETRATIO
  ).toFixed(2)} feet |`;
  feetToMeters.textContent = `${valAsNumber} meters = ${(
    valAsNumber * FEET_TO_METERSRATIO
  ).toFixed(2)} feet`;
  litersToGallons.textContent = `${valAsNumber} liters = ${(
    valAsNumber * LITERS_TO_GALLONSRATIO
  ).toFixed(2)} gallons |`;
  gallonsToLiters.textContent = `${valAsNumber} gallons = ${(
    valAsNumber * GALLONS_TO_LITERSRATIO
  ).toFixed(2)} liters`;
  kilosToPounds.textContent = `${valAsNumber} pounds = ${(
    valAsNumber * KILOS_TO_POUNDSRATIO
  ).toFixed(2)} kilos |`;
  poundsToKilos.textContent = `${valAsNumber} kilos = ${(
    valAsNumber * POUNDS_TO_KILOSRATIO
  ).toFixed(2)} pounds`;
}

convertBtn.addEventListener("click", convert);

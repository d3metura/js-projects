const homeCountEl = document.querySelector(".home-count-el");
const guestCountEl = document.querySelector(".guest-count-el");
const plus1El = document.querySelector(".plus1-el");
const prevHomeCountEl = document.querySelector(".prev-home-count-el");
const prevGuestCountEl = document.querySelector(".prev-guest-count-el");
const prevCountsEl = document.querySelector(".prev-counts-el");

let homeCount = 0;
let guestCount = 0;
const prevCountsArray = [];

function incrementHome(amount) {
  homeCount += amount;
  homeCountEl.textContent = homeCount;
}

function incrementGuest(amount) {
  guestCount += amount;
  guestCountEl.textContent = guestCount;
}

function resetCounts() {
  prevCountsArray.push({ home: homeCount, guest: guestCount });
  console.log(prevCountsArray);
  let prevCountsElements = prevCountsArray.map((prevCount) => {
    return `<h4>${prevCount.home} to ${prevCount.guest}</h4>`;
  });
  prevCountsEl.innerHTML = prevCountsElements;
  homeCount = 0;
  guestCount = 0;
  homeCountEl.textContent = homeCount;
  guestCountEl.textContent = guestCount;
}

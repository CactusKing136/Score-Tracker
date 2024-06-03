let homeEl = document.querySelector(".home");
let guestEl = document.querySelector(".guest");

let homePoints = 0;
let guestPoints = 0;

function add1Home() {
    homePoints += 1;
    homeEl.innerText = homePoints;
}

function add2Home() {
    homePoints += 2;
    homeEl.innerText = homePoints;
}

function add3Home() {
    homePoints += 3;
    homeEl.innerText = homePoints;
}

function add1Guest() {
    guestPoints += 1;
    guestEl.innerText = guestPoints;
}

function add2Guest() {
    guestPoints += 2;
    guestEl.innerText = guestPoints;
}

function add3Guest() {
    guestPoints += 3;
    guestEl.innerText = guestPoints;
}
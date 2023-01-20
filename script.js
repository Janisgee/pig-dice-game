"use strict";

const btnRollEl = document.querySelector(".btn-rollDice");
const btnNewEl = document.querySelector(".btn-new");
const btnHoldEl = document.querySelector(".btn-hold");

const diceImageEl = document.querySelector(".dice-image");

// Starting condition
diceImageEl.classList.add("imageHidden");

// When pressed Roll Dice Button
btnRollEl.addEventListener("click", function() {
    diceImageEl.classList.remove("imageHidden");
    //Generate random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    //Display dice roll
    diceImageEl.src = `dice-${dice}.png`;
});
"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector(".score--0");
const score1El = document.querySelector(".score--1");
const current0El = document.querySelector(".currentScore--0");
const current1El = document.querySelector(".currentScore--1");

const btnRollEl = document.querySelector(".btn-rollDice");
const btnNewEl = document.querySelector(".btn-new");
const btnHoldEl = document.querySelector(".btn-hold");

const diceTurn0El = document.querySelector(".diceTurn--0");
const diceTurn1El = document.querySelector(".diceTurn--1");
const diceImageEl = document.querySelector(".dice-image");

// current score back to 0;
// Starting condition

let activePlayer, playing, currentScore, scores;

function initalize() {
    activePlayer = 0;
    playing = true;
    currentScore = 0;
    scores = [0, 0];

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceTurn1El.classList.remove("fa-shake");
    player0El.classList.remove("player--win");
    player1El.classList.remove("player--win");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");

    document
        .querySelector(`.diceTurn--${activePlayer}`)
        .classList.add("fa-shake");
    diceImageEl.classList.add("imageHidden");
}

initalize();

function switchPlayer() {
    // current score back to 0;
    document
        .querySelector(`.diceTurn--${activePlayer}`)
        .classList.remove("fa-shake");
    document.querySelector(`.currentScore--${activePlayer}`).textContent = 0;
    currentScore = 0;
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    // switching players
    activePlayer = activePlayer === 0 ? 1 : 0;
    // Change active player background color
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    document
        .querySelector(`.diceTurn--${activePlayer}`)
        .classList.add("fa-shake");
}

// When pressed Roll Dice Button
btnRollEl.addEventListener("click", function() {
    if (playing) {
        diceImageEl.classList.remove("imageHidden");
        //Generate random dice roll
        let dice = Math.trunc(Math.random() * 6) + 1;
        //Display dice roll
        diceImageEl.src = `dice-${dice}.png`;
        console.log(dice);
        if (dice !== 1) {
            //Dice number accunminating in current score section
            currentScore += dice;
            document.querySelector(`.currentScore--${activePlayer}`).textContent =
                currentScore;

            //
        } else {
            switchPlayer();
        }
    }
});

btnHoldEl.addEventListener("click", function() {
    if (playing) {
        // Add current score to total score
        scores[activePlayer] += currentScore;
        document.querySelector(`.score--${activePlayer}`).textContent =
            scores[activePlayer];

        console.log(scores);
        // check if score more than 100
        if (scores[activePlayer] >= 20) {
            //if yes, current player wins!
            playing = false;

            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove("player--active");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add("player--win");
        } else {
            //if no, switch player.
            switchPlayer();
        }
    }
});

// User reset the game
btnNewEl.addEventListener("click", initalize);
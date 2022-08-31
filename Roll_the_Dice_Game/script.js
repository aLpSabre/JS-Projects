'use strict';

//*Players
const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")

//* Scores
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");

//* Currents
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");

//* Dice
const dice = document.querySelector(".dice")

//*Buttons

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//! Application

let activePlayer, currentScore, scores, rolled;


const start = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  rolled = false;
  current0.textContent = "0"
  current1.textContent = "0"
  score0.textContent = "0"
  score1.textContent = "0"
  btnRoll.disabled = false;
  btnHold.disabled = false;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  dice.style.display = "none"
}
//! Start
start();

const changePlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer ? 0 : 1;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}
btnRoll.addEventListener("click", function () {
  rolled = true;
  let random = Math.trunc(Math.random() * 6) + 1;
  dice.style.display = "block"
  //console.log(random)
  dice.src = `dice-${random}.png`;
  //console.log("num", num);
  if (random !== 1) {
    currentScore += random;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    changePlayer();
  }
});

btnHold.addEventListener("click", function () {
  if (rolled) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      btnRoll.disabled = true;
      btnHold.disabled = true;
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
      dice.style.display = "none"
    } else {
      changePlayer();
    }
  }
})

btnNew.addEventListener("click", start)
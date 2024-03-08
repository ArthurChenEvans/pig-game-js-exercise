"use strict";

let randomInt = function (max) { return Math.floor(Math.random() * max) }
let currentScore = document.querySelector(".selected-current-score");
let totalScore = document.querySelector(".selected-total-score");
let currentScores = document.querySelectorAll(".card-box h3");
let totalScores = document.querySelectorAll(".card h1");
let players = document.querySelectorAll(".card");

function rollDice() {
    let dice = randomInt(6);
    currentScore.textContent = dice;

    if (dice == 1)
    {
        switchPlayer();
    } else
    {
        totalScore.textContent = Number(totalScore.textContent) + dice;
    }
}

function switchPlayer()
{
    players.forEach(player => {
        player.classList.toggle("selected");
    })

    currentScores.forEach(score => {
        console.log(score);
        score.classList.toggle("selected-current-score");
    })

    totalScores.forEach(score => {
        score.classList.toggle("selected-total-score");
    })

    currentScore = document.querySelector(".selected-current-score");
    totalScore = document.querySelector(".selected-total-score");
}

document.querySelector("#roll-dice").addEventListener('click', () => rollDice());


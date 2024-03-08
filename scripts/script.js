"use strict";

let randomInt = function (max) { return Math.floor(Math.random() * max) }
let currentScore = document.querySelector(".selected-current-score");
let totalScore = document.querySelector(".selected-total-score");
let currentScores = document.querySelectorAll(".card-box h3");
let totalScores = document.querySelectorAll(".card h1");
let players = document.querySelectorAll(".card");
let hold = document.querySelector("#hold");
let newGameButton = document.querySelector("#new-game");

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
        score.classList.toggle("selected-current-score");
    })

    totalScores.forEach(score => {
        score.classList.toggle("selected-total-score");
    })

    currentScore = document.querySelector(".selected-current-score");
    totalScore = document.querySelector(".selected-total-score");
}

function resetGame() {
    players.forEach(player => {
        player.querySelector("h1").textContent = "0";
        player.querySelector(".card-box h3").textContent = "0";
        player.classList.remove("selected");
        player.querySelector("h1").classList.remove("selected-total-score");
        player.querySelector(".card-box h3").classList.remove("selected-current-score");
    });

    document.querySelector(".card").classList.add("selected");
    document.querySelector(".card h1").classList.add("selected-total-score");
    document.querySelector(".card-box h3").classList.add("selected-current-score");
    currentScore = document.querySelector(".selected-current-score");
    totalScore = document.querySelector(".selected-total-score");
}

document.querySelector("#roll-dice").addEventListener('click', () => rollDice());
hold.addEventListener('click', () => {
    let player = document.querySelector(".selected h2");
    if (Number(totalScore.textContent) >= 100)
    {
        alert(`${player.textContent} wins!`);
        resetGame();
    }
    else
    {
        switchPlayer();
    }
});

newGameButton.addEventListener('click', () => resetGame());

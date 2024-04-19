//choice available
let option = ["rock", "paper", "scissor"]

function getComputerChoice() {
    // randomly choose from the given list
    return option[Math.floor(Math.random() * option.length)];

}


// to play rounds
let playerCount=0;
let computerCount =0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        console.log("tie");

    else if (playerSelection === "rock" && computerSelection == "paper") {
        computerCount +=1;
        console.log("you lose! paper beats rock");
    }


    else if (playerSelection === "rock" && computerSelection == "scissor") {
        playerCount += 1;
        console.log("you win! rock beats scissor");

    }

    else if (playerSelection === "paper" && computerSelection == "rock") {
        playerCount += 1;
        console.log("you win! paper beats rock");

    }

    else if (playerSelection === "paper" && computerSelection == "scissor") {
        computerCount +=1;
        console.log("you lose! scissor beats paper");
    }

    else if (playerSelection === "scissor" && computerSelection == "paper") {
        playerCount += 1;
        console.log("you win! scissor beats paper");

    }

    else if (playerSelection === "scissor" && computerSelection == "rock") {
        computerCount +=1;
        console.log("you lose! rock beats scissor");
    }

}


// DOM
const btn = document.querySelector('#btn');
const comp = document.querySelector(".comp");
const p1 = document.querySelector(".p1");

btn.addEventListener('click', (event)=>{
    let target = event.target;
    let computerSelection = getComputerChoice();
    
    comp.textContent = `Computer score: ${computerCount}`;
    p1.textContent = `Player score: ${playerCount}`;
    
    playRound(target.id, computerSelection);
    
});



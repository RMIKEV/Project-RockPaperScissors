let option = ["rock", "paper", "scissor"]

function getComputerChoice() {
    // randomly choose from the given list
    return option[Math.floor(Math.random() * option.length)];

}


function getUserChoice() {
    let inp = prompt("choose anything from rock paper and scissors");
    inp = inp.toLowerCase();

    return inp;
}

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



const btn = document.querySelector('#btn');

btn.addEventListener('click', (event)=>{
    let target = event.target;
    let computerSelection = getComputerChoice();
    switch(target.id){
        case 'rock': {
            
            playRound("rock", computerSelection);
            break;
        }

        case 'paper': {
            
            playRound("paper", computerSelection);
            break;
        }

        case 'scissor': {
            
            playRound("scissor", computerSelection);
            break;
        }
    }

});




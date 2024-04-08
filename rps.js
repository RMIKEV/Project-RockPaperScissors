let option =["rock", "paper", "scissor"]

// to generate random choice for computer
function getComputerChoice(){
    let computerChoice = option[Math.floor(Math.random() * option.length)];
    return computerChoice;
}

// get user choice
function getUserChoice(){
    let inp = prompt("choose anything from rock paper and scissors");
    return inp;
}


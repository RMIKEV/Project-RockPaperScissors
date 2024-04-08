let option =["rock", "paper", "scissor"]
let count = 0;
// to generate random choice for computer
function getComputerChoice(){
    let computerChoice = option[Math.floor(Math.random() * option.length)];
    return computerChoice;
}

// get user choice
function getUserChoice(){
    let inp = prompt("choose anything from rock paper and scissors");
    inp = inp.toLowerCase();
    
    return inp;
}

// play round
function play(playerSelection, computerselection){
    if(playerSelection === computerselection)
        console.log("tie");
    
    else if( playerSelection === "rock" && computerselection == "paper")
    {
        console.log("you lose! paper beats rock");
    }
        
    
    else if( playerSelection === "rock" && computerselection == "scissor"){
        count+=1;
        console.log("you win! rock beats scissor");
        
    }
    
    else if( playerSelection === "paper" && computerselection == "rock"){
        count+=1;
        console.log("you win! paper beats rock");
        
    }
    
    else if( playerSelection === "paper" && computerselection == "scissor"){
        console.log("you lose! scissor beats paper");
    }

    else if( playerSelection === "scissor" && computerselection == "paper"){
        count+=1;
        console.log("you win! scissor beats paper");
        
    }
    
    else if( playerSelection === "scissor" && computerselection == "rock"){
        console.log("you lose! rock beats scissor");
    }



}

function playGame(){
    
    for(let i =0; i<5; ++i){
        let userInput = getUserChoice();
        let compInput = getComputerChoice();
        play(userInput, compInput); 
        console.log(count);
    }

    if(count == 0){
        console.log("draw");
    }
        
    else if(count>2){
        console.log("player wins");
    }
        
    else{
        console.log("computer wins");
    }
        
}

playGame();




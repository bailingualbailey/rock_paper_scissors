let button = document.getElementById ("btn");
let compScore = 0
let playerScore = 0
let roundIncrease = 0

function computerPlay() {
    let plays = ["rock", "paper", "scissors"];
    return plays[Math.floor(Math.random() * ((plays.length -1) - 0 + 1))];
} 

let playerTurn = prompt('Rock, paper, or scissors?');
let computerTurn = computerPlay();

if (playerTurn === 'rock') {
    alert('Computer chose: ' + computerTurn + '!');

    switch(computerTurn) {
        case "rock":
            alert('Great minds think alike, TRY AGAIN');
            break;
        case "paper":
            alert('Paper beats rock, YOU LOSE!');
            compScore += 1
            break;
        case "scissors":
            alert('Rock beats scissors, YOU WIN!');
            playerScore += 1
            break;
    }
    roundIncrease += 1;
    alert("round: " + roundIncrease + " Score: " + playerScore);
}

if (playerTurn === 'paper') {
    alert('Computer chose: ' + computerTurn + '!');
    
    switch(computerTurn) {
        case "rock":
            alert('Paper beats rock, YOU WIN!');
            playerScore += 1
            break;
        case "paper":
            alert('Great minds think alike, TRY AGAIN');
            break;
        case "scissors":
            alert('Scissors beats paper, YOU LOSE!');
            compScore += 1
            break;
    }
    roundIncrease += 1;
    alert("round: " + roundIncrease + " Your Score: " + playerScore + " Computer Score: " + compScore);
}

if (playerTurn === 'scissors') {
    alert('Computer chose: ' + computerTurn + '!');

    switch(computerTurn) {
        case "rock":
            alert('Rock beats scissors, YOU LOSE!');
            compScore += 1
            break;
        case "paper":
            alert('Scissors beats paper, YOU WIN!');
            playerScore += 1
            break;
        case "scissors":
            alert('Great minds think alike, TRY AGAIN');
            break;
    }
    roundIncrease += 1;
    alert("round: " + roundIncrease + " Score: " + playerScore);
}








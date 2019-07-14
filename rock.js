


function computerPlay () {
    let plays = ["rock", "paper", "scissors"];
    return plays[Math.floor(Math.random() * ((plays.length -1) - 0 + 1))];
}  

  computerPlay();
 

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
            break;
        case "scissors":
            alert('Rock beats scissors, YOU WIN!');
            break;
    }
}

if (playerTurn === 'paper') {
    alert('Computer chose: ' + computerTurn + '!');
    
    switch(computerTurn) {
        case "rock":
            alert('Paper beats rock, YOU WIN!');
            break;
        case "paper":
            alert('Great minds think alike, TRY AGAIN');
            break;
        case "scissors":
            alert('Scissors beats paper, YOU LOSE!');
            break;
    }
}

if (playerTurn === 'scissors') {
    alert('Computer chose: ' + computerTurn + '!');

    switch(computerTurn) {
        case "rock":
            alert('Rock beats scissors, YOU LOSE!');
            break;
        case "paper":
            alert('Scissors beats paper, YOU WIN!');
            break;
        case "scissors":
            alert('Great minds think alike, TRY AGAIN');
            break;
    }
}





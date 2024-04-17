const availableOptions = ['rock', 'paper', 'scissors']; // choices / options the player will have

document.getElementById('rock').addEventListener('click', function() {
    PlayGame('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    PlayGame('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
    PlayGame('scissors');
});

function GetBobsAnswer() { // TO DO (bob the computer :D)
    return 'paper' 
}

function PlayGame(playerChoice) {
    const computerRandomChoice = GetBobsAnswer();
    const resultElement = document.getElementById('result');
    console.log('[LOG] Computers Choice: ' ,  computerRandomChoice)
    console.log('[LOG] Players Choice: ' ,  playerChoice)
    if (playerChoice === computerRandomChoice) { // if they are the same answer tied !
            console.log('Tied!')
            resultElement.innerText = ``;
        return
    } else if (playerChoice == 'scissors' && computerRandomChoice == 'paper' || playerChoice == 'paper' && computerRandomChoice == 'rocks' || playerChoice == 'rock' && computerRandomChoice == 'scissors') {
            console.log('YOU WIN BECAUSE ' , playerChoice + ' '  + 'BEATS ' + computerRandomChoice)
            resultElement.innerText = ``;
        return
    } else {
        console.log("YOU DON'T WIN BECAUSE " , playerChoice + " "  + "BEATS " + computerRandomChoice)
    }

}

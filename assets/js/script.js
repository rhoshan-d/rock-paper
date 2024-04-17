const availableOptions = ['rock', 'paper', 'scissors'];
const randomWinPrize = ['100' , '200' , '500' , '900' , '1000'];
let gameInProgress = false;
let curRound = 0;
let userBalance = 0;
let MaxRounds = 5;

document.getElementById('rock').addEventListener('click', function() {
    PlayGame('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    PlayGame('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
    PlayGame('scissors');
});

function GetBobsAnswer() {
    let random = Math.floor(Math.random() * availableOptions.length);
    return availableOptions[random];
}

function RandomPrize() {
    let random = Math.floor(Math.random() * randomWinPrize.length);
    return randomWinPrize[random];
}

function PlayGame(playerChoice) {
    StartRoundChecks();
    gameInProgress = true;
    const computerRandomChoice = GetBobsAnswer();
    const resultElement = document.getElementById('result');
    let SetRound = document.getElementById('round');
    if (playerChoice === computerRandomChoice) {
        resultElement.innerText = `You tied! Bob choose ${computerRandomChoice}.`;
        curRound = curRound;
        SetRound.innerText = 'Current Round: ' + curRound + '/' + MaxRounds;
    } else if (playerChoice == 'scissors' && computerRandomChoice == 'paper' || playerChoice == 'paper' && computerRandomChoice == 'rocks' || playerChoice == 'rock' && computerRandomChoice == 'scissors') {
        resultElement.innerText = `You won! Bob choose ${computerRandomChoice}.`;
        curRound += 1;
        SetRound.innerText = 'Current Round: ' + curRound + '/' + MaxRounds;
    } else {
        resultElement.innerText = `You lost! Bob choose ${computerRandomChoice}.`;
        curRound = 0;
        SetRound.innerText = 'Current Round: ' + curRound + '/' + MaxRounds;
    }
}

function StartRoundChecks () {
    if (gameInProgress) return;
    const playerBalance = document.getElementById('user-balance');
    playerBalance.innerText = userBalance == 0 ? `Balance: $0` : 'Balance: ' + userBalance.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
    setInterval(() => {
        if (curRound >= MaxRounds) {
            const resultElement = document.getElementById('result');
            const playerBalance = document.getElementById('user-balance');
            let SetRound = document.getElementById('round');
            let randomMoneyAmount = RandomPrize();
            let amount = Number(randomMoneyAmount);
            let formattedAmount = amount.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
            userBalance += amount;
            let formattedBalance = userBalance.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
            curRound = 0;
            playerBalance.innerText = `Balance: ${formattedBalance}`;
            resultElement.innerHTML = `<b> You won all ${MaxRounds} rounds and won ${formattedAmount} !</b>`;
            SetRound.innerText = 'Current Round: ' + curRound + '/' + MaxRounds;
            gameInProgress = false;
            return;
        }
    }, 1000);
}
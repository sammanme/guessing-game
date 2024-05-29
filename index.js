let randomNumber = Math.floor(Math.random() * 100) + 1;
let messages = [
    "Try again, baby",
    "You can do it, try another number",
    "There is still a glimmer of light ahead, try more",
    "Maybe your age will do",
    "Try your birthday or birth month",
    "You really must be bad at guessing, I guess"
];

let guessCount = 0;
const maxGuesses = 3;

function getRandomMessage() {
    let randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function submitButton(event) {
    event.preventDefault();
    let inputElement = document.getElementById('input');
    let messageElement = document.getElementById('message');
    let guessedNumber = inputElement.value;

    if (!/^\d+$/.test(guessedNumber)) {
        messageElement.textContent = 'Please enter a valid number!';
        return;
    }

    guessedNumber = parseInt(guessedNumber);

    guessCount++;

    if (guessedNumber < 1) {
        messageElement.textContent = 'Value is too low';
    } else if (guessedNumber > 100) {
        messageElement.textContent = 'Value is too high';
    } else if (guessedNumber === randomNumber) {
        messageElement.textContent = 'Correct Guess';
        disableGame();
    } else {
        messageElement.textContent = getRandomMessage() + " , " + "Also the invisible number is: " + randomNumber;
    }

    if (guessCount >= maxGuesses) {
        messageElement.textContent = 'Game Over. The correct number was ' + randomNumber;
        disableGame();
    }
}

function disableGame() {
    document.getElementById('input').disabled = true;
    document.getElementById('submit').disabled = true;
}

document.getElementById('submit').addEventListener('click', submitButton);

console.log('Random Number:', randomNumber);


// Variables

const strings = [
    "Stay positive!",
    "Keep pushing forward!",
    "Believe in yourself!",
    "The journey is the destination.",
    "Success is the sum of small efforts.",
    "Dream big, work hard!",
    "Make today amazing!",
    "You are stronger than you think.",
    "Your future is created by what you do today.",
    "Don’t stop until you’re proud."
];

let displayedStrings = [];

// Functions

function getRandomString() {
    if (displayedStrings.length === strings.length) {
        displayedStrings = [];
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * strings.length);
    } while (displayedStrings.includes(randomIndex));

    displayedStrings.push(randomIndex);

    return strings[randomIndex];
}

function generateRandomString() {
    const randomString = getRandomString();
    document.getElementById('output').textContent = randomString;
}

//Event Listener

document.getElementById('generateBtn').addEventListener('click', generateRandomString);

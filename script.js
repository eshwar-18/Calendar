
// Variables

const strings = [
    "The year becomes new, the day becomes holy, when you sanctify it by spiritual discipline, not otherwise.",
    "Start the day with love, spend the day with love, fill the day with love, end the day with love, this is the way to God.",
    "Money comes and grows; but morality comes and grows.",
    "See yourself in all; love all as yourself. That is the attitude you must learn to possess; that will save you from needless bother.",
    "When you act properly in the present, the future will take care of itself. Do what is appropriate at the moment.",
    "Your body is the temple of God and your heart is the sactum sanctorum. God is the resident in your heart, you should realisze thise truth",
    "All the actions we perform should contribute to purity of thoughts.",
    "Do good, be good, see good, this is the way to God.",
    "A sound mind ensures a sound body; a sound body ensures a sound mind.",
    "Forgiveness is a quality that every man should possess. Forgiveness is Truth tself; it is Righteousness; it is Veda. It is the supreme virtue in this world.",
    "The body will shine, if the character is fine; service of man and worshiup of God will preserve its charm.",
    "Vivkananda adhered to his mother's advices, led an exemplary life and achieved name and fame.",
    "Love is seldlessness, self is lovelessness.",
    "All work is God's; He inspires. He helps. He executes. He enjoys. He is pleased. He reaps. He sowed.",
    "Education is not for mere living; it is for life, a more meaningful, worthwhile life. Be aware that gainful employment is not all.",
    "Wisdom is only compassion at its height; for, through sympathy you enter the heart of another and understand him.",
    "The grace of God is like insurance. It will help you in your time of need without any limit.",
    "It is not the standard of living that is important, but the manner of living.",
    "You must render service out of spontaneous urge from wuithin, with a heart filled with love.",
    "Food has subtle impact on the feelings and thoughts. Food offered to God is free from the evil vibrations that injure in subtle ways. Food partaken after offering to the hungry has the same beneficial quality.",
    "A society has to be welded into a unit byu the consciousness of kinship in God.",
    "The service of man is the only means by which you can serve God.",
    "God is in y ou. God is in every word and thought. Speak, do, and think as befits Him.",
    "Divinity can only be experienced and cannot be described. Man can experience the power of divinity depending upom his capability.",
    "Your thoughts play a vital role in shaping your life",
    "Love of the country is the basis, on which you can build love for the world community.",
    "Reform the body, reconstruct the mind, regulate tghe way of living. Then, the country wil become automaticvally strong and prosperous.",
    "Any act that is done with purity in though,, word and deed is Dharma.",
    "There is only one royal road for the spiritual journey... Love",
    "Unwavering faith is the sign of spiritual success.",
    "The present is a product of the past, but it is also the seed for the future.",
    "There is only one God. He is omnipotent.",
    "There is only one caste, the caste of humanity.",
    "There is only one religion, the religion of love.",
    "There is only one language, the language of the Heart."

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


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
    "Love is selflessness, self is lovelessness.",
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
    "Reform the body, reconstruct the mind, regulate the way of living. Then, the country wil become automaticvally strong and prosperous.",
    "Any act that is done with purity in though,, word and deed is Dharma.",
    "There is only one royal road for the spiritual journey... Love",
    "Unwavering faith is the sign of spiritual success.",
    "The present is a product of the past, but it is also the seed for the future.",
    "There is only one God. He is omnipotent.",
    "There is only one caste, the caste of humanity.",
    "There is only one religion, the religion of love.",
    "There is only one language, the language of the Heart.",
    "The mind sees separatejness, love sees unity",
    "Just as you feed the body, and care for its upkeep, the mind, thought and intellect have also to be fed with good nourishing food.",
    "The spirit of sacrifice is the hallmark of true education",
    "Devotion and faith are the two oars with which you can take the boat of life across the sea of samsara.",
    "A man's well-being depends upon his degree of contentment",
    "Every living being in this world is knowingly or unknowingly on a spiritual pilgimage.",
    "Every man is the embodiment of God.",
    "Character is the most precious gift of education.",
    "Life is a challenge, meet it! Life is a dream, realise it! Life is a game, play it! Life is Love, enjoy it!",
    "You are all members of the same family, bound by the religion of love.",
    "Do not seek to discover or discuss the evil in others, for the attempt will tarnish your own mind.",
    "Surrendering the fruit of action to the lord is real sacrifice.",
    "Devotion is not a uniform to be worn on certain days and then to be put aside.",
    "If the mind of man is not reformed and purified, then all the plans to reform the world will be futile.",
    "What God gives is never exhausted. What man gives never lasts.",
    "Love must express itself as service.",
    "Self-confidence is the basis of faith in God.",
    "Doubt is easy and faith is difficult.",
    "When you approach God and seek his help and guidance, you have taken the first step to save yourself.",
    "Compassion towards all beings is devotion to God.",
    "Give the body the attention is deserves, but not more.",
    "What everyone should seek is the grace of God, which is greater treasure than all of the wealth of the world.",
    "Follow the Master, Face the Devil, Fight to the end, Finish the game.",
    "You must make the mind the servant of God, not the slave of the senses.",
    "What you would desire to do for you, you should do for others. You should respect others, as you want to be respected by them.",
    "Good company is important. It helps to cultivate good qualities.",
    "As close as you are to God, so close is God to you.",
    "The synthesis of pure calming food is breathing pure air, liostening to good sounds, looking at good sights, and touching good sights, and touching pure objects.",
    "People say 'I want peace'. 'I' is ego, 'want' is desire. Temove 'I' and 'want' and you have peace.",
    "The gift of food to the hungry is the noblest of all gifts.",
    "We must control our desires. Don't waste money, Don't waste time, Don't waste food, Don't waste energy.",
    "When we sit down for a meal, we feel light and effortless. When we are done, we should rise with the same feeling of lightness and effortlessness.",
    "Love sees all as one divine family.",
    "Thinking, discrimination, and practice - all three constitute the basic human characteristics.",
    "We should realise that man has not only a mind, which conceives thoughts, but also a heart, which can put them into practice.",
    "Real peace can be secured only by renunciation and sacrifice.",
    "It is truth and truth alone, that is one's real friend and relative.",
    "Love doesn't allow any room for pettiness or narrow outlook.",
    "There is no meaning in rejoicing when a child is born. The time for rejoicing will come when the child grows uop, earns good name and fame and brings bredit to his parents.",
    "Renunciation is the power of battling against evil forces and holding the mind in check.",
    "Your thoughts are the root cause of everything. Therefore, you should have only noble, sacred, pure thoughts.",
    "Why doubt whether you would be saved or not when the Saviour Himself is by your side.",
    "Teachers must be examples of love and truth.",
    "Service is the highest form of worship and the best penance.",
    "Desire makes man forget his real nature and reduces him to the level of a beast.",
    "Let the different faiths exist, let them flourish and let the glory of God be sung in all the languages and in a variety of tunes.",
    "Dedicate all your thoughts, words, and deeds to God.",
    "Faith is like our life breath. It is impossible to live even for a minute in this world, without faith.",
    "Man will realise his mission on earth, when he knows himself as divine and reveres others as divine.",
    "If you give up ego and surrender to the Lord, He will guide you and guard you.",
    "Ignorance is the root cause of sorrow.",
    "God gave you the time, space, cause material, idea, skill, chance, and fortune. Why should you feel as if you are the deer?",
    "Once we surrender our mind to GHod completely, He will take care of us in every way.",
    "The love of God should be free from any desire for favours.",
    "Learn to speak what you feel and act what you speak.",
    "Small minds select narrow roads; expand your mental vision and take to the broad road of helpfulness, compassion, and service.",
    "Try to conduct yourself in such a way as not to injure others.",
    "Politics without principles, education without character, character without humility, and commerce without morality are not only useless, but positiveley dangerous.",
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
